## 手作模型|實體課程

提供模型設計稿讓學員體驗從 3D 列印一個原型，再上色的過程，不用會做設計稿也能實現自己做模型的樂趣，另外也有提供模型展覽活動資訊，有分需要報名或者可以免費入場的參展消息發佈，讓對模型有興趣的學員，不錯過參展機會。

## 功能

前台

- 首頁製作流程、環境介紹、展覽資訊
- 顯示課程列表
- 顯示展覽資訊列表
- 依照類別篩選課程
- 查看課程簡介
- 查看課程簡介，還可以查看同類型的課程
- 同類別課程列表
- 課程加入預約清單
- 課程加入收藏清單與移除
- 顯示收藏清單列表
- 預約清單進行付款
- 編輯預約課程人數、取消預約
- 查詢己付款的訂單記錄
- 填寫預約課程資訊、表單驗證、送出預訂


後台(管理者)

- 檢視預約課程列表
- 管理新增預約課程品項
- 管理刪除預約課程品項
- 管理編輯預約課程品項
- 檢視預約課程訂單列表
- 檢視課程訂單
- 刪除未付款的課程訂單


## 專案技術
Vue3 / Vite / Composition API / Vue Router / Bootstrap5 / Sass / RESTful API / Pinia


## 專案管理
Notion / whimsical / Git / GitHub / 


## 環境變數

請將 `.env.example` 複製一份並命名為 `.env`，並將裡面的環境變數設定為你的值。

```bash
cp .env.example .env
```

### 安裝套件

```bash
npm install
```

### 啟動開發環境

```bash
npm run dev
```

### 打包專案

```bash
npm run build
```

### 部署專案

```bash
npm run deploy
```

## 套件

- axios (^1.6.7)
- bootstrap (^5.3.2)
- bootstrap-icons (^1.11.3)
- dotenv (^16.3.1)
- pinia (^2.1.7)
- vue (^3.3.11)
- vue-router (^4.2.5)
- sweetalert2 (^11.10.5)
- @popperjs/core (^2.11.8)
- vee-validate/i18n (^4.12.5)
- vee-validate/rules (^4.12.5)
- aos (^2.3.4)
- eslint (^8.49.0)
- eslint-config-airbnb-base (^15.0.0)
- eslint-import-resolver-alias (^1.1.2)
- eslint-plugin-import (^2.29.1)
- eslint-plugin-n (^16.6.2)
- eslint-plugin-promise (^6.1.1)
- eslint-plugin-vue (^9.20.1)
- gh-pages (^6.1.1)
- sass (^1.69.7)
- vite (^5.0.10)
- vite-plugin-eslint (^1.8.1)

## 資料夾結構

- `.vscode`：Visual Studio Code 的設定檔
- `dist`：打包後的檔案
- `public`：公開的靜態檔案
- `src`：專案的程式碼
  - `assets`：靜態檔案
  - `components`：元件
  - `router`：路由
  - `store`：狀態管理
  - `views`：頁面
  - `App.vue`：根元件
  - `main.js`：進入點
- `.env.example`：環境變數範本
- `.eslintrc.js`：ESLint 設定檔
- `.gitignore`：Git 忽略檔案
- `.nvmrc`：Node.js 版本
- `index.html`：進入點 HTML
- `package-lock.json`：套件版本鎖定
- `package.json`：專案資訊
- `README.md`：專案說明
- `vite.config.js`：Vite 設定檔

## gh-pages 部署說明

內建預設是使用 gh-pages 進行部署，因此只需要在專案根目錄下執行以下指令即可。

```bash
npm run deploy
```
