export interface ApiResponse<T> {
  data: T;
  message?: string;
  status: number;
}

export interface ApiError {
  message: string;
  status: number;
  errors?: Record<string, string[]>;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  token: string;
  user: User;
}

export interface User {
  id: string;
  email: string;
  name: string;
  role?: string;
}

export interface Shipment {
  id: string;
  trackingNumber: string;
  status: ShipmentStatus;
  origin: string;
  destination: string;
  createdAt: string;
  updatedAt: string;
}

export type ShipmentStatus = 'pending' | 'in_transit' | 'delivered' | 'cancelled';

