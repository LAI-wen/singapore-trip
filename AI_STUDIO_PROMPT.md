# AI Studio 最終版 Prompt - 賴皮家族新加坡之旅 Web App

## 專案概述

這是一個為「賴皮家族」新加坡之旅設計的響應式 Web 應用程式，使用 React + TypeScript + Vite + Tailwind CSS 構建。應用程式特別考慮到長輩的使用需求，提供友善的 UX 設計與實用的旅行資訊。

---

## 核心功能

### 1. 五大主要 Tab

#### Tab 1: 總覽 (Overview)
- 顯示 2/1 至 2/8 完整 8 天行程摘要
- 卡片式設計，一目了然每日重點與住宿
- 行前小撇步提示區塊

#### Tab 2: 每日行程 (Daily)
- 可選擇日期的時間軸式行程表
- 每個行程點包含：時間、標題、描述、地圖導航按鈕
- 重要任務（如辦事處送件/取件）以橘色標記

#### Tab 3: 備案行程 (Backup) ⭐ 新增
- 天氣太熱/下雨/長輩體力調整時的替代方案
- 包含三個精選備案：
  - **濱海灣花園**（室內避暑）
  - **中峇魯**（文化美食）
  - **直落布蘭雅山公園**（自然步道）
- 每個備案標示「UX 亮點」與「可替代日期」

#### Tab 4: 伴手禮 (Souvenir) ⭐ 新增
- 分為四大類別：
  - 長輩最愛（虎標萬金油、余仁生）
  - 經典美食（斑蘭蛋糕、肉骨茶包）
  - 健康養生（燕窩）
  - 精品送禮（Bacha Coffee、老成昌餅乾）
- 每項商品包含：中英文名稱、推薦理由、購買地點、價格區間、UX 建議

#### Tab 5: 重要必讀 (Info)
- **匯率轉換工具** ⭐ 新增：即時計算 SGD ↔ TWD（固定匯率 1:24）
- 駐星辦事處聯絡資訊與地址（含 tel: 直撥連結）
- 星耀樟宜行李寄放費用表
- 辦事處周邊長輩友善餐飲推薦
- 行前小撇步清單

---

## 設計規範

### UX 設計理念

1. **長輩友善**
   - 所有可點擊按鈕最小高度 44px（符合無障礙標準）
   - 文字對比度高，易於閱讀
   - 卡片式設計降低認知負擔

2. **色彩系統**
   - 主色調：藍色系（專業、信任感）
   - 警示色：橘色（重要任務）
   - 類別識別：
     - 室內避暑 → 藍色
     - 文化景點 → 紫色
     - 自然景觀 → 綠色

3. **互動設計**
   - 所有外部連結開新分頁（Google Maps、電話撥號）
   - 底部導航固定懸浮，方便快速切換
   - 圖標 + 文字標籤雙重提示

---

## 資料結構

### 資料類型（TypeScript）

```typescript
// 每日行程項目
interface ScheduleItem {
  time: string;              // 時間（如 "09:00"）
  title: string;             // 標題
  description: string;       // 描述
  locationName?: string;     // 地點名稱
  mapQuery?: string;         // Google Maps 查詢字串
  isImportant?: boolean;     // 是否為重要任務
}

// 備案行程
interface BackupPlan {
  id: string;
  title: string;             // 標題（中文）
  subtitle: string;          // 副標題
  description: string;       // 完整描述
  uxHighlight: string;       // UX 亮點
  locationName: string;
  mapQuery: string;
  category: 'indoor' | 'cultural' | 'nature';
  replaceDates: string[];    // 可替代的日期（如 ["2/5 下午"]）
}

// 伴手禮
interface Souvenir {
  id: string;
  name: string;              // 中文名稱
  nameEn?: string;           // 英文名稱
  category: 'elder-friendly' | 'classic-food' | 'health' | 'luxury';
  reason: string;            // 推薦理由
  purchaseLocation: string[];// 購買地點列表
  priceRange?: string;       // 價格區間（如 "S$20-60"）
  uxNote?: string;           // UX 建議
}
```

---

## 關鍵功能實作

### 1. Google Maps 整合

所有地點都包含「地圖導航」按鈕，使用以下格式：

```typescript
const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(mapQuery)}`;
```

### 2. 電話撥號連結

辦事處電話使用 `tel:` 協議，可直接在手機上撥號：

```html
<a href="tel:65000111">撥打電話</a>
```

### 3. 匯率轉換工具

使用 React State 管理，固定匯率 1 SGD = 24 TWD：

```typescript
const [sgdAmount, setSgdAmount] = useState<string>('');
const twdAmount = sgdAmount ? (parseFloat(sgdAmount) * 24).toFixed(0) : '';
```

---

## 補充資訊（供 AI Studio 加強）

### 可擴充功能建議

1. **天氣整合**
   - 使用 OpenWeatherMap API 顯示新加坡即時天氣
   - 根據天氣狀況自動推薦備案行程

2. **倒數計時器**
   - 在 2/4 下午 1:30 取件前顯示倒數提醒
   - 在各重要任務加入時間提醒

3. **離線模式**
   - 使用 Service Worker 實現 PWA
   - 將行程資料快取，無網路時仍可查看

4. **多語言支援**
   - 加入英文版本，方便與當地人溝通
   - 關鍵地點名稱中英對照

5. **費用追蹤**
   - 記錄每日支出
   - 自動換算新幣 ↔ 台幣

---

## 檔案結構

```
賴皮家族新加坡之旅/
├── App.tsx              # 主要元件（含所有 Tab）
├── constants.tsx        # 資料常數（行程、備案、伴手禮）
├── types.ts            # TypeScript 類型定義
├── index.tsx           # 應用程式入口
├── index.html          # HTML 模板
├── package.json        # 依賴管理
└── vite.config.ts      # Vite 設定
```

---

## 開發指令

```bash
# 安裝依賴
npm install

# 啟動開發伺服器
npm run dev

# 編譯生產版本
npm run build

# 預覽生產版本
npm run preview
```

---

## 重要聯絡資訊（已內建）

- **駐星辦事處電話**：+65 6500 0111
- **辦事處地址**：460 Alexandra Road, #23-00, Singapore 119963
- **受理時間**：
  - 遞件：09:00 - 11:30（上午）
  - 取件：13:30 - 16:00（下午）⚠️ **2/4 下午 1:30 務必準時**

---

## 設計細節提醒

### 色彩配置
- 主要藍色：`#2563eb` (blue-600)
- 成功綠色：`#059669` (emerald-600)
- 警示橘色：`#f97316` (orange-500)
- 背景灰色：`#f9fafb` (gray-50)

### 圓角設計
- 卡片：`rounded-3xl` (24px)
- 按鈕：`rounded-2xl` (16px)
- 小標籤：`rounded-full`

### 陰影層級
- 一般卡片：`shadow-md`
- 重要卡片：`shadow-lg`
- 浮動元件：`shadow-xl`

---

## AI Studio 進階優化指令

如果您要將此專案部署到 AI Studio 或進一步優化，可以下達以下指令：

1. **「加入天氣 API 並根據天氣推薦備案行程」**
2. **「實作 PWA 離線功能」**
3. **「加入多語言切換（繁中/英文）」**
4. **「建立費用追蹤功能，並整合匯率轉換」**
5. **「優化行動裝置體驗，加入手勢滑動切換 Tab」**
6. **「加入分享功能，可將行程分享至 LINE/Facebook」**
7. **「實作暗黑模式切換」**

---

## 授權與致謝

此專案使用以下開源技術：
- React 19
- TypeScript 5
- Vite 6
- Tailwind CSS 4
- Lucide React (圖標)

設計靈感來源：新加坡觀光局、UX 最佳實踐指南、長輩友善設計規範

---

**專案完成時間**：2026-01-31
**開發者**：Claude Code
**適用旅行日期**：2026/02/01 - 2026/02/08
