export interface Education {
  degree: string;
  institution: string;
  year: string;
  link?: string;
}

export interface Qualification {
  title: string;
  institution: string;
  year: string;
  link?: string;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
}

export interface SkillCategory {
  domain: string;
  skills: string[];
}

import caiibPdf from '../assets/certifications and trainings/CAIIB (Retail Banking).pdf';
import compConceptsPdf from '../assets/certifications and trainings/Computer Concepts.pdf';
import domesticEnquiryPdf from '../assets/certifications and trainings/Domestic enquiry and disciplinary actions.pdf';
import fiAgriPdf from '../assets/certifications and trainings/FI and Agri L 2.pdf';
import financialRiskPdf from '../assets/certifications and trainings/Financial Risk and Regulations.pdf';
import iimCalcuttaPdf from '../assets/certifications and trainings/IIM CALCUTTA( Banking and Financial Sector.pdf';
import jaiibPdf from '../assets/certifications and trainings/JAIIB.pdf';
import manipalMbaPdf from '../assets/certifications and trainings/Manipal University MBA(banking and finance).pdf';
import riskFinancialPdf from '../assets/certifications and trainings/Risk In Financial Services L1.pdf';

export const educationData: Education[] = [
  { degree: 'MBA', institution: 'Manipal University', year: '2024', link: manipalMbaPdf },
];

export const qualificationsData: Qualification[] = [
  { title: 'Risk in Financial Services Level 1', institution: '', year: '2025', link: riskFinancialPdf },
  { title: 'Financial Risk and Regulation (FRR)', institution: 'GARP', year: '2023', link: financialRiskPdf },
  { title: 'Executive Certificate in Banking & Finance', institution: 'IIM Calcutta', year: '2020', link: iimCalcuttaPdf },
  { title: 'CAIIB (Retail Banking)', institution: 'IIBF', year: '2015', link: caiibPdf },
  { title: 'JAIIB', institution: 'IIBF', year: '2012', link: jaiibPdf },
  { title: 'Computer Concepts', institution: '', year: 'N/A', link: compConceptsPdf },
  { title: 'Domestic enquiry and disciplinary actions', institution: '', year: 'N/A', link: domesticEnquiryPdf },
  { title: 'FI and Agri Level 2', institution: '', year: 'N/A', link: fiAgriPdf },
];



export const experienceData: Experience[] = [
  { role: 'SME Cell Head, Chief Manager', company: '', period: '2026-Present' },
  { role: 'Branch Head, Chief Manager', company: '', period: '2025-2026' },
  { role: 'Risk Management Officer (Zonal Level), Senior Manager', company: '', period: '2020-2025' },
  { role: 'Credit Officer (Urban Branch), Manager', company: '', period: '2018-2020' },
  { role: 'Branch Head (Rural Branch), Officer', company: '', period: '2017-2018' },
  { role: 'Operations Officer, Officer', company: '', period: '2013-2016' },
];

export const skillsData: SkillCategory[] = [
  {
    domain: 'Risk Management & Compliance',
    skills: ['ERM', 'Operational Risk', 'Stress Testing', 'Basel III', 'RBI Regulations'],
  },
  {
    domain: 'Fraud Prevention & Investigation',
    skills: ['Fraud Risk Management', 'EWS Monitoring', 'Root Cause Analysis', 'Forensic Transaction Analysis'],
  },
  {
    domain: 'Banking Operations',
    skills: ['Credit Appraisal', 'Asset Quality Monitoring', 'Internal Audit'],
  },
  {
    domain: 'Leadership & Management',
    skills: ['Branch Management', 'Stakeholder Management', 'Team Leadership'],
  },
];
