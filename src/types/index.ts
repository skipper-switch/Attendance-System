/* eslint-disable @typescript-eslint/no-explicit-any */
import { StaticImageData } from "next/image";
export interface Photo {
  model_name: string;
  model_id: string;
  organization_id: string;
  filename: string;
  url: string;
  is_featured: boolean;
  save_as_jpg: boolean;
  is_public: boolean;
  file_rename: boolean;
  position: number;
}

export interface Price {
  [currency: string]: [number, null, any[]];
}

export interface Item {
  name: string;
  description: string | null;
  unique_id: string;
  url_slug: string;
  is_available: boolean;
  is_service: boolean;
  previous_url_slugs: string | null;
  unavailable: boolean;
  unavailable_start: string | null;
  unavailable_end: string | null;
  id: string;
  parent_product_id: string | null;
  parent: string | null;
  organization_id: string;
  product_image: any[];
  categories: any[];
  date_created: string;
  last_updated: string;
  user_id: string;
  photos: Photo[];
  current_price: Price[];
  is_deleted: boolean;
  available_quantity: number;
  selling_price: number | null;
  discounted_price: number | null;
  buying_price: number | null;
  extra_infos: any | null;
}

export interface ProductInterface {
  current_price: any;
  name: string | undefined;
  photos: any;
  id: any;
  page: number;
  size: number;
  total: number;
  debug: any | null;
  previous_page: string | null;
  next_page: string | null;
  items: Item[];
}

// New
export interface Product {
  id: string;
  imagePublicId: string;
  imageUrl: string;
  name: string;
  price: number;
  title: string;
}




export interface ToastNotificationProps {
  title: string;
  description: string;
  type?: "success" | "error" | "info";
}

export interface SubmitButtonProps {
  type?: any;
  isLoading?: boolean;
  loading?: boolean;
  disabled?: boolean;
  className?: string;
  loadingText?: string;
  children: React.ReactNode;
  // clickFn?: () => void;
  clickFn?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}



export interface ImageSectionProps {
  imageSrc: StaticImageData;
  altText?: string;
  containerWidth?: string;
  imageHeight?: number;
  imageWidth?: number;
  className?: string;
  placeholder?: "blur" | "empty";
}


// types/index.ts
export type Role = 'student' | 'admin';
export type AttendanceStatus = 'present' | 'late' | 'excused' | 'absent';
export interface User {
id: number;
name: string;
email: string;
password: string;
role: Role;
cohortId: number | null;
avatarInitials: string;
enrolledDate: string | null;
}
export interface Cohort {
id: number;
name: string;
startDate: string;
endDate: string;
instructor: string;
description: string;
}
export interface AttendanceRecord {
id: number;
studentId: number;
cohortId: number;
date: string; // 'YYYY-MM-DD'
status: AttendanceStatus;
checkInTime?: string; // ISO timestamp, present/late only
note: string;
}
export interface MonthlySummary {
month: string; // 'Feb 2026'
total: number;
present: number;
late: number;
excused: number;
absent: number;
percentage: number; // (present + late) / total * 100
}

