-----

## 基本構造

# 自動投稿ワークベンチ

これは、複数のソーシャルプラットフォームの投稿ページをワンクリックで開き、コンテンツ公開プロセスを簡素化するマルチプラットフォーム自動投稿ツールです。初回ログイン後、アカウント情報はローカルのCookieファイルとして自動保存されるため、2回目以降は再ログイン不要で、主要なソーシャルメディアの投稿ページにパスワードなしで直接アクセスでき、投稿ワークフローを劇的に簡素化します。

### 主な機能

  - ローカルの**Cookie**を自動読み込みし、頻繁なログインを不要にします。
  - **ソーシャルメディアプラットフォームのカスタム設定**が可能で、複数のプラットフォームのURL設定に対応しています。
  - **プラグイン形式のアーキテクチャ**により、さらに多くのソーシャルメディアプラットフォームを自由に追加できます。
  - プラットフォーム情報の設定には**シンプルなコマンドラインインターフェース**を使用し、JSONファイルとして保存します。
  - **Note**、**Tumblr**、**Instagram**など、複数のソーシャルプラットフォームの投稿ページを自動で開きます。

### 利点

✅ 純粋なローカル実行
✅ 複雑なサービスへの依存なし
✅ 自動ページ開き + 手動コンテンツ貼り付け = シンプルかつ高効率

### 使用動画

  - [YouTube動画を見る](https://youtu.be/1-cU-Ct8L0Q)
 ---

## 簡単な使用方法

1.  JSONファイルを取得します：[https://italab.jp/user\_data/forgithub](https://italab.jp/user_data/forgithub) にアクセスし、自分で選択したウェブサイトリストの `platforms.json` を出力します。
2.  `platforms.json` ファイルと `OpenAllSNSByOneClick.js` を同じフォルダに配置します。
3.  以下のコマンドを使用してスクリプトを実行します：
    ```bash
    npx OpenAllSNSByOneClick.js
    ```

-----

## インストールと設定

1.  **Node.js** と **Puppeteer** がインストールされていることを確認してください。

    （**Node.js** のインストール確認方法：コマンドラインウィンドウ（Win + Rを押して`cmd`と入力しEnter）を開きます。
    以下のコマンドを実行して、Node.jsがインストールされているか確認します：

    ```bash
    node -v
    ```

    バージョン番号が表示されれば、Node.jsは正しくインストールされています。

    **Puppeteer** のインストール確認方法：
    コマンドラインでプロジェクトフォルダ（`OpenAllSNSByOneClick.js`ファイルがあるディレクトリ）に移動し、以下を実行します：

    ```bash
    npm list puppeteer
    ```

    Puppeteerのバージョン番号が表示されれば、正しくインストールされています。表示されない場合は、手動でインストールしてください：

    ```bash
    npm install puppeteer
    ```

    ）

2.  このリポジトリをクローンし、プロジェクトフォルダに入ります：

    ```bash
    git clone <repository-url>
    cd <project-directory>
    ```

    または、`OpenAllSNSByOneClick.js` を直接ローカルフォルダにダウンロードします。

3.  依存関係をインストールします：

    ```bash
    npm install puppeteer
    ```

4.  `platforms.json` 設定ファイルを取得・ダウンロードします（[https://italab.jp/user\_data/forgithub](https://italab.jp/user_data/forgithub) から）。

5.  `platforms.json` と `OpenAllSNSByOneClick.js` が同じフォルダにあることを確認してください。

6.  スクリプトを実行します：

    ```bash
    npx OpenAllSNSByOneClick.js
    ```

-----

## ファイル構造

```
📁 自動投稿ツール/
│
├─ 📂 cookies/              ← 各プラットフォームのCookieファイルを自動生成・保存
│   ├─ cookies-note.json
│   ├─ cookies-tumblr.json
│   ├─ cookies-facebook.json
│   └─ ...                  ← その他のプラットフォームのCookieファイル
│
├─ platforms.json          ← 出力した、自分で選択したプラットフォーム設定ファイル
├─ OpenAllSNSByOneClick.js ← メインスクリプトファイル
└─ README.md               ← プロジェクト説明ファイル
```

-----

## 貢献

改善提案がある場合やコードを貢献したい場合は、このプロジェクトをフォークしてプルリクエストを送信してください。

-----

## 感謝

ChatGPT様、ありがとうございます！