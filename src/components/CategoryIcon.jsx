import React from 'react';
import {
  Flame,
  ShieldAlert,
  HeartPulse,
  Car,
  Wind,
  Radio,
  Droplets,
  BookOpen,
  Wrench,
  Layers,
  History,
  Landmark,
  Medal,
  Award,
  Users,
  FileText
} from 'lucide-react';

export default function CategoryIcon({ name, className = "w-6 h-6" }) {
  switch (name) {
    case 'Flame':
      return <Flame className={className} />;
    case 'ShieldAlert':
      return <ShieldAlert className={className} />;
    case 'HeartPulse':
      return <HeartPulse className={className} />;
    case 'Car':
      return <Car className={className} />;
    case 'Wind':
      return <Wind className={className} />;
    case 'Radio':
      return <Radio className={className} />;
    case 'Droplets':
      return <Droplets className={className} />;
    case 'Wrench':
      return <Wrench className={className} />;
    case 'Layers':
      return <Layers className={className} />;
    case 'History':
    case 'Landmark':
      return <Landmark className={className} />;
    case 'Medal':
    case 'Award':
      return <Medal className={className} />;
    case 'Users':
      return <Users className={className} />;
    case 'FileText':
      return <FileText className={className} />;
    default:
      return <BookOpen className={className} />;
  }
}
