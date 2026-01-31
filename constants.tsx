
import { DayPlan, BackupPlan, Souvenir, PracticalInfo } from './types';

export const ITINERARY: DayPlan[] = [
  {
    id: '2026-02-01',
    date: '2/1',
    weekday: '日',
    summary: '抵達與牛車水文化巡禮',
    accommodation: 'Hotel Mono (牛車水)',
    items: [
      { time: '01:45', title: '台北起飛', description: '桃園機場 TPE', locationName: '桃園國際機場' },
      { time: '06:25', title: '抵達新加坡', description: '樟宜機場 SIN', locationName: 'Changi Airport' },
      { time: '08:30', title: '寄放行李', description: '前往 Hotel Mono 寄放行李並吃早餐（天天海南雞飯/芳林熟食）', locationName: 'Hotel Mono', mapQuery: 'Hotel Mono Singapore' },
      { time: '10:30', title: '牛車水巡禮', description: '遊覽馬里安曼興都廟、佛牙寺龍華院', locationName: 'Buddha Tooth Relic Temple', mapQuery: 'Buddha Tooth Relic Temple' },
      { time: '18:30', title: '全家團圓晚餐', description: '與小哥聚餐慶祝抵達', locationName: 'Chinatown Singapore', mapQuery: 'Chinatown Food Street Singapore' }
    ]
  },
  {
    id: '2026-02-02',
    date: '2/2',
    weekday: '一',
    summary: '任務日：辦事處送件',
    accommodation: 'Hotel Mono (牛車水)',
    items: [
      { time: '09:00', title: '重要任務：mTower 送件', description: '前往駐星辦事處 (23樓) 遞交文件。電話: 65000111', isImportant: true, locationName: 'mTower Singapore', mapQuery: 'mTower Alexandra Road' },
      { time: '11:30', title: '午餐休息', description: 'ARC 購物中心 (亞坤/南洋老咖啡) 或 Mapletree Business City', locationName: 'Alexandra Retail Centre', mapQuery: 'Alexandra Retail Centre' },
      { time: '14:00', title: '自然漫步', description: 'Labrador Nature Reserve (拉柏多自然保護區) 享受海濱步道', locationName: 'Labrador Nature Reserve', mapQuery: 'Labrador Nature Reserve' },
      { time: '17:00', title: '義順區探險', description: '前往義順享用高 CP 值美食與貓山王榴槤', locationName: 'Yishun Block 848 Famous Durian', mapQuery: 'Block 848 Yishun Street 81' }
    ]
  },
  {
    id: '2026-02-03',
    date: '2/3',
    weekday: '二',
    summary: '烏敏島自然風光',
    accommodation: 'Hotel Mono (牛車水)',
    items: [
      { time: '09:00', title: '烏敏島之旅', description: '體驗原始甘榜風情 (需搭船，$4 新幣)', locationName: 'Pulau Ubin', mapQuery: 'Changi Point Ferry Terminal' },
      { time: '15:00', title: '東海岸/樟宜村', description: '悠閒走走，享受海風', locationName: 'Changi Village', mapQuery: 'Changi Village' },
      { time: '18:30', title: '義順泰國菜', description: '北勝泰國小食 (三味魚必點) 或 BKK Bistro', locationName: 'Bei Sheng Seafood', mapQuery: 'Bei Sheng Seafood Restaurant' }
    ]
  },
  {
    id: '2026-02-04',
    date: '2/4',
    weekday: '三',
    summary: '換宿與聖淘沙取件',
    accommodation: 'Hotel Grand Pacific',
    items: [
      { time: '10:00', title: '換宿', description: '移宿至 Hotel Grand Pacific 寄放行李', locationName: 'Hotel Grand Pacific', mapQuery: 'Hotel Grand Pacific Singapore' },
      { time: '13:30', title: '重要任務：mTower 取件', description: '下午 1:30 準時取件，檢查姓名與護照號碼', isImportant: true, locationName: 'mTower Singapore', mapQuery: 'mTower Alexandra Road' },
      { time: '15:30', title: '聖淘沙樂活', description: '參觀 S.E.A. 海洋館 (建議搭 Grab)', locationName: 'S.E.A. Aquarium', mapQuery: 'S.E.A. Aquarium Sentosa' }
    ]
  },
  {
    id: '2026-02-05',
    date: '2/5',
    weekday: '四',
    summary: '濱海灣經典漫步',
    accommodation: 'Hotel Grand Pacific',
    items: [
      { time: '10:00', title: '經典地標', description: '富麗敦酒店、魚尾獅公園打卡', locationName: 'Merlion Park', mapQuery: 'Merlion Park Singapore' },
      { time: '14:00', title: '藝術中心', description: '沿河漫步至濱海藝術中心 (大榴槤)', locationName: 'Esplanade', mapQuery: 'Esplanade Singapore' },
      { time: '19:00', title: '金沙水舞', description: '欣賞金沙酒店水舞秀', locationName: 'Marina Bay Sands', mapQuery: 'Spectra - A Light & Water Show' },
      { time: '20:30', title: '墨西哥河畔晚餐', description: 'Haldi & Mexicana (克拉碼頭 Read Bridge 旁)', locationName: 'Haldi & Mexicana', mapQuery: 'Haldi & Mexicana Clarke Quay' }
    ]
  },
  {
    id: '2026-02-06',
    date: '2/6',
    weekday: '五',
    summary: '跨境小旅行：新山',
    accommodation: 'Hotel Grand Pacific',
    items: [
      { time: '08:00', title: '前往新山 (JB)', description: '記得帶護照，預留過關排隊時間', locationName: 'Johor Bahru Checkpoint', mapQuery: 'JB Sentral' },
      { time: '12:00', title: '金龍咖喱魚頭', description: '必吃陳旭年街人氣美食', locationName: 'Kam Long Curry Fish Head', mapQuery: 'Kam Long Curry Fish Head JB' },
      { time: '15:00', title: '購物與按摩', description: '新山商場購物與放鬆', locationName: 'City Square JB', mapQuery: 'Johor Bahru City Square' },
      { time: '20:00', title: '回新加坡', description: '返回 Hotel Grand Pacific', locationName: 'Hotel Grand Pacific', mapQuery: 'Hotel Grand Pacific Singapore' }
    ]
  },
  {
    id: '2026-02-07',
    date: '2/7',
    weekday: '六',
    summary: '溫泉與星耀樟宜',
    accommodation: '樟宜機場 (深夜)',
    items: [
      { time: '09:00', title: '溫泉體驗', description: '三巴望溫泉公園煮蛋，放鬆心情', locationName: 'Sembawang Hot Spring Park', mapQuery: 'Sembawang Hot Spring Park' },
      { time: '14:00', title: '最後採買', description: '武吉士 (Bugis) 附近逛逛採購伴手禮', locationName: 'Bugis Junction', mapQuery: 'Bugis Junction' },
      { time: '19:00', title: '星耀樟宜', description: '欣賞雨漩渦水瀑布與晚餐', locationName: 'Jewel Changi', mapQuery: 'Jewel Changi Airport' },
      { time: '21:00', title: '行李寄放/報到', description: '第一航廈入口右轉寄放行李 (T1)', locationName: 'Changi T1 Baggage', mapQuery: 'Changi Airport Terminal 1' }
    ]
  },
  {
    id: '2026-02-08',
    date: '2/8',
    weekday: '日',
    summary: '平安歸賦',
    accommodation: '台北家中',
    items: [
      { time: '00:55', title: '起飛歸途', description: '樟宜機場起飛', locationName: 'Changi Airport T1', mapQuery: 'Changi Airport' },
      { time: '05:30', title: '抵達台灣', description: '抵達桃園機場 TPE', locationName: '桃園機場', mapQuery: 'Taoyuan International Airport' }
    ]
  }
];

export const BACKUP_PLANS: BackupPlan[] = [
  {
    id: 'backup-gardens-by-bay',
    title: '濱海灣花園 (兩大冷室)',
    subtitle: '室內避暑/雨天首選',
    description: '花穹 (Flower Dome) 與雲霧林 (Cloud Forest) 全室內冷氣，無障礙坡道完美設計，35 公尺高室內瀑布震撼視覺。',
    uxHighlight: '全室內冷氣，無障礙坡道做得非常完美，長輩走路不累',
    locationName: 'Gardens by the Bay',
    mapQuery: 'Cloud Forest Gardens by the Bay',
    category: 'indoor',
    replaceDates: ['2/5 下午']
  },
  {
    id: 'backup-tiong-bahru',
    title: '中峇魯 (Tiong Bahru)',
    subtitle: '文化與美食並行',
    description: '新加坡最優雅的組屋建築，氛圍懷舊且步調慢。中峇魯市場二樓熟食中心有全星最強的水粿與滷麵。',
    uxHighlight: '觀光客相對少，長輩會覺得更清幽，有新加坡最優雅的組屋建築',
    locationName: 'Tiong Bahru Market',
    mapQuery: 'Tiong Bahru Market & Food Centre',
    category: 'cultural',
    replaceDates: ['2/1 或 2/7']
  },
  {
    id: 'backup-telok-blangah',
    title: '直落布蘭雅山公園 (Telok Blangah Hill)',
    subtitle: '2/2 辦事處附近深度選擇',
    description: '架高在樹冠層的平坦步道，完全不需爬坡。空中走廊非常震撼，就在 mTower 附近。',
    uxHighlight: '架高步道完全不需爬坡，適合長輩輕鬆走完',
    locationName: 'Telok Blangah Hill Park',
    mapQuery: 'Forest Walk Telok Blangah Hill Park',
    category: 'nature',
    replaceDates: ['2/2 送件完']
  }
];

export const SOUVENIRS: Souvenir[] = [
  {
    id: 'souvenir-tiger-balm',
    name: '虎標萬金油/痠痛貼布',
    nameEn: 'Tiger Balm',
    category: 'elder-friendly',
    reason: '新加坡國寶，紅色版治痠痛、白色版治頭痛。長輩對此品牌的信任度極高。',
    purchaseLocation: ['屈臣氏 (Watsons)', 'Guardian 藥妝店']
  },
  {
    id: 'souvenir-old-seng-choong',
    name: '老成昌餅乾',
    nameEn: 'Old Seng Choong',
    category: 'classic-food',
    reason: '包裝極美（適合 UX 網站視覺），口味很有特色，如：肉骨茶味、叻沙味曲奇。',
    purchaseLocation: ['星耀樟宜 (Jewel Changi)'],
    uxNote: '包裝設計精美，視覺效果滿分'
  },
  {
    id: 'souvenir-eu-yan-sang',
    name: '余仁生燕窩或養生品',
    nameEn: 'Eu Yan Sang',
    category: 'health',
    reason: '新加坡起家的老字號，品質比台灣更便宜且道地。',
    purchaseLocation: ['余仁生門市', '機場免稅店']
  },
  {
    id: 'souvenir-bengawan-solo',
    name: '斑蘭蛋糕',
    nameEn: 'Bengawan Solo Pandan Cake',
    category: 'classic-food',
    reason: '綠色蛋糕體，帶著淡淡椰香，被稱為「新加坡國糕」。最方便的伴手禮。',
    purchaseLocation: ['機場航廈內領取（2/8 出境前）', 'Bengawan Solo 門市'],
    uxNote: '機場領取最新鮮'
  },
  {
    id: 'souvenir-bacha-coffee',
    name: '夿萐咖啡',
    nameEn: 'Bacha Coffee',
    category: 'luxury',
    reason: '包裝精美到像藝術品，視覺效果滿分，雖然價格稍高，但送禮非常有面子。',
    purchaseLocation: ['機場免稅店'],
    priceRange: 'S$20-60',
    uxNote: '包裝設計像藝術品'
  },
  {
    id: 'souvenir-bak-kut-teh-spice',
    name: '松發/黃亞細肉骨茶包',
    nameEn: 'Song Fa / Ng Ah Sio Bak Kut Teh Spice',
    category: 'classic-food',
    reason: '輕便好帶，回家加排骨就能還原新加坡味。',
    purchaseLocation: ['超市 (FairPrice, Cold Storage)', '肉骨茶餐廳']
  }
];

export const PRACTICAL_INFO: PracticalInfo = {
  exchangeRate: 24,
  grabEstimate: 'S$12-20 (市區移動)',
  officePhone: ['+65 6500 0111'],
  importantReminders: [
    'mTower 23樓，2/4 下午 1:30 開放取件',
    '新加坡交通多用 Grab/Gojek 叫車最省力',
    'EZ-Link 儲值卡隨時確認餘額',
    '隨身攜帶水壺與防曬，氣溫較高'
  ]
};
