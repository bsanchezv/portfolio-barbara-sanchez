import { withBase } from '../utils/base';

export type SectionId = 'home' | 'bi-reporting' | 'data-science' | 'docencia';

export interface NavItem {
  id: SectionId;
  label: string;
  href: string;
  accent: string;
}

export const navItems: NavItem[] = [
  { id: 'home', label: 'Home', href: withBase(''), accent: 'accent-magenta' },
  { id: 'bi-reporting', label: 'BI / Reporting', href: withBase('bi-reporting/'), accent: 'accent-magenta' },
  { id: 'data-science', label: 'Data Science', href: withBase('data-science/'), accent: 'accent-lavender' },
  { id: 'docencia', label: 'Docencia', href: withBase('docencia/'), accent: 'accent-salmon' },
];

export const contact = {
  email: 'barbarag.sanchezv@gmail.com',
  linkedin: 'https://www.linkedin.com/in/bsanchezv/',
  whatsapp: 'https://wa.me/51977739234',
  youtube: 'https://www.youtube.com/@LaAcademiaDeBarb',
  github: 'https://github.com/bsanchezv',
};

export const socialLinks = [
  { name: 'LinkedIn', href: contact.linkedin, icon: 'linkedin' },
  { name: 'YouTube', href: contact.youtube, icon: 'youtube' },
  { name: 'GitHub', href: contact.github, icon: 'github' },
];

export const techStack = [
  // Business Intelligence & Reportería
  { name: 'Power BI', category: 'BI' },
  { name: 'Qlik Sense', category: 'BI' },
  { name: 'DAX & Power Query', category: 'BI' },
  { name: 'Excel & VBA', category: 'Reporting' },

  // Bases de Datos & Modelado
  { name: 'SQL', category: 'Data' },
  { name: 'Databricks / Snowflake', category: 'Cloud' },

  // Programación & Machine Learning
  { name: 'Python', category: 'Data Science' },
  { name: 'R', category: 'Data Science' },
  { name: 'Pandas & Scikit-learn', category: 'Data Science' },

  // Herramientas & Flujo de Trabajo
  { name: 'Git & GitHub', category: 'Workflow' },
];

export const featuredProjects = [
  {
    title: 'Análisis de Datos / BI',
    description: 'Dashboards, pipelines ETL y reporting con Power BI y Qlik Sense.',
    href: withBase('bi-reporting/'),
    accent: 'accent-magenta',
    glow: 'shadow-glow-magenta',
    border: 'border-accent-magenta/30',
  },
  {
    title: 'Data Science',
    description: 'Proyectos de práctica con datasets de Kaggle — modelos supervisados y no supervisados.',
    href: withBase('data-science/'),
    accent: 'accent-lavender',
    glow: 'shadow-glow-lavender',
    border: 'border-accent-lavender/30',
  },
  {
    title: 'Docencia',
    description: 'Formación en Excel, Power BI y analítica de datos — La Academia de Barb.',
    href: withBase('docencia/'),
    accent: 'accent-salmon',
    glow: 'shadow-glow-salmon',
    border: 'border-accent-salmon/30',
  },
];
