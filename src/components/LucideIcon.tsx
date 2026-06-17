import React from 'react';
import { 
  Search, 
  Megaphone, 
  Percent, 
  Palette, 
  Check, 
  ChevronRight, 
  Star, 
  Menu, 
  X, 
  ArrowUpRight, 
  TrendingUp, 
  Coins, 
  Users, 
  PhoneCall, 
  Clock,
  ShieldCheck,
  Building,
  Target,
  ArrowRight,
  Sparkles,
  Layers,
  Code,
  Smartphone,
  Plus,
  Minus
} from 'lucide-react';

interface LucideIconProps {
  name: string;
  className?: string;
  size?: number;
}

export const LucideIcon: React.FC<LucideIconProps> = ({ name, className = '', size = 20 }) => {
  switch (name) {
    case 'Search':
      return <Search className={className} size={size} />;
    case 'Megaphone':
      return <Megaphone className={className} size={size} />;
    case 'Percent':
      return <Percent className={className} size={size} />;
    case 'Palette':
      return <Palette className={className} size={size} />;
    case 'Check':
      return <Check className={className} size={size} />;
    case 'ChevronRight':
      return <ChevronRight className={className} size={size} />;
    case 'Star':
      return <Star className={className} size={size} />;
    case 'Menu':
      return <Menu className={className} size={size} />;
    case 'X':
      return <X className={className} size={size} />;
    case 'ArrowUpRight':
      return <ArrowUpRight className={className} size={size} />;
    case 'TrendingUp':
      return <TrendingUp className={className} size={size} />;
    case 'Coins':
      return <Coins className={className} size={size} />;
    case 'Users':
      return <Users className={className} size={size} />;
    case 'PhoneCall':
      return <PhoneCall className={className} size={size} />;
    case 'Clock':
      return <Clock className={className} size={size} />;
    case 'ShieldCheck':
      return <ShieldCheck className={className} size={size} />;
    case 'Building':
      return <Building className={className} size={size} />;
    case 'Target':
      return <Target className={className} size={size} />;
    case 'ArrowRight':
      return <ArrowRight className={className} size={size} />;
    case 'Sparkles':
      return <Sparkles className={className} size={size} />;
    case 'Layers':
      return <Layers className={className} size={size} />;
    case 'Code':
      return <Code className={className} size={size} />;
    case 'Smartphone':
      return <Smartphone className={className} size={size} />;
    case 'Plus':
      return <Plus className={className} size={size} />;
    case 'Minus':
      return <Minus className={className} size={size} />;
    default:
      return <Check className={className} size={size} />;
  }
};
