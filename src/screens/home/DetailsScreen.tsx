import React, { useEffect, useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRoute, RouteProp } from '@react-navigation/native';
import { Header } from '../../components/molecules/Header';
import { Text } from '../../components/atoms/Text';
import { colors } from '../../theme/colors';
import { spacing } from '../../theme/spacing';
import { HomeStackParamList } from '../../types/navigation';
import { useShipmentService } from '../../services/shipmentService';
import { formatDateTime } from '../../utils/helpers';

type DetailsScreenRouteProp = RouteProp<HomeStackParamList, 'Details'>;

export const DetailsScreen: React.FC = () => {
  const route = useRoute<DetailsScreenRouteProp>();
  const { shipmentId } = route.params;
  const { getShipmentById } = useShipmentService();
  const [shipment, setShipment] = useState(
    getShipmentById(shipmentId) || null
  );

  useEffect(() => {
    const foundShipment = getShipmentById(shipmentId);
    if (foundShipment) {
      setShipment(foundShipment);
    }
  }, [shipmentId, getShipmentById]);

  if (!shipment) {
    return (
      <SafeAreaView style={styles.container} edges={['top']}>
        <Header title="Shipment Details" />
        <View style={styles.emptyContainer}>
          <Text variant="body" style={styles.emptyText}>
            Shipment not found
          </Text>
        </View>
      </SafeAreaView>
    );
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'delivered':
        return colors.success;
      case 'in_transit':
        return colors.primary;
      case 'cancelled':
        return colors.error;
      default:
        return colors.warning;
    }
  };

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <Header title="Shipment Details" />
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.card}>
          <Text variant="h2" style={styles.trackingNumber}>
            {shipment.trackingNumber}
          </Text>
          <View
            style={[
              styles.statusBadge,
              { backgroundColor: getStatusColor(shipment.status) },
            ]}>
            <Text variant="bodySmall" style={styles.statusText}>
              {shipment.status.replace('_', ' ').toUpperCase()}
            </Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text variant="h3" style={styles.sectionTitle}>
            Route Information
          </Text>
          <View style={styles.infoRow}>
            <Text variant="bodySmall" style={styles.label}>
              Origin
            </Text>
            <Text variant="body" style={styles.value}>
              {shipment.origin}
            </Text>
          </View>
          <View style={styles.infoRow}>
            <Text variant="bodySmall" style={styles.label}>
              Destination
            </Text>
            <Text variant="body" style={styles.value}>
              {shipment.destination}
            </Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text variant="h3" style={styles.sectionTitle}>
            Timeline
          </Text>
          <View style={styles.infoRow}>
            <Text variant="bodySmall" style={styles.label}>
              Created At
            </Text>
            <Text variant="body" style={styles.value}>
              {formatDateTime(shipment.createdAt)}
            </Text>
          </View>
          <View style={styles.infoRow}>
            <Text variant="bodySmall" style={styles.label}>
              Last Updated
            </Text>
            <Text variant="body" style={styles.value}>
              {formatDateTime(shipment.updatedAt)}
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.surface,
  },
  content: {
    padding: spacing.md,
  },
  card: {
    backgroundColor: colors.background,
    borderRadius: 12,
    padding: spacing.lg,
    marginBottom: spacing.md,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  trackingNumber: {
    marginBottom: spacing.md,
    color: colors.text,
  },
  statusBadge: {
    alignSelf: 'flex-start',
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    borderRadius: 12,
  },
  statusText: {
    color: colors.white,
    fontWeight: '600',
  },
  section: {
    backgroundColor: colors.background,
    borderRadius: 12,
    padding: spacing.lg,
    marginBottom: spacing.md,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  sectionTitle: {
    marginBottom: spacing.md,
    color: colors.text,
  },
  infoRow: {
    marginBottom: spacing.md,
  },
  label: {
    color: colors.textSecondary,
    marginBottom: spacing.xs,
  },
  value: {
    color: colors.text,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: spacing.xxl,
  },
  emptyText: {
    color: colors.textSecondary,
  },
});

