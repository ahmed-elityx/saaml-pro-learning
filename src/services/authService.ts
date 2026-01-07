import { apiClient } from './api';
import { LoginRequest, LoginResponse, User } from '../types/api';

export const authService = {
  async login(credentials: LoginRequest): Promise<LoginResponse> {
    const response = await apiClient.post<LoginResponse>('/auth/login', credentials);
    if (response.data.token) {
      apiClient.setToken(response.data.token);
    }
    return response.data;
  },

  async register(userData: {
    name: string;
    email: string;
    password: string;
  }): Promise<LoginResponse> {
    const response = await apiClient.post<LoginResponse>('/auth/register', userData);
    if (response.data.token) {
      apiClient.setToken(response.data.token);
    }
    return response.data;
  },

  async logout(): Promise<void> {
    apiClient.setToken(null);
    // TODO: Call logout endpoint if needed
  },

  async getCurrentUser(): Promise<User> {
    const response = await apiClient.get<User>('/auth/me');
    return response.data;
  },

  async refreshToken(): Promise<string> {
    const response = await apiClient.post<{ token: string }>('/auth/refresh');
    if (response.data.token) {
      apiClient.setToken(response.data.token);
    }
    return response.data.token;
  },
};

