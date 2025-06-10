## 基本结构

# 自动发文工作台

这是一个多平台自动化发文工具。它能一键打开多个社交平台的发文页面，简化你的内容发布流程。首次登录后，账号信息会自动保存为本地cookies文件，后续无需重复登录，从此免密直达各大社交平台发文页面，极速简化你的发布工作流。

### 主要功能
- 自动加载本地的 **cookies**，无需频繁登录。
- **自定义社媒平台配置**，支持多个平台的 URL 配置。
- **插件式架构**，可以自由增加更多社媒平台。
- **简洁的命令行界面**，用于配置平台信息，并通过 JSON 文件存储。
- 自动打开多个社交平台的发文页面，包括：**note**、**tumblr**、**instagram** 等。
### 优点
✅纯本地运行
✅不依赖复杂服务
✅自动打开发文页面 + 手动粘贴自己的文章内容 = 简单又高效


### 项目演示
[YouTube演示视频](https://youtu.be/1-cU-Ct8L0Q)

---

## 简易版使用流程

1. 获取 JSON 文件，访问：[https://italab.jp/user_data/forgithub](https://italab.jp/user_data/forgithub)，输出自选网站列表的`platforms.json`。
2. 将 JSON 文件与 `OpenAllSNSByOneClick.js` 放在同一文件夹中。
3. 使用以下命令运行脚本：
   ```bash
   npx OpenAllSNSByOneClick.js


---

## 安装与配置

1. 确保你已经安装了 **Node.js** 和  **Puppeteer**。

（检查是否安装了**Node.js**的方法：打开命令行窗口（按 Win + R，输入 cmd 并回车）。
运行以下命令，检查 Node.js 是否安装：
node -v
如果你看到版本号输出，说明 Node.js 已经正确安装。
检查是否安装了**Puppeteer**的方法：
在命令行中，进入到项目文件夹（即 OpenAllSNSByOneClick.js 文件所在目录，然后运行：
npm list puppeteer
如果显示出 Puppeteer 的版本号，说明它已经正确安装。如果没有，手动安装：
npm install puppeteer）：
）
2. 克隆此仓库并进入项目文件夹：

   ```bash
   git clone <repository-url>
   cd <project-directory>
   ```
   2. 或者是直接下载这个`OpenAllSNSByOneClick.js `到本地文件夹

3. 安装依赖：

   ```bash
   npm install puppeteer
   ```
4. 获取并下载 `platforms.json` 配置文件（从 [https://italab.jp/user\_data/forgithub](https://italab.jp/user_data/forgithub)）。
5. 确保 `platforms.json` 和 `OpenAllSNSByOneClick.js` 位于同一文件夹中。
6. 运行脚本：

   ```bash
   npx OpenAllSNSByOneClick.js
   ```

---

## 文件结构

```
📁 自动发帖神器/
│
├─ 📂 cookies/             ← 自动生成并保存每个平台的 cookies 文件
│   ├─ cookies-note.json
│   ├─ cookies-tumblr.json
│   ├─ cookies-facebook.json
│   └─ ...                 ← 其他平台的 cookies 文件
│
├─ platforms.json          ← 你输出的自己选的平台配置文件
├─ OpenAllSNSByOneClick.js ← 主脚本文件
└─ README.md               ← 项目说明文件
```

---

## 贡献

如果你有改进建议或想贡献代码，请 fork 本项目并提交 PR。

---

## 感谢
感谢chatGPT大人！