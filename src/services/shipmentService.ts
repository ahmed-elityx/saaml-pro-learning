import { useState, useCallback } from 'react';
import { apiClient } from './api';
import { Shipment } from '../types/api';

// Mock data for development
const mockShipments: Shipment[] = [
  {
    id: '1',
    trackingNumber: 'TRK001',
    status: 'in_transit',
    origin: 'New York, USA',
    destination: 'Los Angeles, USA',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: '2',
    trackingNumber: 'TRK002',
    status: 'delivered',
    origin: 'London, UK',
    destination: 'Paris, France',
    createdAt: new Date(Date.now() - 86400000).toISOString(),
    updatedAt: new Date(Date.now() - 3600000).toISOString(),
  },
  {
    id: '3',
    trackingNumber: 'TRK003',
    status: 'pending',
    origin: 'Tokyo, Japan',
    destination: 'Seoul, South Korea',
    createdAt: new Date(Date.now() - 172800000).toISOString(),
    updatedAt: new Date(Date.now() - 172800000).toISOString(),
  },
];

export const shipmentService = {
  async getShipments(): Promise<Shipment[]> {
    try {
      const response = await apiClient.get<Shipment[]>('/shipments');
      return response.data;
    } catch (error) {
      // Return mock data for development
      console.warn('API error, using mock data:', error);
      return mockShipments;
    }
  },

  async getShipmentById(id: string): Promise<Shipment | null> {
    try {
      const response = await apiClient.get<Shipment>(`/shipments/${id}`);
      return response.data;
    } catch (error) {
      // Return mock data for development
      console.warn('API error, using mock data:', error);
      return mockShipments.find((s) => s.id === id) || null;
    }
  },

  async createShipment(shipment: Omit<Shipment, 'id' | 'createdAt' | 'updatedAt'>): Promise<Shipment> {
    const response = await apiClient.post<Shipment>('/shipments', shipment);
    return response.data;
  },

  async updateShipment(id: string, updates: Partial<Shipment>): Promise<Shipment> {
    const response = await apiClient.put<Shipment>(`/shipments/${id}`, updates);
    return response.data;
  },

  async deleteShipment(id: string): Promise<void> {
    await apiClient.delete(`/shipments/${id}`);
  },
};

// Custom hook for shipment service
export const useShipmentService = () => {
  const [shipments, setShipments] = useState<Shipment[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchShipments = useCallback(async () => {
    setLoading(true);
    try {
      const data = await shipmentService.getShipments();
      setShipments(data);
    } catch (error) {
      console.error('Error fetching shipments:', error);
    } finally {
      setLoading(false);
    }
  }, []);

  const getShipmentById = useCallback(
    (id: string): Shipment | undefined => {
      return shipments.find((s) => s.id === id);
    },
    [shipments]
  );

  return {
    shipments,
    loading,
    fetchShipments,
    getShipmentById,
  };
};

