import React from 'react';

export interface NavItem {
  label: string;
  path?: string;
  children?: NavItem[];
  description?: string;
}

export interface Project {
  id: string;
  title: string;
  location: string;
  capacity: string;
  description: string;
  category: 'Tires' | 'Plastics' | 'Biomass' | 'MSW' | 'Industrial';
  status: 'Operational' | 'Under Construction' | 'Development';
  image: string;
}

export interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface Technology {
  title: string;
  description: string;
  image: string;
  details: string[];
}

export interface NewsItem {
  id: string;
  title: string;
  date: string;
  summary: string;
  image: string;
}