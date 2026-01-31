# 🚀 GitHub Pages 部署指南

## ✅ 已完成步驟

1. ✅ Vite 配置已更新（base: '/singapore-trip/'）
2. ✅ GitHub Actions workflow 已建立
3. ✅ 程式碼已推送到 GitHub
4. ✅ 生產版本構建測試通過

---

## 📝 接下來需要您在 GitHub 上完成的步驟

### 步驟 1: 啟用 GitHub Pages

1. 前往您的 repository：
   ```
   https://github.com/LAI-wen/singapore-trip
   ```

2. 點擊頂部的 **Settings**（設定）標籤

3. 在左側選單中，點擊 **Pages**

4. 在 **Source** 區塊中：
   - **Source**: 選擇 `GitHub Actions`
   - （不要選擇 Deploy from a branch）

5. 儲存設定

---

### 步驟 2: 觸發首次部署

由於我們已經推送了程式碼和 workflow 文件，GitHub Actions 應該會自動開始部署。

您可以：

1. 前往 **Actions** 標籤
   ```
   https://github.com/LAI-wen/singapore-trip/actions
   ```

2. 查看是否有正在運行或完成的 workflow

3. 如果沒有自動觸發，您可以：
   - 對任何文件做一個小修改
   - 提交並推送
   - 或者在 Actions 頁面手動觸發

---

### 步驟 3: 查看部署狀態

1. 在 **Actions** 標籤中，您會看到：
   - **Build** job（構建）
   - **Deploy** job（部署）

2. 等待兩個 job 都顯示綠色勾勾 ✅

3. 部署完成後，您的網站會自動上線：
   ```
   https://lai-wen.github.io/singapore-trip/
   ```

---

## 🔍 故障排除

### 如果部署失敗

#### 問題 1: 找不到 Pages 設定
**解決方案**：確保 repository 是 public（公開的）

#### 問題 2: GitHub Actions 沒有自動運行
**解決方案**：
1. 確認 `.github/workflows/deploy.yml` 文件存在
2. 檢查 Actions 標籤是否被禁用
3. 前往 Settings > Actions > General，確保 Actions 是啟用的

#### 問題 3: Build 失敗
**解決方案**：
1. 查看 Actions 日誌，找出錯誤訊息
2. 最常見的問題：`package-lock.json` 版本不匹配
3. 解決方法：在本地運行 `npm ci` 確保無錯誤

#### 問題 4: 部署成功但網站空白或 404
**解決方案**：
1. 確認 `vite.config.ts` 中的 base 設定為 `'/singapore-trip/'`
2. 確認訪問的 URL 是 `https://lai-wen.github.io/singapore-trip/`（結尾有斜線）

---

## 🎉 部署成功後

您的網站會自動部署到：

**🌐 線上網址：** https://lai-wen.github.io/singapore-trip/

### 特色功能

- ✅ 每次推送到 `main` 分支都會自動重新部署
- ✅ 完整的行程規劃與備案方案
- ✅ 伴手禮推薦清單
- ✅ SGD/TWD 匯率轉換工具
- ✅ 響應式設計，完美支援手機閱讀

---

## 📱 分享給家人

部署完成後，您可以：

1. **直接分享連結**
   ```
   https://lai-wen.github.io/singapore-trip/
   ```

2. **加入手機主畫面**
   - iOS: Safari > 分享 > 加入主畫面
   - Android: Chrome > 選單 > 加入主畫面

3. **生成 QR Code**
   - 使用任何 QR Code 產生器
   - 列印出來方便長輩掃描

---

## 🔄 更新網站內容

如果需要更新行程或資訊：

1. 修改相關文件（App.tsx, constants.tsx 等）
2. 提交更改
3. 推送到 GitHub
4. GitHub Actions 會自動重新部署

```bash
git add .
git commit -m "Update trip information"
git push
```

---

## 📞 需要協助？

如果遇到問題，請檢查：
- [GitHub Actions 文件](https://docs.github.com/en/actions)
- [GitHub Pages 文件](https://docs.github.com/en/pages)

或參考專案中的其他文件：
- `AI_STUDIO_PROMPT.md` - 完整技術文檔
- `IMPLEMENTATION_PLAN.md` - 實作計畫
- `更新摘要.md` - 功能更新說明

---

**祝部署順利！** 🚀
