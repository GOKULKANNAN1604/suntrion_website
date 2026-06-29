import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { countryCodes } from '../data/countryCodes';

import biltLogo from '../assets/biltLogo.webp';
import itcLogo from '../assets/ITCLogo.jpg';
import jkPaperLogo from '../assets/JKPaperLogo.jpg';
import mcfLogo from '../assets/MCFLogo.webp';
import renaultNissanLogo from '../assets/renaultNissanLogo.webp';
import tnplLogo from '../assets/TNPLLogo.webp';
import torrentPowerLogo from '../assets/TorrentPowerLogo.webp';
import toyotaLogo from '../assets/ToyatoLogo.webp';
import westCoastLogo from '../assets/WestCostPaperLogo.webp';
import { 
  Activity, FlaskConical, Factory, ShieldPlus, Microscope, Settings, Zap, Wind, 
  Gauge, Cpu, Eye, Thermometer, Scaling, HeartPulse, HardDrive, Monitor, 
  Stethoscope as ScopeIcon, Radio, FileText, Beaker, ChevronRight, ChevronLeft, 
  ChevronDown, Menu, X as CloseIcon, Quote, Globe, Star, Mail, PhoneCall,
  Layers, Loader2, CheckCircle2, User
} from 'lucide-react';

interface Testimonial {
  client: string;
  location: string;
  text: string;
  icon: React.ReactNode;
}

interface CatalogItem {
  name: string;
  icon: React.ReactNode;
}

interface SubcategoryData {
  intro?: string;
  items?: CatalogItem[];
  datasheets?: string[];
  footer?: string;
}

interface CategoryData {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  gifUrl: string;
  subcategories: Record<string, SubcategoryData>;
}

const instrumentalTestimonials: Testimonial[] = [
  {
    client: "Government of Health",
    location: "Republic of Chad",
    text: "Suntrion provided complete turnkey solutions to achieve clinical integration. Their expertise encouraged us to start and manage our hospital infrastructure successfully. The exceptional image quality and advanced reconstruction methods have significantly improved our diagnostic capabilities.",
    icon: <Globe size={16} />
  },
  {
    client: "GMS Hospital",
    location: "Cameroon",
    text: "A comprehensive partner for hospital construction. From electrical and HVAC to firefighting and laboratory installation, Suntrion handled the entire project planning with excellence. The exceptional image quality and advanced reconstruction methods have significantly improved our diagnostic capabilities.",
    icon: <Factory size={16} />
  },
  {
    client: "Sanket Sunsol Imaging Services",
    location: "Zambia",
    text: "We set up a full-fledged diagnostic centre with CT, MRI, Ultrasound, X-ray, Mammogram, OPG and Lab facilities. Running successfully with Suntrion's technical support. The exceptional image quality and advanced reconstruction methods have significantly improved our diagnostic capabilities.",
    icon: <Cpu size={16} />
  }
];

const XrayMachineIcon = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="12" cy="4" r="2.5" />
    <rect x="5" y="7" width="14" height="11" />
    <path d="M7 9h1v2 M17 9h-1v2 M7 16h1v-2 M17 16h-1v-2" />
    <path d="M12 8v8 M10 10c0 1 4 1 4 0 M10 12c0 1 4 1 4 0 M10 14c0 1 4 1 4 0" />
    <path d="M11 16h2v1h-2z" />
    <path d="M10 18v4 M14 18v4 M10 22h4" />
  </svg>
);

const MriIcon = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="8" cy="12" r="7" />
    <circle cx="8" cy="12" r="4" />
    <path d="M2 12h2 M15 12h1" />
    <path d="M11 14h8 M15 14v6 M19 14v6 M13 20h8" />
    <rect x="15" y="3" width="7" height="5" rx="1" />
    <path d="M16 6l1.5-1.5 1.5 3L21 6 M18 8v3h-3" />
  </svg>
);

const FluoroscopyIcon = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="8" cy="4" r="2" />
    <rect x="4" y="7" width="8" height="10" />
    <path d="M7 17v5 M9 17v5 M6 22h4" />
    <path d="M8 9v6 M6 11c0 1 4 1 4 0 M6 13c0 1 4 1 4 0" />
    <path d="M12 12h3 M15 6v12 M15 6h2 M15 18h2" />
    <circle cx="17" cy="6" r="1.5" />
    <circle cx="17" cy="18" r="1.5" />
    <rect x="18" y="14" width="5" height="8" />
    <path d="M19 16h3 M19 19h3v3h-3z" />
  </svg>
);

const CArmIcon = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M4 3v18h4 M4 5h2" />
    <path d="M12 6a7 7 0 0 0 0 14" />
    <path d="M12 6h2l1 2h-4z M12 20h2l1-2h-4z" />
    <circle cx="12" cy="12" r="1.5" />
    <rect x="14" y="11" width="6" height="2" rx="1" />
    <path d="M9 14h12 M18 14v8 M15 22h6" />
  </svg>
);

const UltrasoundIcon = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="3" y="3" width="14" height="11" rx="1" />
    <path d="M7 6q3 0 6 0l2 5q-5 3-10 0z" />
    <path d="M9 14v2 M5 16h8v5H5z" />
    <circle cx="7" cy="19" r="0.5" fill="currentColor" />
    <circle cx="9" cy="19" r="0.5" fill="currentColor" />
    <circle cx="11" cy="19" r="0.5" fill="currentColor" />
    <path d="M18 6l2-1 2 2-1 2-1 4-2-1z M19 13c0 6-6 4-6 8" />
  </svg>
);

const RadiationTherapyIcon = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M2 22h20" />
    <path d="M4 22L7 4c1-1 2-2 3-2h9v4h-6v3h5v3h-5v-1H9c-1 0-1 1-1 2v9" />
    <circle cx="15" cy="13" r="2" />
    <path d="M12 17c0-2 1.5-3 3-3s3 1 3 3" />
    <path d="M11 17h8v2h-8z" />
    <path d="M13 19v3 M17 19v3" />
  </svg>
);

const UrologyIcon = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <rect x="4" y="6" width="16" height="12" rx="1" />
    <path d="M11 11c-1-2-4-2-4 1s2 3 2 3l1-2" />
    <path d="M13 11c1-2 4-2 4 1s-2 3-2 3l-1-2" />
    <path d="M12 13v5" />
    <path d="M5 15h3 M5 16h4" />
    <circle cx="17" cy="16" r="0.5" fill="currentColor" />
    <circle cx="19" cy="16" r="0.5" fill="currentColor" />
  </svg>
);

const BoneDensitometerIcon = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="4" y="2" width="16" height="14" rx="2" />
    <rect x="6" y="4" width="12" height="9" rx="1" />
    <path d="M8 8.5c-1-1-1-2 0-2.5 1-0.5 2 0.5 2 1.5h4c0-1 1-2 2-1.5 1 0.5 1 1.5 0 2.5 1 1 1 2 0 2.5-1 0.5-2-0.5-2-1.5h-4c0 1-1 2-2 1.5-1-0.5-1-1.5 0-2.5z" />
    <path d="M15 14h3 M15 15h3" />
    <path d="M10 16v6a2 2 0 0 0 4 0v-6" />
    <path d="M8 16v2a4 4 0 0 0 8 0v-2" />
  </svg>
);

const PulseOximeterIcon = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="8" y="2" width="8" height="7" rx="1.5" />
    <path d="M10 4h4" />
    <circle cx="12" cy="6.5" r="1.5" />
    <path d="M10 9v5 M14 9v2 M17 11v3 M20 13v2" />
    <path d="M14 11h3c1 0 2 1 2 2h0c1 0 2 1 2 2v3c0 3-2 5-5 5H9c-3 0-5-2-5-5l-2-3c-1-1-1-2 0-3s2-1 3 0l3 2v-4" />
  </svg>
);

const OxygenConcentratorIcon = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="7" y="7" width="10" height="14" rx="2" />
    <path d="M9 21v2 M15 21v2" />
    <path d="M10 10h4v8h-4z" />
    <path d="M10 7V5h4v2" />
    <path d="M9 5L8 2h8l-1 3" />
    <path d="M7 11H5c-1.5 0-3 1.5-3 3s1.5 3 3 3h2" />
    <path d="M17 15h2c1 0 2-1 2-2v-2l2-2" />
    <rect x="18" y="10" width="3" height="4" rx="1" />
  </svg>
);

const PacemakerIcon = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="7" y="10" width="10" height="12" rx="2" />
    <path d="M9 13h6" />
    <path d="M8 15h8v4H8z" />
    <path d="M9 17l1.5-2 1.5 4 1-2h2" />
    <circle cx="9" cy="20.5" r="0.5" fill="currentColor" />
    <circle cx="11" cy="20.5" r="0.5" fill="currentColor" />
    <path d="M9 10V8h6v2" />
    <path d="M5 10c-2-1-3-3-2-5" />
    <path d="M19 10c2-1 3-3 2-5" />
    <path d="M3 5h4v4H3z" />
    <path d="M17 5h4v4h-4z" />
    <path d="M5 5V3 M19 5V3" />
  </svg>
);

const SyringePumpIcon = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="2" y="6" width="14" height="16" rx="1.5" />
    <path d="M4 6V4c0-1 1-2 2-2h6c1 0 2 1 2 2v2" />
    <rect x="8" y="8" width="7" height="9" rx="1" />
    <rect x="8" y="18" width="2" height="2" />
    <rect x="11" y="18" width="2" height="2" />
    <rect x="14" y="18" width="2" height="2" />
    <path d="M5 8v3 M5 14v4 M4 17l1 1 1-1" />
    <path d="M19 7h4 M20 7v10h2V7 M21 17v2 M18 19h6 M21 21v2 M21 3v4 M19 3h4" />
    <path d="M20 9h1 M20 11h1 M20 13h1 M20 15h1" />
  </svg>
);

const HeartLungMachineIcon = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M4 20h16" />
    <circle cx="6" cy="22" r="1" />
    <circle cx="18" cy="22" r="1" />
    <path d="M7 20v-9h10v9 M10 20v-5a1 1 0 0 1 2 0v5" />
    <rect x="5" y="3" width="14" height="8" rx="1" />
    <rect x="6" y="4" width="8" height="6" rx="0.5" />
    <path d="M7 7l1-1 1 3 1-2h3" />
    <rect x="16" y="5" width="2" height="1.5" />
    <rect x="16" y="8" width="2" height="1.5" />
    <path d="M17 11h2v6H17" />
  </svg>
);

const VentilatorIcon = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M4 6v10" />
    <path d="M4 6c4 0 6 2 6 5s-2 5-6 5" />
    <path d="M10 11h2 M12 9v4 M14 11h2 M13 9v4" />
    <rect x="9" y="13" width="10" height="10" rx="3" />
    <path d="M11 18h6 M14 15v6" />
  </svg>
);

const CentrifugeIcon = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="2" y="16" width="20" height="6" rx="1" />
    <path d="M5 19h4 M16 19h1 M18 19h1 M3 22h18" />
    <path d="M6 16V6 M18 16V6 M6 6h12 M12 6v2" />
    <path d="M10 11a3.5 3.5 0 0 0-1 2.5 3 3 0 1 0 6 0 3.5 3.5 0 0 0-1-2.5V8h-4v3z" />
    <path d="M9 13.5c1 1 3 1 4 0" />
    <rect x="4.5" y="8" width="3" height="7" rx="1.5" />
    <path d="M4.5 10h3 M4.5 12h3" />
    <rect x="16.5" y="8" width="3" height="7" rx="1.5" />
    <path d="M16.5 10h3 M16.5 12h3" />
  </svg>
);

const IncubatorIcon = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <path d="M7 21v2 M17 21v2" />
    <path d="M3 8h18 M3 15h18" />
    <rect x="6" y="5" width="4" height="1.5" rx="0.5" />
    <circle cx="14" cy="5.5" r="0.5" />
    <circle cx="17" cy="5.5" r="0.5" />
    <circle cx="9" cy="12" r="2" />
    <path d="M8 10h2v1H8z" />
    <circle cx="15" cy="12" r="2" />
    <path d="M14 10h2v1h-2z" />
    <circle cx="7" cy="18" r="1.5" />
    <path d="M6.5 16.5h1v1h-1z" />
    <circle cx="12" cy="18" r="1.5" />
    <path d="M11.5 16.5h1v1h-1z" />
    <circle cx="17" cy="18" r="1.5" />
    <path d="M16.5 16.5h1v1h-1z" />
  </svg>
);

const GammaCounterIcon = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="7" y="2" width="12" height="14" rx="2" />
    <rect x="9" y="4" width="8" height="3" rx="0.5" />
    <circle cx="9" cy="9" r="0.5" fill="currentColor" />
    <circle cx="17" cy="9" r="0.5" fill="currentColor" />
    <path d="M19 6h1 M19 9h1" />
    <circle cx="13" cy="12" r="1" />
    <path d="M13 10.5A2.5 2.5 0 0 0 10.5 13L9 12A4 4 0 0 1 13 8v2.5z" />
    <path d="M14.5 13A2.5 2.5 0 0 0 13 10.5V8a4 4 0 0 1 4 4l-2.5 1z" />
    <path d="M11.5 14a2.5 2.5 0 0 0 3 0l1.5 2a4 4 0 0 1-5 0l1.5-2z" />
    <path d="M7 7H5c-1 0-2 1-2 2v7c0 1 1 2 2 2h4" />
    <rect x="9" y="17" width="10" height="3" rx="1" />
    <path d="M16 17v3" />
  </svg>
);

const ElisaIcon = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="10" cy="10" r="9" />
    <path d="M9 5l1.5 1.5 1.5-1.5 M10.5 6.5V9 M5 12l1.5-1.5 1.5 1.5 M6.5 10.5V8 M10 16l-1.5-1.5L7 16 M8.5 14.5V12" />
    <circle cx="5" cy="6" r="0.5" fill="currentColor" />
    <circle cx="11" cy="3" r="0.5" fill="currentColor" />
    <path d="M4 14l1 1 M5 14l-1 1 M8 10l1 1 M9 10l-1 1" />
    <circle cx="16" cy="14" r="4" fill="black" stroke="none" />
    <circle cx="16" cy="14" r="4" />
    <circle cx="15" cy="15" r="0.5" fill="currentColor" />
    <path d="M16 13l1 1 M17 13l-1 1 M17 15l1 1 M18 15l-1 1" />
    <path d="M18.5 16.5l3.5 3.5a1.5 1.5 0 0 1-2 2l-3.5-3.5 M19 19l2-2" />
  </svg>
);

const BallSegmentValveIcon = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="2" y="10" width="3" height="8" rx="0.5" />
    <rect x="19" y="10" width="3" height="8" rx="0.5" />
    <path d="M3 11v6 M21 11v6" />
    <path d="M5 12c1-1 2-1 3-1 M16 11c1 0 2 0 3 1 M5 16c1 1 2 1 3 1 M16 17c1 0 2 0 3-1" />
    <circle cx="12" cy="14" r="4" />
    <path d="M10 14h4 M10 16h4" />
    <path d="M12 10V8" />
    <rect x="10" y="8" width="4" height="2" />
    <rect x="7" y="5" width="10" height="3" rx="1" />
    <path d="M12 5V8" />
  </svg>
);

const ButterflyValveIcon = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M4 14h16v6H4z" />
    <path d="M4 14h3 M17 14h3 M4 20h3 M17 20h3" />
    <rect x="2" y="13" width="2" height="8" />
    <rect x="20" y="13" width="2" height="8" />
    <path d="M10 14v-2h4v2" />
    <circle cx="12" cy="10" r="3" />
    <circle cx="12" cy="10" r="1" />
    <path d="M12 7V4" />
    <rect x="5" y="2" width="14" height="2" rx="1" />
    <path d="M9 9C6 8 3 10 3 11v1c3 1 5 0 6-2z" />
    <path d="M15 9c3-1 6 1 6 2v1c-3 1-5 0-6-2z" />
  </svg>
);

const ManualValveIcon = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="3" y="13" width="2" height="6" />
    <rect x="19" y="13" width="2" height="6" />
    <path d="M5 14h14 M5 18h14" />
    <path d="M10 14v-3h4v3" />
    <path d="M12 11V9" />
    <path d="M9 9h3l5-2h4v3l-5 1H9z" />
  </svg>
);

const PneumaticIcon = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="3" y="10" width="18" height="10" rx="4" />
    <path d="M7 10v10 M17 10v10" />
    <circle cx="6" cy="21" r="1.5" />
    <path d="M18 20v2 M17 22h2" />
    <path d="M7 14h5 M10 16h6 M8 18h4" />
    <circle cx="16" cy="6" r="3" />
    <path d="M16 6l1-1 M16 9v1" />
    <rect x="5" y="7" width="4" height="3" />
    <path d="M6 8h2 M7 7V3h3" />
  </svg>
);

const catalogData: Record<string, CategoryData> = {
  radiology: {
    title: "Radiology",
    subtitle: "Imaging Systems",
    icon: <Microscope size={18} />,
    gifUrl: "https://upload.wikimedia.org/wikipedia/commons/1/18/Brain_MRI.gif",
    subcategories: {
      "Imaging Systems": {
        intro: "We emphasize a wide range of radiology equipment such as X-ray machines, CT, MRI, and C-arm Surgical Systems. Our core Digital Flat Panel Detector systems and cost-effective Analogue products provide optimal solutions.",
        items: [
          { name: "X-ray machines", icon: <XrayMachineIcon size={24} /> },
          { name: "CT / MRI", icon: <MriIcon size={24} /> },
          { name: "Fluoroscopic X-ray system", icon: <FluoroscopyIcon size={24} /> },
          { name: "Mobile X-Ray", icon: <Wind size={24} /> },
          { name: "C-arm Surgical Systems", icon: <CArmIcon size={24} /> },
          { name: "Ultrasound machines", icon: <UltrasoundIcon size={24} /> },
          { name: "Urology Equipment", icon: <UrologyIcon size={24} /> },
          { name: "OPG / Mammograph", icon: <Eye size={24} /> },
          { name: "Computer / Digital Radiograph", icon: <Monitor size={24} /> },
          { name: "Bone Sonometer / Densitometer", icon: <BoneDensitometerIcon size={24} /> },
          { name: "Imaging Systems for Radiation Therapy", icon: <RadiationTherapyIcon size={24} /> }
        ],
        footer: "We maintain a standard level of comfort in providing the installation and maintenance at International standards along with necessary user trainings."
      }
    }
  },
  cardiology: {
    title: "Cardiology",
    subtitle: "Clinical Systems",
    icon: <Activity size={18} />,
    gifUrl: "https://upload.wikimedia.org/wikipedia/commons/e/e8/Cardiac-Cycle-Animated.gif",
    subcategories: {
      "Diagnostic": {
        items: [
          { name: "Stethoscope / ECG", icon: <ScopeIcon size={24} /> },
          { name: "Patient Monitoring System", icon: <Monitor size={24} /> },
          { name: "Telemetry System", icon: <Radio size={24} /> },
          { name: "Thread Mill / Stress Test System", icon: <HeartPulse size={24} /> },
          { name: "Pulse Oximeter", icon: <PulseOximeterIcon size={24} /> },
          { name: "Sphygmomanometer", icon: <Gauge size={24} /> },
          { name: "Holter Monitor", icon: <HardDrive size={24} /> }
        ]
      },
      "Therapeutic": {
        items: [
          { name: "Oxygen Concentrator", icon: <OxygenConcentratorIcon size={24} /> },
          { name: "Pace Maker / Defibrillator", icon: <PacemakerIcon size={24} /> },
          { name: "Syringe Pump / I.V Pump", icon: <SyringePumpIcon size={24} /> },
          { name: "Heart Lung Machine", icon: <HeartLungMachineIcon size={24} /> },
          { name: "Ventilator", icon: <VentilatorIcon size={24} /> }
        ]
      }
    }
  },
  laboratory: {
    title: "Laboratory",
    subtitle: "Biotech & Pathology",
    icon: <FlaskConical size={18} />,
    gifUrl: "https://upload.wikimedia.org/wikipedia/commons/3/3c/Titolazione.gif",
    subcategories: {
      "Microbiology & Serology": {
        intro: "Our lab implements culture techniques and immunoassays for rapid identification of pathogens. We provide 24/7 service laboratories for hospitals with rapid turnaround and affordable testing.",
        footer: "We maintain International standards in providing installation and maintenance along with necessary user trainings."
      },
      "Biochemistry": {
        intro: "Setup for routine biochemical tests, cardiac markers, and screening tests for foetal anomalies.",
        items: [
          { name: "Refrigerated Centrifuge / Ultracentrifuge", icon: <CentrifugeIcon size={24} /> },
          { name: "Spectrophotometer", icon: <Eye size={24} /> },
          { name: "PCR Thermal Cycler", icon: <Thermometer size={24} /> },
          { name: "Refrigerated Incubator Shaker", icon: <IncubatorIcon size={24} /> }
        ]
      },
      "Haemotology & Pathology": {
        intro: "Dealing with physiology, pathology, and prevention of blood-related disorders and Liver Function Tests.",
        items: [
          { name: "Microscope / Flow Cytometer", icon: <Microscope size={24} /> },
          { name: "Gamma Counter", icon: <GammaCounterIcon size={24} /> },
          { name: "Hemocytometer / Centrifuge", icon: <Scaling size={24} /> },
          { name: "Autoanalyzers (Semi/Full)", icon: <Monitor size={24} /> },
          { name: "ELISA reader / Washer", icon: <ElisaIcon size={24} /> },
          { name: "Reagents and Chemicals", icon: <Beaker size={24} /> }
        ]
      },
      "Calibration Devices": {
        intro: "Precision-engineered calibration tools for laboratory instrumentation.",
        items: [
          { name: "Digital Pressure Calibrator", icon: <Gauge size={24} /> },
          { name: "RTD Sensor / Temp Multimeter", icon: <Thermometer size={24} /> },
          { name: "Standard Weight / Electronic Balance", icon: <Scaling size={24} /> },
          { name: "Tachometer / Speed Calibration", icon: <Activity size={24} /> }
        ]
      }
    }
  },
  industrialValves: {
    title: "Industrial Valves",
    subtitle: "Flow Solutions",
    icon: <Settings size={18} />,
    gifUrl: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Rotating_valve.gif",
    subcategories: {
      "Valve Selection": {
        intro: "Our selection includes Ball segment, Ball, Butterfly, Control, On/Off, and Manual valves. Each of these have a number of different applications with specific requirements.",
        items: [
          { name: "Ball Segment Valves", icon: <BallSegmentValveIcon size={24} /> },
          { name: "Ball Valves", icon: <Settings size={24} /> },
          { name: "Butterfly Valves", icon: <ButterflyValveIcon size={24} /> },
          { name: "Control Valves", icon: <Activity size={24} /> },
          { name: "On/Off Valves", icon: <Zap size={24} /> },
          { name: "Manual Valves", icon: <ManualValveIcon size={24} /> }
        ],
        footer: "Engineered for zero-leakage and specific chemical/pressure compatibility."
      }
    }
  },
  industrialOffering: {
    title: "Industrial Offering",
    subtitle: "Automation Systems",
    icon: <Factory size={18} />,
    gifUrl: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Pneumatic_cylinder_%28animation%29.gif",
    subcategories: {
      "Actuators & Monitoring": {
        items: [
          { name: "Single/Double Acting Pneumatic", icon: <PneumaticIcon size={24} /> },
          { name: "Motorized & Hydraulic Cylinders", icon: <Settings size={24} /> },
          { name: "ASF Active Safety Monitoring", icon: <ShieldPlus size={24} /> },
          { name: "Partial Stroke Testing Units", icon: <Gauge size={24} /> }
        ]
      }
    }
  },
  analyticalSolution: {
    title: "Analytical Solution",
    subtitle: "Process Precision",
    icon: <Layers size={18} />,
    gifUrl: "https://upload.wikimedia.org/wikipedia/commons/7/77/Oscillating_sine_wave.gif",
    subcategories: {
      "Ultrasonic Flowmeters": {
        items: [
          { name: "M-Flow PW", icon: <Gauge size={24} /> },
          { name: "Steam Spec", icon: <Wind size={24} /> },
          { name: "Time Delta-C", icon: <Activity size={24} /> },
          { name: "Portable Flowmeter", icon: <Monitor size={24} /> }
        ]
      }
    }
  }
};

const clientLogos = [
  { name: "JK Paper Ltd.", src: jkPaperLogo },
  { name: "ITC Limited", src: itcLogo },
  { name: "Mangalore Chemicals & Fertilizers", src: mcfLogo },
  { name: "The West Coast Paper Mills Ltd", src: westCoastLogo },
  { name: "TNPL", src: tnplLogo },
  { name: "Toyota", src: toyotaLogo },
  { name: "Renault Nissan", src: renaultNissanLogo },
  { name: "Bilt", src: biltLogo },
  { name: "Torrent Power", src: torrentPowerLogo },
];

// Dynamic High-Tech Vector/CSS Visual Illustrations for Categories
const RadiologyVisual = () => (
  <div className="w-full h-full relative flex items-center justify-center bg-slate-950 p-4 overflow-hidden">
    {/* Grid Background */}
    <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:14px_24px]" />
    
    {/* Central X-ray display area */}
    <div className="relative w-32 h-44 border border-cyan-500/30 rounded-lg bg-black overflow-hidden flex flex-col items-center justify-center shadow-[0_0_20px_rgba(34,211,238,0.15)]">
        
        {/* Human Body Icon - representing the patient */}
        <div className="absolute text-cyan-900/40 z-0">
          <User size={90} strokeWidth={1.5} />
        </div>
        
        {/* Bone structure representation (abstract ribcage/spine) */}
        <motion.div 
            animate={{ opacity: [0.1, 0.8, 0.1] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute z-10 flex flex-col gap-1 items-center mt-4"
        >
           {/* Spine core */}
           <div className="w-1.5 h-16 bg-cyan-300 rounded-full shadow-[0_0_8px_#67e8f9] flex flex-col items-center justify-between py-1">
             <div className="w-8 h-1 bg-cyan-300 rounded-full shadow-[0_0_8px_#67e8f9]" />
             <div className="w-10 h-1 bg-cyan-300 rounded-full shadow-[0_0_8px_#67e8f9]" />
             <div className="w-10 h-1 bg-cyan-300 rounded-full shadow-[0_0_8px_#67e8f9]" />
             <div className="w-8 h-1 bg-cyan-300 rounded-full shadow-[0_0_8px_#67e8f9]" />
             <div className="w-6 h-1 bg-cyan-300 rounded-full shadow-[0_0_8px_#67e8f9]" />
           </div>
        </motion.div>

        {/* Vertical Scanner Line */}
        <motion.div 
          animate={{ y: ["-120%", "120%", "-120%"] }}
          transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
          className="absolute top-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-300 to-transparent shadow-[0_0_15px_#22d3ee] z-20"
        />
        
        {/* Corner Brackets */}
        <div className="absolute top-2 left-2 w-3 h-3 border-t border-l border-cyan-500/50" />
        <div className="absolute top-2 right-2 w-3 h-3 border-t border-r border-cyan-500/50" />
        <div className="absolute bottom-2 left-2 w-3 h-3 border-b border-l border-cyan-500/50" />
        <div className="absolute bottom-2 right-2 w-3 h-3 border-b border-r border-cyan-500/50" />

        <span className="absolute bottom-3 text-[6px] font-mono text-cyan-400 uppercase tracking-widest bg-cyan-950/80 px-1.5 py-0.5 rounded border border-cyan-500/30">X-RAY ANALYSIS</span>
    </div>
  </div>
);

const CardiologyVisual = () => (
  <div className="w-full h-full relative flex items-center justify-center bg-slate-950 p-4 overflow-hidden">
    <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#4672A4_1.5px,transparent_1.5px)] [background-size:16px_16px]" />
    {/* Beating Heart Icon */}
    <motion.div 
      animate={{ scale: [1, 1.15, 1, 1.15, 1], filter: ["drop-shadow(0 0 10px rgba(239,68,68,0.4))", "drop-shadow(0 0 25px rgba(239,68,68,0.7))", "drop-shadow(0 0 10px rgba(239,68,68,0.4))", "drop-shadow(0 0 25px rgba(239,68,68,0.7))", "drop-shadow(0 0 10px rgba(239,68,68,0.4))"] }}
      transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
      className="z-10 text-red-500"
    >
      <HeartPulse size={64} />
    </motion.div>
    {/* Live ECG Waveform */}
    <div className="absolute inset-x-0 bottom-6 h-12 flex items-center justify-center overflow-hidden pointer-events-none">
      <svg className="w-full h-full stroke-emerald-400 fill-none" viewBox="0 0 300 40">
        <motion.path 
          d="M 0,20 L 50,20 L 60,20 L 65,10 L 70,30 L 75,20 L 95,20 L 105,5 L 110,35 L 115,20 L 150,20 L 200,20 L 205,10 L 210,30 L 215,20 L 235,20 L 245,5 L 250,35 L 255,20 L 300,20"
          strokeWidth="2.5"
          strokeDasharray="400"
          animate={{ strokeDashoffset: [400, 0] }}
          transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
        />
      </svg>
    </div>
  </div>
);

const LaboratoryVisual = () => (
  <div className="w-full h-full relative flex items-center justify-center bg-slate-950 p-4 overflow-hidden">
    {/* Lab Grid */}
    <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:20px_20px]" />
    {/* Chemistry Flask */}
    <div className="relative flex flex-col items-center justify-center">
      <motion.div 
        animate={{ y: [0, -4, 0] }}
        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
        className="text-indigo-400 z-10"
      >
        <FlaskConical size={56} className="drop-shadow-[0_0_15px_rgba(129,140,248,0.5)]" />
      </motion.div>
      {/* Floating Bubbles */}
      {[...Array(6)].map((_, i) => {
        const duration = 2 + ((i * 0.7) % 1.5);
        return (
          <motion.div
            key={i}
            initial={{ y: 20, x: (i - 2.5) * 8, opacity: 0, scale: 0.5 }}
            animate={{ y: -40, opacity: [0, 0.8, 0], scale: [0.5, 1, 0.5] }}
            transition={{
              repeat: Infinity,
              duration,
              delay: i * 0.4,
              ease: "easeOut"
            }}
            className="absolute w-2 h-2 rounded-full bg-indigo-300 shadow-[0_0_5px_rgba(165,180,252,0.8)]"
          />
        );
      })}
    </div>
  </div>
);

const IndustrialValvesVisual = () => (
  <div className="w-full h-full relative flex items-center justify-center bg-slate-950 p-4 overflow-hidden">
    {/* Pipe grid */}
    <div className="absolute left-0 right-0 h-4 bg-slate-800 border-y border-slate-700 flex items-center justify-around z-0">
      {/* Flowing fluid dots */}
      {[...Array(8)].map((_, i) => (
        <motion.div 
          key={i}
          animate={{ x: [-50, 250] }}
          transition={{ repeat: Infinity, duration: 2.5, ease: "linear", delay: i * 0.4 }}
          className="w-2 h-2 rounded-full bg-blue-400 shadow-[0_0_8px_#60a5fa]"
        />
      ))}
    </div>
    {/* Valve Controller */}
    <motion.div 
      animate={{ rotate: [0, 180, 180, 0, 0] }}
      transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 1 }}
      className="z-10 bg-slate-900 border-4 border-slate-700 p-3.5 rounded-full shadow-[0_0_20px_rgba(0,0,0,0.8)] text-amber-500"
    >
      <Settings size={36} className="animate-pulse" />
    </motion.div>
  </div>
);

const IndustrialOfferingVisual = () => (
  <div className="w-full h-full relative flex items-center justify-center bg-slate-950 p-4 overflow-hidden">
    <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#4672A4_1.5px,transparent_1.5px)] [background-size:16px_16px]" />
    
    {/* Automation Gears */}
    <div className="relative flex items-center justify-center z-10 w-full h-full mt-2">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        className="absolute text-amber-500/80 -ml-12 drop-shadow-[0_0_15px_rgba(245,158,11,0.3)]"
      >
         <Settings size={72} strokeWidth={1} />
      </motion.div>
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
        className="absolute text-emerald-500/80 ml-12 mt-12 drop-shadow-[0_0_15px_rgba(16,185,129,0.3)]"
      >
         <Settings size={52} strokeWidth={1} />
      </motion.div>

      {/* Conveyor Belt abstract */}
      <div className="absolute bottom-6 left-4 right-4 h-2 bg-slate-800 border-y border-slate-700 rounded-full overflow-hidden shadow-[0_5px_15px_rgba(0,0,0,0.5)]">
        <motion.div
          animate={{ x: ["-100%", "300%"] }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          className="w-1/3 h-full bg-emerald-500/50"
        />
        <motion.div
          animate={{ x: ["-100%", "300%"] }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear", delay: 1.5 }}
          className="w-1/3 h-full bg-emerald-500/50 absolute top-0"
        />
      </div>
      
      <span className="absolute top-4 text-[8px] font-mono text-emerald-400 uppercase tracking-widest bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/20">AUTOMATED PROCESS</span>
    </div>
  </div>
);

const AnalyticalSolutionVisual = () => (
  <div className="w-full h-full relative flex items-center justify-center bg-slate-950 p-4 overflow-hidden">
    {/* Oscilloscope Grid */}
    <div className="absolute inset-2 border border-slate-800 rounded bg-slate-950 overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#059669_1px,transparent_1px),linear-gradient(to_bottom,#059669_1px,transparent_1px)] bg-[size:10px_10px]" />
      
      {/* Wave plots */}
      <svg className="w-full h-full stroke-emerald-400 fill-none" viewBox="0 0 200 100">
        {/* Signal 1 */}
        <motion.path 
          d="M 0,50 Q 25,20 50,50 T 100,50 T 150,50 T 200,50" 
          strokeWidth="1.5"
          animate={{ d: [
            "M 0,50 Q 25,15 50,50 T 100,50 T 150,50 T 200,50",
            "M 0,50 Q 25,85 50,50 T 100,50 T 150,50 T 200,50",
            "M 0,50 Q 25,15 50,50 T 100,50 T 150,50 T 200,50"
          ]}}
          transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
        />
        {/* Signal 2 */}
        <motion.path 
          d="M 0,50 Q 15,35 30,50 T 60,50 T 90,50 T 120,50 T 150,50 T 180,50 T 200,50" 
          strokeWidth="1"
          className="stroke-cyan-400"
          animate={{ d: [
            "M 0,50 Q 15,25 30,50 T 60,50 T 90,50 T 120,50 T 150,50 T 180,50 T 200,50",
            "M 0,50 Q 15,75 30,50 T 60,50 T 90,50 T 120,50 T 150,50 T 180,50 T 200,50",
            "M 0,50 Q 15,25 30,50 T 60,50 T 90,50 T 120,50 T 150,50 T 180,50 T 200,50"
          ]}}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        />
      </svg>
      {/* Real-time Frequency display */}
      <span className="absolute bottom-1.5 left-2 text-[6px] font-mono text-emerald-400">FREQ: 154.26 MHz</span>
      <span className="absolute bottom-1.5 right-2 text-[6px] font-mono text-cyan-400">AMPL: 2.45 V</span>
    </div>
  </div>
);

const renderHeroVisual = (category: string) => {
  switch (category) {
    case "radiology":
      return <RadiologyVisual />;
    case "cardiology":
      return <CardiologyVisual />;
    case "laboratory":
      return <LaboratoryVisual />;
    case "industrialValves":
      return <IndustrialValvesVisual />;
    case "industrialOffering":
      return <IndustrialOfferingVisual />;
    case "analyticalSolution":
      return <AnalyticalSolutionVisual />;
    default:
      return <RadiologyVisual />;
  }
};

export default function ProductsCatalog() {

  const location = useLocation();
  const [activeCategory, setActiveCategory] = useState<string>("radiology");
  const [activeSub, setActiveSub] = useState<string>("Imaging Systems");
  const [openAccordion, setOpenAccordion] = useState<string>("radiology");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [testiIndex, setTestiIndex] = useState<number>(0);

  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState<boolean>(false);
  const [selectedItemName, setSelectedItemName] = useState<string>('');
  const [isSendingQuote, setIsSendingQuote] = useState<boolean>(false);
  const [quoteFormSuccess, setQuoteFormSuccess] = useState<boolean>(false);
  const [quoteErrorMsg, setQuoteErrorMsg] = useState<string>('');
  const [quoteFormData, setQuoteFormData] = useState({
    fullName: '',
    email: '',
    role: '',
    countryCode: '+91',
    phone: '',
    message: ''
  });

  useEffect(() => {
    const handleHashRouting = () => {
      const currentHash = location.hash;
      if (currentHash) {
        let catKey = "";
        let subKey = "";

        if (currentHash === "#imaging-systems") {
          catKey = "radiology";
          subKey = "Imaging Systems";
        } else if (currentHash === "#industrial-valves") {
          catKey = "industrialValves";
          subKey = "Valve Selection";
        } else if (currentHash === "#analytical-solutions") {
          catKey = "analyticalSolution";
          subKey = "Ultrasonic Flowmeters";
        }

        if (catKey && subKey) {
          setActiveCategory(catKey);
          setOpenAccordion(catKey);
          setActiveSub(subKey);

          setTimeout(() => {
            const elementId = currentHash.replace('#', '');
            
            // Poll for the target element to exist in the DOM (accommodating AnimatePresence layout shifts)
            let attempts = 0;
            const interval = setInterval(() => {
              const targetElement = document.getElementById(elementId);
              attempts++;
              
              if (targetElement) {
                clearInterval(interval);
                targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
              } else if (attempts >= 10) {
                clearInterval(interval);
                // Fallback to the main catalog view
                const fallback = document.getElementById("catalog-main-view");
                if (fallback) {
                  fallback.scrollIntoView({ behavior: "smooth", block: "start" });
                }
              }
            }, 50);
          }, 100);
        }
      } else {
        window.scrollTo(0, 0);
      }
    };

    handleHashRouting();
  }, [location]);

  useEffect(() => {
    if (!catalogData[activeCategory]) {
      setActiveCategory("radiology");
      return;
    }
    const subs = Object.keys(catalogData[activeCategory].subcategories);
    if (!subs.includes(activeSub)) setActiveSub(subs[0]);
  }, [activeCategory]);

  const brandBlue = "#4672A4"; 
  const WHATSAPP_NUMBER = "919597959894";
  const SALES_EMAIL = "sales@suntrion.com";

  // countryCodes is imported from '../data/countryCodes'

  const handleQuoteSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setQuoteErrorMsg('');

    if (!quoteFormData.fullName.trim() || !quoteFormData.email.trim() || !quoteFormData.role.trim() || !quoteFormData.phone.trim()) {
      setQuoteErrorMsg("Please fill in all mandatory fields marked with *");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(quoteFormData.email.trim())) {
      setQuoteErrorMsg("Please enter a valid email address");
      return;
    }

    const trimmedPhone = quoteFormData.phone.trim();
    const phoneDigits = trimmedPhone.replace(/\D/g, '');
    if (phoneDigits.length < 7 || phoneDigits.length > 12) {
      setQuoteErrorMsg("Please enter a valid phone number (7 to 12 digits)");
      return;
    }

    setIsSendingQuote(true);

    const fullFormattedPhone = `${quoteFormData.countryCode} ${quoteFormData.phone}`;
    const productTitle = `${catalogData[activeCategory].title} - ${activeSub}`;
    const dateFormatted = new Date().toLocaleDateString('default', { day: 'numeric', month: 'long', year: 'numeric' });
    const timeFormatted = new Date().toLocaleTimeString('default', { hour: '2-digit', minute: '2-digit' });
    const queryMessage = quoteFormData.message || "Requesting custom quote for product.";

    const templateParams = {
      to_email: "sales@suntrion.com",
      fullName: quoteFormData.fullName,
      role: quoteFormData.role,
      countryCode: quoteFormData.countryCode,
      country_code: quoteFormData.countryCode,
      contactNumber: quoteFormData.phone,
      contact_number: quoteFormData.phone,
      phone: fullFormattedPhone,
      email: quoteFormData.email,
      product: productTitle,
      date: dateFormatted,
      time: timeFormatted,
      query: queryMessage,
      message: `
NEW PRODUCT QUOTE REQUEST
=========================
Product             : ${productTitle}
Client Name         : ${quoteFormData.fullName}
Role / Designation  : ${quoteFormData.role}
Work Email Address  : ${quoteFormData.email}
Contact Number      : ${fullFormattedPhone}
Requested on        : ${dateFormatted} at ${timeFormatted}
Requirements        : ${queryMessage}
-------------------------
Sent automatically via Suntrion Web Portal.
      `,
      message_html: `
        <div style="font-family: 'Inter', system-ui, -apple-system, sans-serif; background-color: #f8fafc; padding: 40px 20px; color: #0f172a; max-width: 600px; margin: 0 auto; border-radius: 24px;">
          <!-- Branded Header -->
          <div style="background: linear-gradient(135deg, #4672A4 0%, #2b4c7e 100%); padding: 32px 24px; border-radius: 20px 20px 0 0; text-align: center; color: #ffffff;">
            <span style="font-size: 10px; font-weight: 800; letter-spacing: 2px; text-transform: uppercase; opacity: 0.85; display: block; margin-bottom: 8px;">Suntrion Portal</span>
            <h1 style="margin: 0; font-size: 22px; font-weight: 800; text-transform: uppercase; letter-spacing: -0.5px;">New Quote Request</h1>
            <p style="margin: 8px 0 0 0; font-size: 13px; opacity: 0.9; font-weight: 500;">Procurement Quote details are listed below</p>
          </div>

          <!-- Main Content Card -->
          <div style="background-color: #ffffff; padding: 36px 32px; border-radius: 0 0 20px 20px; box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.05), 0 10px 10px -5px rgba(0, 0, 0, 0.04); border: 1px solid #e2e8f0; border-top: none;">
            
            <!-- Product Badge -->
            <div style="margin-bottom: 28px;">
              <span style="font-size: 10px; font-weight: 800; color: #64748b; text-transform: uppercase; display: block; margin-bottom: 6px;">Requested Product</span>
              <span style="background-color: #f1f5f9; color: #4672A4; font-size: 14px; font-weight: 800; padding: 8px 16px; border-radius: 8px; border: 1px solid #e2e8f0; display: inline-block;">
                ${productTitle}
              </span>
            </div>

            <!-- Profile Fields -->
            <h3 style="margin: 0 0 16px 0; font-size: 13px; font-weight: 800; text-transform: uppercase; color: #475569; letter-spacing: 0.5px; border-bottom: 1px solid #edf2f7; padding-bottom: 8px;">Client Profile</h3>
            
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 28px;">
              <tr style="border-bottom: 1px solid #f1f5f9;">
                <td style="padding: 12px 0; font-size: 12px; font-weight: 600; color: #64748b; width: 150px;">Full Name</td>
                <td style="padding: 12px 0; font-size: 13px; font-weight: 700; color: #0f172a;">${quoteFormData.fullName}</td>
              </tr>
              <tr style="border-bottom: 1px solid #f1f5f9;">
                <td style="padding: 12px 0; font-size: 12px; font-weight: 600; color: #64748b;">Designation / Role</td>
                <td style="padding: 12px 0; font-size: 13px; font-weight: 600; color: #334155;">${quoteFormData.role}</td>
              </tr>
              <tr style="border-bottom: 1px solid #f1f5f9;">
                <td style="padding: 12px 0; font-size: 12px; font-weight: 600; color: #64748b;">Work Email</td>
                <td style="padding: 12px 0; font-size: 13px; font-weight: 600; color: #334155;">
                  <a href="mailto:${quoteFormData.email}" style="color: #4672A4; text-decoration: none; font-weight: 700;">${quoteFormData.email}</a>
                </td>
              </tr>
              <tr style="border-bottom: 1px solid #f1f5f9;">
                <td style="padding: 12px 0; font-size: 12px; font-weight: 600; color: #64748b;">Contact Number</td>
                <td style="padding: 12px 0; font-size: 13px; font-weight: 700; color: #0f172a;">${fullFormattedPhone}</td>
              </tr>
              <tr style="border-bottom: 1px solid #f1f5f9;">
                <td style="padding: 12px 0; font-size: 12px; font-weight: 600; color: #64748b;">Requested on</td>
                <td style="padding: 12px 0; font-size: 13px; font-weight: 600; color: #334155;">${dateFormatted} at ${timeFormatted}</td>
              </tr>
            </table>

            <!-- Requirements Message -->
            <div style="margin-bottom: 32px;">
              <span style="font-size: 10px; font-weight: 800; color: #64748b; text-transform: uppercase; display: block; margin-bottom: 8px;">Specific Requirements</span>
              <div style="background-color: #f8fafc; border: 1px solid #edf2f7; padding: 16px; border-radius: 12px; color: #334155; font-size: 13px; line-height: 1.6; font-style: italic;">
                "${queryMessage}"
              </div>
            </div>

            <!-- Quick Actions -->
            <h3 style="margin: 0 0 16px 0; font-size: 13px; font-weight: 800; text-transform: uppercase; color: #475569; letter-spacing: 0.5px; border-bottom: 1px solid #edf2f7; padding-bottom: 8px;">Quick Actions</h3>
            
            <div style="margin-top: 16px;">
              <a href="https://wa.me/${phoneDigits}" target="_blank" style="background-color: #25D366; color: white; padding: 12px 20px; border-radius: 12px; text-decoration: none; font-size: 11px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.5px; display: inline-block; margin-right: 8px; margin-bottom: 8px; box-shadow: 0 4px 6px -1px rgba(37, 211, 102, 0.15);">
                💬 Chat on WhatsApp
              </a>
              <a href="mailto:${quoteFormData.email}?subject=Suntrion Quote Request: ${productTitle}" style="background-color: #4672A4; color: white; padding: 12px 20px; border-radius: 12px; text-decoration: none; font-size: 11px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.5px; display: inline-block; margin-bottom: 8px; box-shadow: 0 4px 6px -1px rgba(70, 114, 164, 0.15);">
                ✉️ Send Quote Details
              </a>
            </div>

          </div>

          <!-- Branded Footer -->
          <div style="text-align: center; margin-top: 24px; font-size: 10px; color: #64748b; line-height: 1.5;">
            This is an automated notification from your Suntrion Website Portal.<br />
            Do not reply directly to this email.
          </div>
        </div>
      `
    };

    emailjs.send(
      'default_service', 
      'template_9hqfjlg',      
      templateParams, 
      'pk_mYsYD5gpn7fvzV'      
    )
    .then(() => {
      setQuoteFormSuccess(true);
      setIsSendingQuote(false);
    })
    .catch((error: any) => {
      console.error('EmailJS Error:', error);
      alert(`Error sending request. Please contact ${SALES_EMAIL}`);
      setIsSendingQuote(false);
    });
  };

  const getDynamicContactLink = () => {
    if (typeof window !== "undefined" && navigator) {
      const isMobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      );
      if (isMobileDevice) {
        return `tel:+${WHATSAPP_NUMBER}`;
      }
    }
    return `https://web.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=Hi%20Suntrion%20Sales,%20I'd%20like%20to%20get%20a%20quote%20for%20the%20${catalogData[activeCategory].title}%20-%20${activeSub}.`;
  };

  const handleMobileSelect = (key: string) => {
    setActiveCategory(key);
    setOpenAccordion(openAccordion === key ? "" : key);
  };

  const nextTesti = () => setTestiIndex((prev) => (prev + 1) % instrumentalTestimonials.length);
  const prevTesti = () => setTestiIndex((prev) => (prev - 1 + instrumentalTestimonials.length) % instrumentalTestimonials.length);

  return (
    <div className="min-h-screen bg-[#F8FAFC] dark:bg-[#070B13] font-['Outfit'] pb-12 relative">
      
      {/* MOBILE MENU TOGGLE */}
      <div className="lg:hidden fixed top-24 left-6 z-[110]">
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="w-12 h-12 rounded-2xl shadow-xl flex items-center justify-center text-white border border-white/20"
          style={{ backgroundColor: brandBlue }}
        >
          {isMobileMenuOpen ? <CloseIcon size={20} /> : <Menu size={20} />}
        </motion.button>
      </div>

      <div className="h-20 lg:h-24" />

      {/* MOBILE MENU OVERLAY */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-[#0A1128]/60 backdrop-blur-sm z-[101] lg:hidden"
            />
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 left-0 w-[85%] sm:w-[350px] h-full bg-white dark:bg-[#0C121D] z-[105] shadow-2xl lg:hidden overflow-y-auto"
            >
              <div className="p-8 pt-24">
                <div className="flex justify-between items-center mb-8">
                  <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">Inventory Divisions</h3>
                  <button onClick={() => setIsMobileMenuOpen(false)} className="text-slate-300"><CloseIcon size={20}/></button>
                </div>
                <div className="divide-y divide-slate-50 border border-slate-100 dark:border-white/5 rounded-3xl overflow-hidden shadow-sm">
                  {Object.entries(catalogData).map(([key, cat]) => (
                    <div key={key}>
                      <button 
                        onClick={() => handleMobileSelect(key)} 
                        className={`w-full flex items-center justify-between p-5 transition-all ${activeCategory === key ? 'bg-blue-50/40' : 'bg-white dark:bg-[#0C121D]'}`}
                      >
                        <div className="flex items-center gap-4">
                          <span style={{ color: activeCategory === key ? brandBlue : '#cbd5e1' }}>{cat.icon}</span>
                          <span className={`text-xs font-black uppercase tracking-tight ${activeCategory === key ? 'text-[#0A1128] dark:text-white' : 'text-slate-400'}`}>{cat.title}</span>
                        </div>
                        {openAccordion === key ? <ChevronDown size={24} /> : <ChevronRight size={24} />}
                      </button>
                      <AnimatePresence>
                        {openAccordion === key && (
                          <motion.div initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }} className="overflow-hidden bg-slate-50/30">
                            {Object.keys(cat.subcategories).map(sub => (
                              <button 
                                key={sub} 
                                onClick={() => {
                                  setActiveSub(sub);
                                  setIsMobileMenuOpen(false);
                                }} 
                                className={`w-full pl-16 pr-6 py-4 text-left text-[11px] font-bold border-l-4 ${activeSub === sub ? 'border-[#4672A4] text-[#4672A4] bg-white dark:bg-[#0C121D]' : 'border-transparent text-slate-400'}`}
                              >
                                {sub}
                              </button>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* HERO BANNER */}
      <div className="relative py-16 lg:py-24 bg-[#0A1128] overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: `radial-gradient(${brandBlue} 2px, transparent 2px)`, backgroundSize: '40px 40px' }} />
        
        {/* Glow Effects */}
        <div className="absolute -right-40 -top-40 w-96 h-96 rounded-full bg-blue-500/10 blur-3xl pointer-events-none" />
        <div className="absolute right-1/4 -bottom-20 w-80 h-80 rounded-full bg-indigo-500/10 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 text-center lg:text-left">
              <motion.div 
                key={activeCategory}
                initial={{ opacity: 0, y: 15 }} 
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                <Link to="/" className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-white mb-6 transition-colors">
                  <ChevronLeft size={14} /> Back to Home
                </Link>
                <p className="text-[#4672A4] text-[10px] font-black uppercase tracking-[0.5em] mb-6">
                  {catalogData[activeCategory].subtitle}
                </p>
                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-[1000] text-white uppercase tracking-tighter leading-none">
                  {catalogData[activeCategory].title}
                </h1>
              </motion.div>
            </div>
            
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <AnimatePresence mode="wait">
                <motion.div 
                  key={activeCategory}
                  initial={{ opacity: 0, scale: 0.9, rotate: -1 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  exit={{ opacity: 0, scale: 0.9, rotate: 1 }}
                  transition={{ duration: 0.4, type: "spring", stiffness: 100 }}
                  className="relative w-full max-w-[360px] aspect-[4/3] rounded-3xl overflow-hidden border border-white/10 bg-slate-950/40 p-2 shadow-2xl backdrop-blur-md group"
                >
                  {/* Glowing border effect */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 via-transparent to-indigo-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  
                  <div className="w-full h-full rounded-2xl overflow-hidden bg-slate-900 flex items-center justify-center relative">
                    {/* Dynamic High-Tech CSS/Framer Motion Vector Animations */}
                    {renderHeroVisual(activeCategory)}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>

      {/* MAIN CONTENT WORKSPACE VIEW */}
      <div id="catalog-main-view" className="max-w-7xl mx-auto px-4 sm:px-6 py-12 lg:py-20 scroll-mt-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          
          {/* SIDEBAR (Desktop) */}
          <aside className="hidden lg:block lg:col-span-4 space-y-4">
            <div className="bg-white dark:bg-[#0C121D] rounded-[2.5rem] shadow-sm border border-slate-100 dark:border-white/5 overflow-hidden sticky top-32">
              <div className="p-8 border-b border-slate-50 bg-slate-50/50">
                <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">Inventory Divisions</h3>
              </div>
              <div className="divide-y divide-slate-50">
                {Object.entries(catalogData).map(([key, cat]) => (
                  <div key={key}>
                    <button 
                      onClick={() => { setOpenAccordion(openAccordion === key ? "" : key); setActiveCategory(key); }} 
                      className={`w-full flex items-center justify-between p-6 transition-all ${activeCategory === key ? 'bg-blue-50/40' : 'hover:bg-slate-50 dark:bg-[#0C121D]'}`}
                    >
                      <div className="flex items-center gap-4">
                        <span style={{ color: activeCategory === key ? brandBlue : '#cbd5e1' }}>{cat.icon}</span>
                        <span className={`text-xs font-black uppercase tracking-tight ${activeCategory === key ? 'text-[#0A1128] dark:text-white' : 'text-slate-400'}`}>{cat.title}</span>
                      </div>
                      {openAccordion === key ? <ChevronDown size={24} /> : <ChevronRight size={24} />}
                    </button>
                    <AnimatePresence>
                      {openAccordion === key && (
                        <motion.div initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }} className="overflow-hidden bg-slate-50/30">
                          {Object.keys(cat.subcategories).map(sub => (
                            <button 
                                key={sub} 
                                onClick={() => setActiveSub(sub)} 
                                className={`w-full pl-16 pr-6 py-4 text-left text-[11px] font-bold transition-all border-l-4 ${activeSub === sub ? 'border-[#4672A4] text-[#4672A4] bg-white dark:bg-[#0C121D] shadow-inner' : 'border-transparent text-slate-400 hover:text-slate-600 dark:hover:text-slate-300'}`}
                            >
                                {sub}
                            </button>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </div>

            {/* CONTACT FOR QUOTE SYSTEM */}
            <div className="bg-white dark:bg-[#0C121D] p-6 rounded-[2rem] border border-slate-100 dark:border-white/5 shadow-xl space-y-3 sticky top-[530px]">
              <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest text-center mb-1">Procurement & Quotes</p>
              
              <motion.button 
                type="button"
                whileHover={{ scale: 1.02 }} 
                onClick={() => {
                  setQuoteFormSuccess(false);
                  setQuoteErrorMsg('');
                  setQuoteFormData({ fullName: '', email: '', role: '', countryCode: '+91', phone: '', message: '' });
                  setIsQuoteModalOpen(true);
                }}
                className="w-full bg-[#4672A4] py-4 rounded-xl text-white font-black uppercase tracking-widest text-[10px] flex items-center justify-center gap-2 shadow-md"
              >
                <Mail size={24} /> Email Quote Request
              </motion.button>
              
              <motion.a 
                whileHover={{ scale: 1.02 }} 
                href={getDynamicContactLink()} 
                target="_top"
                className="w-full bg-[#0A1128] py-4 rounded-xl text-white font-black uppercase tracking-widest text-[10px] flex items-center justify-center gap-2 shadow-md"
              >
                <PhoneCall size={24} style={{ color: "#F59E0B" }} /> Connect with Support
              </motion.a>
            </div>
          </aside>

          {/* MAIN CONTENT AREA */}
          <main className="lg:col-span-8 space-y-12">
            <div className="bg-white dark:bg-[#0C121D] rounded-[2rem] sm:rounded-[3rem] shadow-sm border border-slate-100 dark:border-white/5 p-6 sm:p-8 lg:p-16 min-h-[500px]">
              <AnimatePresence mode="wait">
                <motion.div key={activeCategory + activeSub} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-8 lg:space-y-12">
                  <div 
                    id={
                      activeSub === "Imaging Systems" 
                        ? "imaging-systems" 
                        : activeSub === "Valve Selection" 
                        ? "industrial-valves" 
                        : activeSub === "Ultrasonic Flowmeters" 
                        ? "analytical-solutions" 
                        : undefined
                    }
                    className="space-y-4 lg:space-y-6 scroll-mt-28"
                  >
                    <h2 className="text-2xl lg:text-5xl font-black text-[#0A1128] dark:text-white uppercase tracking-tighter leading-tight">
                      {activeSub}
                    </h2>
                    <div className="w-16 lg:w-20 h-1.5 rounded-full" style={{ backgroundColor: brandBlue }} />
                  </div>

                  {catalogData[activeCategory].subcategories[activeSub]?.intro && (
                    <p className="text-slate-500 dark:text-slate-400 text-base lg:text-lg leading-relaxed font-medium text-justify">
                      {catalogData[activeCategory].subcategories[activeSub].intro}
                    </p>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 lg:gap-4">
                    {catalogData[activeCategory].subcategories[activeSub]?.items?.map((item, idx) => (
                      <motion.div 
                        key={idx} 
                        whileHover={{ x: 5 }} 
                        onClick={() => {
                          setSelectedItemName(item.name);
                          setQuoteFormSuccess(false);
                          setQuoteErrorMsg('');
                          setQuoteFormData({ fullName: '', email: '', role: '', countryCode: '+91', phone: '', message: '' });
                          setIsQuoteModalOpen(true);
                        }}
                        className="flex items-center gap-3 lg:gap-4 p-4 lg:p-5 bg-[#F8FAFC] dark:bg-[#070B13] rounded-xl lg:rounded-2xl border border-slate-100 dark:border-white/5 group hover:border-blue-200 transition-all cursor-pointer"
                      >
                        <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-lg lg:rounded-xl bg-white dark:bg-[#0C121D] shadow-sm flex items-center justify-center text-[#4672A4] group-hover:bg-[#4672A4] group-hover:text-white transition-all">
                          {item.icon}
                        </div>
                        <span className="text-[10px] lg:text-xs font-black text-[#0A1128] dark:text-white uppercase tracking-tight">{item.name}</span>
                      </motion.div>
                    ))}
                  </div>

                  {catalogData[activeCategory].subcategories[activeSub]?.datasheets && (
                    <div className="mt-6 lg:mt-8 space-y-4">
                      <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-400 underline decoration-[#4672A4] underline-offset-8">
                          Technical Documentation
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {catalogData[activeCategory].subcategories[activeSub].datasheets.map(file => (
                          <div key={file} className="flex items-center gap-4 p-4 border border-dashed border-slate-200 dark:border-white/10 rounded-xl hover:bg-slate-50 dark:bg-[#0C121D] transition-all cursor-pointer">
                            <FileText size={18} className="text-red-400" />
                            <span className="text-[10px] lg:text-xs font-bold text-slate-500 dark:text-slate-400 uppercase">{file}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {catalogData[activeCategory].subcategories[activeSub]?.footer && (
                    <div className="p-6 lg:p-8 bg-blue-50/50 rounded-2xl lg:rounded-3xl border border-blue-100/50 mt-8 lg:mt-10">
                      <p className="text-xs lg:text-sm text-[#4672A4] font-bold leading-relaxed">
                          {catalogData[activeCategory].subcategories[activeSub].footer}
                      </p>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* PROCUREMENT & QUOTES CARD FOR MOBILE */}
            <div className="lg:hidden bg-white dark:bg-[#0C121D] p-8 rounded-[2rem] border border-slate-100 dark:border-white/5 shadow-xl space-y-4 mt-8">
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest text-center">Procurement & Quotes</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <motion.button 
                  type="button"
                  whileHover={{ scale: 1.02 }} 
                  onClick={() => {
                    setQuoteFormSuccess(false);
                    setQuoteErrorMsg('');
                    setQuoteFormData({ fullName: '', email: '', role: '', countryCode: '+91', phone: '', message: '' });
                    setIsQuoteModalOpen(true);
                  }}
                  className="w-full bg-[#4672A4] py-4 rounded-xl text-white font-black uppercase tracking-widest text-[10px] flex items-center justify-center gap-2 shadow-md"
                >
                  <Mail size={24} /> Email Quote Request
                </motion.button>
                <motion.a 
                  whileHover={{ scale: 1.02 }} 
                  href={getDynamicContactLink()} 
                  className="w-full bg-[#0A1128] py-4 rounded-xl text-white font-black uppercase tracking-widest text-[10px] flex items-center justify-center gap-2 shadow-md"
                >
                  <PhoneCall size={24} style={{ color: "#F59E0B" }} /> Connect with Support
                </motion.a>
              </div>
            </div>

            {/* TESTIMONIALS SECTION */}
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">
                  Global Validation & Success Stories
                </h3>
                <div className="h-px flex-grow bg-slate-100 dark:bg-white/5" />
              </div>

              <div className="relative overflow-hidden py-4">
                <AnimatePresence mode="wait">
                  <motion.div 
                    key={testiIndex}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    onDragEnd={(_, info) => {
                      if (info.offset.x < -50) nextTesti();
                      if (info.offset.x > 50) prevTesti();
                    }}
                    className="bg-white dark:bg-[#0C121D] p-8 lg:p-12 rounded-[2.5rem] border border-slate-100 dark:border-white/5 shadow-sm flex flex-col relative cursor-grab active:cursor-grabbing min-h-[300px]"
                  >
                    <Quote className="absolute top-8 right-10 opacity-5" size={60} style={{ color: brandBlue }} />
                    
                    <div className="absolute top-8 right-8 flex gap-2">
                      <button type="button" onClick={prevTesti} className="p-2.5 rounded-full bg-slate-50 dark:bg-[#0C121D] text-slate-400 hover:bg-[#4672A4] hover:text-white transition-all shadow-sm"><ChevronLeft size={16}/></button>
                      <button type="button" onClick={nextTesti} className="p-2.5 rounded-full bg-slate-50 dark:bg-[#0C121D] text-slate-400 hover:bg-[#4672A4] hover:text-white transition-all shadow-sm"><ChevronRight size={16}/></button>
                    </div>

                    <div className="flex items-center gap-3 mb-6 text-[#4672A4]">
                      <div className="p-3 bg-blue-50 rounded-2xl">
                        {instrumentalTestimonials[testiIndex].icon}
                      </div>
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => <Star key={i} size={10} fill={brandBlue} color={brandBlue} />)}
                      </div>
                    </div>
                    
                    <p className="text-lg lg:text-xl font-medium text-slate-500 dark:text-slate-400 leading-relaxed mb-10 pr-4 lg:pr-20">
                      "{instrumentalTestimonials[testiIndex].text}"
                    </p>
                    
                    <div className="mt-auto flex justify-between items-end">
                      <div>
                        <h4 className="text-sm font-black uppercase tracking-widest text-[#0A1128] dark:text-white">{instrumentalTestimonials[testiIndex].client}</h4>
                        <p className="text-[10px] font-bold text-slate-300 uppercase tracking-tighter mt-1">{instrumentalTestimonials[testiIndex].location}</p>
                      </div>
                      
                      <div className="flex gap-1.5 pb-1">
                        {instrumentalTestimonials.map((_, i) => (
                          <div key={i} className={`h-1 rounded-full transition-all duration-300 ${i === testiIndex ? 'w-6 bg-[#4672A4]' : 'w-2 bg-slate-200'}`} />
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </main>
        </div>
      </div>

      {/* --- INFINITE CLIENTELE MARQUEE --- */}
      <div className="max-w-7xl mx-auto px-6 mt-16 border-t border-slate-100 dark:border-white/5 pt-16">
        <h3 className="text-center text-xs font-black uppercase tracking-widest text-slate-400 mb-12">
          Our Elite Corporate Clientele
        </h3>
        
        <div className="relative w-full overflow-hidden before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-24 before:bg-gradient-to-r before:from-[#F8FAFC] dark:before:from-[#070B13] before:to-transparent after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-24 after:bg-gradient-to-l after:from-[#F8FAFC] dark:after:from-[#070B13] after:to-transparent">
          
          <motion.div 
            className="flex gap-20 items-center w-max"
            animate={{ x: ["-50%", "0%"] }}
            transition={{
              ease: "linear",
              duration: 25, 
              repeat: Infinity,
            }}
          >
            {[...clientLogos, ...clientLogos].map((logo, index) => (
              <div 
                key={index} 
                className="w-40 h-20 bg-white dark:bg-white/95 border border-slate-100 dark:border-white/10 rounded-2xl p-3 flex items-center justify-center transition-transform duration-300 hover:scale-105 select-none"
              >
                <img 
                  src={logo.src} 
                  alt={logo.name} 
                  className="max-w-full max-h-full object-contain mix-blend-multiply"
                  onError={(e) => {
                    const target = e.currentTarget;
                    target.style.display = 'none';
                    const sibling = target.parentElement?.querySelector('span');
                    if (sibling) {
                      sibling.style.display = 'block';
                    }
                  }}
                />
                <span className="hidden text-xs font-bold text-slate-400 text-center uppercase tracking-tight">
                  {logo.name}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* --- QUOTE REQUEST FORM MODAL --- */}
      <AnimatePresence>
        {isQuoteModalOpen && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
            {/* Backdrop Overlay */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsQuoteModalOpen(false)}
              className="absolute inset-0 bg-[#0A1128]/60 backdrop-blur-sm"
            />

            {/* Modal Content Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-white dark:bg-[#0C121D] w-full max-w-lg rounded-[2.5rem] shadow-2xl border border-slate-100 dark:border-white/5 overflow-hidden relative p-8 md:p-10 z-[210] flex flex-col font-['Outfit']"
            >
              {/* Close Button */}
              <button 
                type="button"
                onClick={() => setIsQuoteModalOpen(false)}
                className="absolute top-6 right-6 p-2 rounded-full hover:bg-slate-50 dark:bg-[#0C121D] text-slate-400 hover:text-[#0A1128] dark:text-white transition-colors"
                aria-label="Close modal"
              >
                <CloseIcon size={18} />
              </button>

              {!quoteFormSuccess ? (
                <>
                  <div className="mb-6 text-left">
                    <span className="text-[10px] font-black text-[#4672A4] uppercase tracking-widest block mb-1">Procurement & Quotes</span>
                    <h3 className="text-xl lg:text-2xl font-black text-[#0A1128] dark:text-white uppercase tracking-tight">Request a Quote</h3>
                    <p className="text-xs text-slate-400 font-bold mt-1 uppercase">
                      Product: <span className="text-[#4672A4]">{selectedItemName || `${catalogData[activeCategory].title} - ${activeSub}`}</span>
                    </p>
                  </div>

                  <form onSubmit={handleQuoteSubmit} className="space-y-4 text-left" noValidate>
                    <input 
                      type="text" 
                      placeholder="Full Name *" 
                      className="w-full px-5 py-3.5 bg-slate-50 dark:bg-[#0C121D] border border-slate-100 dark:border-white/5 rounded-xl focus:border-[#4672A4] outline-none text-sm transition-all"
                      value={quoteFormData.fullName}
                      onChange={e => setQuoteFormData({...quoteFormData, fullName: e.target.value})}
                    />
                    
                    <input 
                      type="email" 
                      placeholder="Work Email Address *" 
                      className="w-full px-5 py-3.5 bg-slate-50 dark:bg-[#0C121D] border border-slate-100 dark:border-white/5 rounded-xl focus:border-[#4672A4] outline-none text-sm transition-all"
                      value={quoteFormData.email}
                      onChange={e => setQuoteFormData({...quoteFormData, email: e.target.value})}
                    />

                    <input 
                      type="text" 
                      placeholder="Your Role *" 
                      className="w-full px-5 py-3.5 bg-slate-50 dark:bg-[#0C121D] border border-slate-100 dark:border-white/5 rounded-xl focus:border-[#4672A4] outline-none text-sm transition-all"
                      value={quoteFormData.role}
                      onChange={e => setQuoteFormData({...quoteFormData, role: e.target.value})}
                    />

                    <div className="flex gap-2 w-full">
                      <select 
                        value={quoteFormData.countryCode} 
                        onChange={e => setQuoteFormData({ ...quoteFormData, countryCode: e.target.value })}
                        className="w-[120px] px-3 py-3.5 bg-slate-50 dark:bg-[#0C121D] border border-slate-100 dark:border-white/5 rounded-xl focus:border-[#4672A4] outline-none text-sm text-slate-700 dark:text-slate-200 cursor-pointer transition-all"
                      >
                        {countryCodes.map(c => (
                          <option key={c.code} value={c.code}>{c.code} ({c.country})</option>
                        ))}
                      </select>
                      <input 
                        type="tel" 
                        placeholder="Contact Number *" 
                        required
                        className="flex-1 px-5 py-3.5 bg-slate-50 dark:bg-[#0C121D] border border-slate-100 dark:border-white/5 rounded-xl focus:border-[#4672A4] outline-none text-sm text-slate-900 dark:text-white transition-all"
                        value={quoteFormData.phone}
                        onChange={e => setQuoteFormData({...quoteFormData, phone: e.target.value})}
                      />
                    </div>

                    <textarea 
                      placeholder="Specific Requirements / Message (Optional)" 
                      rows={3}
                      className="w-full px-5 py-3.5 bg-slate-50 dark:bg-[#0C121D] border border-slate-100 dark:border-white/5 rounded-xl focus:border-[#4672A4] outline-none text-sm transition-all resize-none"
                      value={quoteFormData.message}
                      onChange={e => setQuoteFormData({...quoteFormData, message: e.target.value})}
                    />

                    {quoteErrorMsg && (
                      <p className="text-xs font-bold text-red-500 text-center mb-2 animate-pulse">{quoteErrorMsg}</p>
                    )}

                    <button 
                      type="submit" 
                      disabled={isSendingQuote} 
                      className="w-full py-4.5 bg-[#4672A4] text-white rounded-xl font-black uppercase text-[10px] tracking-widest flex items-center justify-center gap-2 shadow-md hover:opacity-90 transition-opacity"
                    >
                      {isSendingQuote ? (
                        <>
                          <Loader2 className="animate-spin" size={24}/> Sending Request...
                        </>
                      ) : "Send Quote Request"}
                    </button>
                  </form>
                </>
              ) : (
                <div className="text-center py-8 flex flex-col items-center justify-center">
                  <div className="w-16 h-16 bg-green-50 text-green-500 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle2 size={32} />
                  </div>
                  <h3 className="text-xl font-black text-[#0A1128] dark:text-white uppercase tracking-tight mb-2">Quote Request Submitted!</h3>
                 <p className="text-slate-500 dark:text-slate-400 text-xs font-medium leading-relaxed max-w-sm mb-2">
  Our team will review your request and reach out within 12 to 48 hours.
  <br className="mt-2" />
  For any urgent inquiries, please feel free to call us at <strong className="text-slate-600 dark:text-slate-300">+919597959894 (or) +918148145563</strong>.
</p>
                  <button 
                    type="button" 
                    onClick={() => setIsQuoteModalOpen(false)}
                    className="mt-8 px-8 py-3 bg-[#0A1128] hover:bg-[#0A1128]/90 text-white rounded-xl font-black text-[9px] uppercase tracking-widest shadow-sm transition-all"
                  >
                    Back to Catalog
                  </button>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
