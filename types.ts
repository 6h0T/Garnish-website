import React from 'react';

export interface NavItem {
  label: string;
  href: string;
}

export interface WeeklyEvent {
  day: string;
  title: string;
  description: string;
  hashtags: string[];
  icon: React.ReactNode;
}

export interface MenuItem {
  name: string;
  description?: string;
  price?: string;
}

export interface MenuCategory {
  title: string;
  items: MenuItem[];
}