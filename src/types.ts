export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  category: 'SEO' | 'Paid Media' | 'CRO' | 'Creative';
  icon: string; // Lucide icon name
  impactMetric: string; // e.g. "+312% Avg ROI"
  keyDeliverables: string[];
}

export interface Testimonial {
  id: string;
  author: string;
  role: string;
  company: string;
  industry: 'SaaS' | 'E-commerce' | 'B2B';
  avatarSeed: string; // For generating premium geometric avatars
  feedback: string;
  impactLabel: string; // e.g. "Over $1.2M in Pipeline Generated"
  rating: number;
}

export interface GrowthMetrics {
  currentMonthlyTraffic: number;
  currentConversionRate: number; // as percentage, e.g. 1.5
  averageDealValue: number; // average order or contract value
  trafficIncrease: number; // as slider multiplier offset
  conversionIncrease: number; // as slider multiplier offset
}

export interface ContactSubmission {
  id: string;
  timestamp: string;
  fullName: string;
  email: string;
  companyName: string;
  websiteUrl?: string;
  coreChallenge: string;
  budgetRange: string;
  status: 'Received' | 'Assigned' | 'Reviewing' | 'Scheduled';
}
