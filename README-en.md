
## Basic Structure

# Automated Posting Workbench

This is a multi-platform automated posting tool that can **open posting pages on multiple social platforms with a single click**, streamlining your content publishing workflow. After the first login, account information is automatically saved as local cookie files, so subsequent uses require no re-login. This provides instant, password-free access to major social media posting pages, drastically simplifying your publishing workflow.

### Key Features
-   Automatically loads local **cookies**, eliminating frequent logins.
-   **Customizable social media platform configuration**, supporting URL setup for various platforms.
-   **Plugin-based architecture**, allowing for the easy addition of more social media platforms.
-   **Simple Command-Line Interface (CLI)** for configuring platform information and storing it via JSON files.
-   Automatically opens posting pages for various social platforms, including: **Note**, **Tumblr**, **Instagram**, etc.

### Advantages
✅ Runs purely locally
✅ No reliance on complex services
✅ Automated page opening + manual content pasting = Simple and highly efficient

### Project Demo

[YouTube（A video demonstration）](https://youtu.be/1-cU-Ct8L0Q)

## Simple Usage Guide

1.  Obtain the JSON file by visiting: [https://italab.jp/user_data/forgithub](https://italab.jp/user_data/forgithub), to output your self-selected list of websites as `platforms.json`.
2.  Place the `platforms.json` file in the same folder as `OpenAllSNSByOneClick.js`.
3.  Run the script using the following command:
    ```bash
    npx OpenAllSNSByOneClick.js
    ```

---

## Installation & Configuration

1.  Ensure you have **Node.js** and **Puppeteer** installed.

    *(To check if **Node.js** is installed: Open your command line window (press Win + R, type `cmd` and hit Enter). Run the command `node -v`. If you see a version number output, Node.js is correctly installed.)*

    *(To check if **Puppeteer** is installed: In your command line, navigate to the project folder (i.e., the directory where `OpenAllSNSByOneClick.js` is located), then run: `npm list puppeteer`. If a Puppeteer version number is displayed, it's installed. If not, install it manually: `npm install puppeteer`.)*

2.  Clone this repository and navigate into the project folder:
    ```bash
    git clone <repository-url>
    cd <project-directory>
    ```
    OR simply download `OpenAllSNSByOneClick.js` directly to a local folder.

3.  Install dependencies:
    ```bash
    npm install puppeteer
    ```
4.  Obtain and download the `platforms.json` configuration file from [https://italab.jp/user_data/forgithub](https://italab.jp/user_data/forgithub).
5.  Ensure `platforms.json` and `OpenAllSNSByOneClick.js` are in the same folder.
6.  Run the script:
    ```bash
    npx OpenAllSNSByOneClick.js
    ```

---

## File Structure

```
📁 automated-posting-tool/
│
├─ 📂 cookies/              ← Automatically generated and saves cookie files for each platform
│   ├─ cookies-note.json
│   ├─ cookies-tumblr.json
│   ├─ cookies-facebook.json
│   └─ ...                  ← Other platform cookie files
│
├─ platforms.json          ← Your self-selected platform configuration file
├─ OpenAllSNSByOneClick.js ← Main script file
└─ README.md               ← Project README file
```

---

## Contribution

If you have suggestions for improvement or would like to contribute code, please fork this project and submit a PR.

---

## Thanks My Dear ChatCPT
```