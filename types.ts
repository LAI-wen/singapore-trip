
export interface ScheduleItem {
  time: string;
  title: string;
  description: string;
  locationName?: string;
  mapQuery?: string;
  isImportant?: boolean;
}

export interface DayPlan {
  id: string;
  date: string;
  weekday: string;
  summary: string;
  items: ScheduleItem[];
  accommodation: string;
}

export interface BackupPlan {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  uxHighlight: string;
  locationName: string;
  mapQuery: string;
  category: 'indoor' | 'cultural' | 'nature';
  replaceDates: string[];
  imageUrl?: string;
}

export interface Souvenir {
  id: string;
  name: string;
  nameEn?: string;
  category: 'elder-friendly' | 'classic-food' | 'health' | 'luxury';
  reason: string;
  purchaseLocation: string[];
  priceRange?: string;
  uxNote?: string;
}

export interface PracticalInfo {
  exchangeRate: number;
  grabEstimate: string;
  officePhone: string[];
  importantReminders: string[];
}

export enum Tab {
  OVERVIEW = 'overview',
  DAILY = 'daily',
  BACKUP = 'backup',
  SOUVENIR = 'souvenir',
  INFO = 'info'
}
