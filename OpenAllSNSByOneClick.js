const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');
const readline = require('readline');

const CONFIG_FILE = 'platforms.json';

// 从配置文件读取平台列表
let platforms = [];
try {
  const data = fs.readFileSync(CONFIG_FILE, 'utf-8');
  platforms = JSON.parse(data);
} catch (e) {
  console.error(`❌ 无法读取 ${CONFIG_FILE}：`, e.message);
  process.exit(1);
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

(async () => {
  const browser = await puppeteer.launch({ headless: false, defaultViewport: null });

  for (const { name, login, editor } of platforms) {
    // 修改为保存到 cookies/ 文件夹
    const cookieFile = path.join(__dirname, 'cookies', `cookies-${name}.json`);
    const page = await browser.newPage();
    let usedSavedCookie = false;

    if (fs.existsSync(cookieFile)) {
      try {
        const cookies = JSON.parse(fs.readFileSync(cookieFile));
        await page.setCookie(...cookies);
        usedSavedCookie = true;
        console.log(`✅ 已加载 ${name} 的 cookies`);
      } catch (e) {
        console.warn(`⚠️ 加载 ${name} cookie 失败：${e.message}`);
      }
    }

    if (!usedSavedCookie) {
      console.log(`🔐 第一次登录 ${name}，请手动登录页面：${login}`);
      await page.goto(login, { waitUntil: 'domcontentloaded' });
      await new Promise(resolve => rl.question(`👉 登录 ${name} 后按 Enter 保存 cookie：`, resolve));
      const cookies = await page.cookies();
      fs.writeFileSync(cookieFile, JSON.stringify(cookies, null, 2));
      console.log(`💾 已保存 ${name} 的 cookies`);
    }

    try {
      await page.goto(editor, { waitUntil: 'domcontentloaded', timeout: 60000 });
      console.log(`🚀 已打开 ${name} 的发文页面：${editor}`);
    } catch (err) {
      console.error(`❌ 打开 ${name} 的发文页面失败：${err.message}`);
    }

  }

  console.log('\n🎉 所有平台完成 cookie 检查并打开发文页面！');

  // 附加页面
  const extraURLs = [
    'https://www.instagram.com/italab.jp',
    'https://www.threads.net/',
    'https://md.multipost.app/'
  ];

  for (const extraURL of extraURLs) {
    const extraPage = await browser.newPage();
    await extraPage.goto(extraURL, {
      waitUntil: 'domcontentloaded',
      timeout: 60000
    });
    console.log(`📂 已打开附加页面：${extraURL}`);
  }

  rl.close();
})();
