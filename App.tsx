
import React, { useState, useMemo } from 'react';
import {
  Calendar,
  Clock,
  MapPin,
  Info,
  Phone,
  Briefcase,
  ChevronRight,
  Navigation,
  ExternalLink,
  ChevronDown,
  AlertCircle,
  CloudRain,
  Gift,
  DollarSign,
  Sun,
  Users,
  Utensils
} from 'lucide-react';
import { ITINERARY, BACKUP_PLANS, SOUVENIRS, PRACTICAL_INFO } from './constants';
import { Tab, DayPlan, ScheduleItem, BackupPlan, Souvenir } from './types';

// Components
const TabButton: React.FC<{ active: boolean; onClick: () => void; icon: React.ReactNode; label: string }> = ({ active, onClick, icon, label }) => (
  <button 
    onClick={onClick}
    className={`flex flex-col items-center justify-center w-full py-2 transition-all duration-300 ${active ? 'text-blue-600 scale-105' : 'text-gray-400'}`}
    style={{ minHeight: '44px' }}
  >
    <div className={`mb-1 transition-colors duration-300 ${active ? 'text-blue-600' : 'text-gray-400'}`}>
      {icon}
    </div>
    <span className="text-xs font-medium tracking-wide">{label}</span>
  </button>
);

const EventCard: React.FC<{ item: ScheduleItem }> = ({ item }) => (
  <div className={`relative ml-6 mb-8 p-4 bg-white rounded-2xl shadow-sm border ${item.isImportant ? 'border-orange-200 bg-orange-50' : 'border-gray-100'}`}>
    {/* Timeline Dot */}
    <div className={`absolute -left-[31px] top-5 w-3 h-3 rounded-full border-2 border-white ${item.isImportant ? 'bg-orange-500 shadow-[0_0_8px_rgba(249,115,22,0.5)]' : 'bg-blue-500 shadow-sm'}`}></div>
    
    <div className="flex justify-between items-start mb-1">
      <span className="flex items-center text-sm font-semibold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full">
        <Clock size={12} className="mr-1" />
        {item.time}
      </span>
      {item.isImportant && (
        <span className="flex items-center text-[10px] font-bold text-orange-600 bg-orange-100 px-2 py-0.5 rounded-full uppercase">
          重要任務
        </span>
      )}
    </div>
    
    <h3 className="text-lg font-bold text-gray-900 mb-1 leading-tight">{item.title}</h3>
    <p className="text-sm text-gray-600 mb-3 leading-relaxed">{item.description}</p>
    
    {item.locationName && (
      <div className="flex flex-wrap gap-2">
        <a 
          href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(item.mapQuery || item.locationName)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm font-medium rounded-xl transition-colors"
          style={{ minHeight: '44px' }}
        >
          <MapPin size={16} className="mr-1.5 text-red-500" />
          地圖導航
        </a>
      </div>
    )}
  </div>
);

const OverviewTab: React.FC = () => (
  <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 p-4 pb-24">
    <div className="bg-white rounded-3xl p-6 shadow-xl shadow-blue-500/5 border border-gray-100 mb-6">
      <h2 className="text-2xl font-extrabold text-gray-900 mb-4 flex items-center">
        <Calendar className="mr-2 text-blue-600" />
        行程總覽
      </h2>
      <div className="space-y-4">
        {ITINERARY.map((day) => (
          <div key={day.id} className="flex items-center p-3 hover:bg-gray-50 rounded-2xl transition-colors border-b border-gray-50 last:border-0">
            <div className="flex flex-col items-center justify-center min-w-[50px] mr-4 text-gray-400">
              <span className="text-lg font-bold text-gray-900">{day.date}</span>
              <span className="text-xs font-medium uppercase">{day.weekday}</span>
            </div>
            <div className="flex-1">
              <p className="text-sm font-semibold text-gray-900 line-clamp-1">{day.summary}</p>
              <p className="text-xs text-gray-500 flex items-center mt-0.5">
                <MapPin size={10} className="mr-1" /> {day.accommodation}
              </p>
            </div>
            <ChevronRight size={18} className="text-gray-300" />
          </div>
        ))}
      </div>
    </div>
    
    <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl p-6 shadow-xl text-white">
      <h3 className="text-lg font-bold mb-2 flex items-center">
        <Info className="mr-2" /> 行前小撇步
      </h3>
      <ul className="text-sm space-y-2 opacity-90 leading-relaxed">
        <li>• 新加坡交通多用 Grab/Gojek 叫車最省力</li>
        <li>• EZ-Link 儲值卡隨時確認餘額</li>
        <li>• 隨身攜帶水壺與防曬，氣溫較高</li>
      </ul>
    </div>
  </div>
);

const DailyTab: React.FC = () => {
  const [selectedDay, setSelectedDay] = useState(0);
  const day = ITINERARY[selectedDay];

  return (
    <div className="animate-in fade-in duration-500 pb-24">
      {/* Date Selector */}
      <div className="sticky top-0 z-10 bg-white/80 backdrop-blur-md border-b border-gray-100 overflow-x-auto no-scrollbar py-3 px-4 flex gap-3">
        {ITINERARY.map((d, idx) => (
          <button
            key={d.id}
            onClick={() => setSelectedDay(idx)}
            className={`flex-shrink-0 px-4 py-2 rounded-2xl text-sm font-bold transition-all ${
              selectedDay === idx 
              ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30 scale-105' 
              : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
            }`}
            style={{ minHeight: '44px' }}
          >
            {d.date} ({d.weekday})
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="p-4 mt-2">
        <div className="mb-6 px-2">
          <h2 className="text-2xl font-extrabold text-gray-900 leading-tight">{day.summary}</h2>
          <div className="flex items-center text-gray-500 mt-2 text-sm font-medium">
            <MapPin size={14} className="mr-1 text-blue-500" />
            住宿：{day.accommodation}
          </div>
        </div>

        {/* Timeline */}
        <div className="relative border-l-2 border-blue-100 ml-4 py-2">
          {day.items.map((item, idx) => (
            <EventCard key={idx} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

const BackupTab: React.FC = () => {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'indoor': return <CloudRain size={20} className="text-blue-500" />;
      case 'cultural': return <Users size={20} className="text-purple-500" />;
      case 'nature': return <Sun size={20} className="text-green-500" />;
      default: return <MapPin size={20} />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'indoor': return 'border-blue-200 bg-blue-50';
      case 'cultural': return 'border-purple-200 bg-purple-50';
      case 'nature': return 'border-green-200 bg-green-50';
      default: return 'border-gray-200 bg-gray-50';
    }
  };

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 p-4 pb-24">
      <div className="mb-6 px-2">
        <h2 className="text-2xl font-extrabold text-gray-900 leading-tight mb-2">備案行程</h2>
        <p className="text-sm text-gray-600">天氣太熱、下雨或長輩體力需要調整時，可隨時替換</p>
      </div>

      <div className="space-y-4">
        {BACKUP_PLANS.map((plan) => (
          <div key={plan.id} className={`bg-white rounded-3xl p-6 shadow-lg border ${getCategoryColor(plan.category)}`}>
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  {getCategoryIcon(plan.category)}
                  <span className="text-xs font-bold text-gray-500 uppercase">{plan.subtitle}</span>
                </div>
                <h3 className="text-xl font-black text-gray-900">{plan.title}</h3>
              </div>
            </div>

            <p className="text-sm text-gray-700 leading-relaxed mb-3">{plan.description}</p>

            <div className="bg-white/70 rounded-2xl p-3 mb-4 border border-gray-100">
              <p className="text-xs font-semibold text-gray-500 mb-1">UX 亮點</p>
              <p className="text-sm text-gray-800 font-medium">{plan.uxHighlight}</p>
            </div>

            <div className="flex items-center gap-2 text-xs text-gray-500 mb-4">
              <AlertCircle size={14} className="text-orange-500" />
              <span>可替代：{plan.replaceDates.join(', ')}</span>
            </div>

            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(plan.mapQuery)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-4 py-3 bg-gray-900 hover:bg-gray-800 text-white text-sm font-bold rounded-2xl transition-colors w-full"
              style={{ minHeight: '44px' }}
            >
              <MapPin size={16} className="mr-2" />
              查看地圖位置
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

const SouvenirTab: React.FC = () => {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'elder-friendly': return <Users size={18} className="text-orange-500" />;
      case 'classic-food': return <Utensils size={18} className="text-green-500" />;
      case 'health': return <AlertCircle size={18} className="text-red-500" />;
      case 'luxury': return <Gift size={18} className="text-purple-500" />;
      default: return <Gift size={18} />;
    }
  };

  const categoryNames: Record<string, string> = {
    'elder-friendly': '長輩最愛',
    'classic-food': '經典美食',
    'health': '健康養生',
    'luxury': '精品送禮'
  };

  const groupedSouvenirs = useMemo(() => {
    const groups: Record<string, Souvenir[]> = {};
    SOUVENIRS.forEach(item => {
      if (!groups[item.category]) groups[item.category] = [];
      groups[item.category].push(item);
    });
    return groups;
  }, []);

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 p-4 pb-24">
      <div className="mb-6 px-2">
        <h2 className="text-2xl font-extrabold text-gray-900 leading-tight mb-2">推薦伴手禮</h2>
        <p className="text-sm text-gray-600">精選適合長輩與自用的新加坡特色商品</p>
      </div>

      <div className="space-y-6">
        {Object.entries(groupedSouvenirs).map(([category, items]) => (
          <div key={category}>
            <div className="flex items-center gap-2 mb-3 px-2">
              {getCategoryIcon(category)}
              <h3 className="text-lg font-black text-gray-900">{categoryNames[category]}</h3>
            </div>

            <div className="space-y-3">
              {items.map(item => (
                <div key={item.id} className="bg-white rounded-3xl p-5 shadow-md border border-gray-100">
                  <div className="mb-3">
                    <h4 className="text-lg font-bold text-gray-900 mb-0.5">{item.name}</h4>
                    {item.nameEn && <p className="text-xs text-gray-500 font-medium">{item.nameEn}</p>}
                  </div>

                  <p className="text-sm text-gray-700 leading-relaxed mb-3">{item.reason}</p>

                  {item.uxNote && (
                    <div className="bg-blue-50 rounded-2xl p-3 mb-3 border border-blue-100">
                      <p className="text-xs font-semibold text-blue-600 mb-0.5">UX 建議</p>
                      <p className="text-sm text-blue-800">{item.uxNote}</p>
                    </div>
                  )}

                  <div className="space-y-2">
                    <div>
                      <p className="text-xs font-bold text-gray-500 mb-1">購買地點</p>
                      <div className="flex flex-wrap gap-2">
                        {item.purchaseLocation.map((loc, idx) => (
                          <span key={idx} className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full font-medium">
                            {loc}
                          </span>
                        ))}
                      </div>
                    </div>

                    {item.priceRange && (
                      <div>
                        <p className="text-xs font-bold text-gray-500 mb-1">價格區間</p>
                        <p className="text-sm font-semibold text-green-600">{item.priceRange}</p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const InfoTab: React.FC = () => {
  const [sgdAmount, setSgdAmount] = useState<string>('');
  const twdAmount = sgdAmount ? (parseFloat(sgdAmount) * PRACTICAL_INFO.exchangeRate).toFixed(0) : '';

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 p-4 pb-24 space-y-6">
      {/* Currency Converter */}
      <div className="bg-gradient-to-br from-green-600 to-emerald-700 rounded-3xl p-6 shadow-xl text-white">
        <h2 className="text-xl font-black mb-4 flex items-center">
          <DollarSign className="mr-2" /> 匯率轉換
        </h2>
        <div className="bg-white/20 rounded-2xl p-4 mb-3 backdrop-blur-sm">
          <p className="text-xs font-semibold mb-2 opacity-90">新幣 (SGD)</p>
          <input
            type="number"
            value={sgdAmount}
            onChange={(e) => setSgdAmount(e.target.value)}
            placeholder="輸入新幣金額"
            className="w-full bg-white text-gray-900 text-2xl font-bold px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-300"
            style={{ minHeight: '44px' }}
          />
        </div>
        <div className="text-center text-white/80 text-sm font-bold mb-3">=</div>
        <div className="bg-white/20 rounded-2xl p-4 backdrop-blur-sm">
          <p className="text-xs font-semibold mb-2 opacity-90">台幣 (TWD)</p>
          <div className="text-2xl font-black">{twdAmount || '0'} 元</div>
        </div>
        <p className="mt-4 text-xs opacity-75 text-center">匯率：1 SGD = {PRACTICAL_INFO.exchangeRate} TWD (固定)</p>
      </div>

      {/* Office Section */}
      <div className="bg-white rounded-3xl p-6 shadow-lg border border-gray-100 overflow-hidden relative">
        <div className="absolute top-0 right-0 p-4">
          <div className="bg-red-50 text-red-500 p-3 rounded-full">
            <Briefcase size={24} />
          </div>
        </div>
        <h2 className="text-xl font-black text-gray-900 mb-4">駐星辦事處 (mTower)</h2>
        <div className="space-y-4">
          <div>
            <p className="text-sm text-gray-500 font-semibold mb-1">地址 (Labador Park 站)</p>
            <p className="text-base text-gray-800 font-medium">460 Alexandra Road, #23-00, Singapore 119963</p>
          </div>
          <div className="flex gap-4 border-t border-gray-50 pt-4">
            <div className="flex-1">
              <p className="text-xs text-gray-500 font-bold mb-1">受理遞件 (上午)</p>
              <p className="text-sm text-gray-800 font-medium">09:00 - 11:30</p>
            </div>
            <div className="flex-1">
              <p className="text-xs text-gray-500 font-bold mb-1">受理取件 (下午)</p>
              <p className="text-sm text-gray-800 font-medium">13:30 - 16:00</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3 mt-4">
            <a
              href="tel:65000111"
              className="flex items-center justify-center bg-blue-600 text-white font-bold py-3 rounded-2xl shadow-md active:scale-95 transition-transform"
              style={{ minHeight: '44px' }}
            >
              <Phone size={18} className="mr-2" /> 撥打電話 1
            </a>
            <a
              href="tel:65000116"
              className="flex items-center justify-center bg-blue-500 text-white font-bold py-3 rounded-2xl shadow-md active:scale-95 transition-transform"
              style={{ minHeight: '44px' }}
            >
              <Phone size={18} className="mr-2" /> 撥打電話 2
            </a>
          </div>
        </div>
      </div>

      {/* Baggage Table */}
      <div className="bg-white rounded-3xl p-6 shadow-lg border border-gray-100">
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center">
          <Navigation className="mr-2 text-blue-600" /> 星耀樟宜行李寄放
        </h2>
        <div className="bg-gray-50 rounded-2xl overflow-hidden border border-gray-100">
          <table className="w-full text-left text-sm">
            <thead className="bg-gray-100/50 text-gray-500 font-bold uppercase text-[10px] tracking-wider">
              <tr>
                <th className="px-4 py-3">行李類型</th>
                <th className="px-4 py-3">費用 (24hr)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              <tr>
                <td className="px-4 py-3 font-medium text-gray-800">鬆散物品</td>
                <td className="px-4 py-3 font-bold text-blue-600">S$5.00</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-gray-800">小件 (10kg以下)</td>
                <td className="px-4 py-3 font-bold text-blue-600">S$10.00</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-gray-800">大件 (10kg以上)</td>
                <td className="px-4 py-3 font-bold text-blue-600">S$15.00</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-xs text-red-500 font-medium flex items-center">
          <AlertCircle size={12} className="mr-1" /> 小提醒：盡量併箱可以省下多筆 S$5 費用。
        </p>
      </div>

      {/* Restaurant Guide */}
      <div className="bg-white rounded-3xl p-6 shadow-lg border border-gray-100">
        <h2 className="text-xl font-black text-gray-900 mb-4">辦事處周邊長輩友善餐飲</h2>
        <div className="space-y-4">
          <div className="p-4 bg-orange-50 rounded-2xl border border-orange-100">
            <h3 className="font-bold text-orange-800 text-base mb-1">ARC 購物中心 (樓下)</h3>
            <p className="text-sm text-orange-700/80 leading-relaxed">首選！不曬太陽。推薦：亞坤、Soup Spoon、南洋老咖啡。</p>
          </div>
          <div className="p-4 bg-green-50 rounded-2xl border border-green-100">
            <h3 className="font-bold text-green-800 text-base mb-1">Mapletree Business City</h3>
            <p className="text-sm text-green-700/80 leading-relaxed">環境像矽谷，有噴水池。推薦：Harry's 簡餐或日式定食。</p>
          </div>
          <div className="p-4 bg-blue-50 rounded-2xl border border-blue-100">
            <h3 className="font-bold text-blue-800 text-base mb-1">亞歷山大熟食中心</h3>
            <p className="text-sm text-blue-700/80 leading-relaxed">搭車 5 分鐘。名店：酪梨汁、香茜香酥鴨。</p>
          </div>
        </div>
      </div>

      {/* Important Reminders */}
      <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl p-6 shadow-xl text-white">
        <h3 className="text-lg font-bold mb-3 flex items-center">
          <Info className="mr-2" /> 行前小撇步
        </h3>
        <ul className="text-sm space-y-2 opacity-90 leading-relaxed">
          {PRACTICAL_INFO.importantReminders.map((reminder, idx) => (
            <li key={idx}>• {reminder}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default function App() {
  const [activeTab, setActiveTab] = useState<Tab>(Tab.DAILY);

  return (
    <div className="min-h-screen max-w-md mx-auto bg-gray-50 flex flex-col relative overflow-hidden">
      {/* Header */}
      <header className="bg-white pt-10 pb-4 px-6 border-b border-gray-100">
        <div className="flex items-center justify-between mb-1">
          <span className="text-[10px] font-bold text-blue-600 uppercase tracking-widest bg-blue-50 px-2 py-0.5 rounded-full">
            Singapore 2026
          </span>
          <span className="text-[10px] font-medium text-gray-400">賴皮家族旅程</span>
        </div>
        <h1 className="text-3xl font-black text-gray-900 tracking-tight">新加坡之旅</h1>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto no-scrollbar">
        {activeTab === Tab.OVERVIEW && <OverviewTab />}
        {activeTab === Tab.DAILY && <DailyTab />}
        {activeTab === Tab.BACKUP && <BackupTab />}
        {activeTab === Tab.SOUVENIR && <SouvenirTab />}
        {activeTab === Tab.INFO && <InfoTab />}
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-white/80 backdrop-blur-xl border-t border-gray-100 shadow-[0_-5px_20px_rgba(0,0,0,0.05)] safe-bottom z-50">
        <div className="flex justify-around items-center h-20 px-2">
          <TabButton
            active={activeTab === Tab.OVERVIEW}
            onClick={() => setActiveTab(Tab.OVERVIEW)}
            icon={<Calendar size={20} />}
            label="總覽"
          />
          <TabButton
            active={activeTab === Tab.DAILY}
            onClick={() => setActiveTab(Tab.DAILY)}
            icon={<Clock size={20} />}
            label="每日"
          />
          <TabButton
            active={activeTab === Tab.BACKUP}
            onClick={() => setActiveTab(Tab.BACKUP)}
            icon={<CloudRain size={20} />}
            label="備案"
          />
          <TabButton
            active={activeTab === Tab.SOUVENIR}
            onClick={() => setActiveTab(Tab.SOUVENIR)}
            icon={<Gift size={20} />}
            label="伴手禮"
          />
          <TabButton
            active={activeTab === Tab.INFO}
            onClick={() => setActiveTab(Tab.INFO)}
            icon={<Info size={20} />}
            label="必讀"
          />
        </div>
      </nav>
    </div>
  );
}
