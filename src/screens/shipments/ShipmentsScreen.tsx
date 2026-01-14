import React, { useEffect } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Header } from '../../components/molecules/Header';
import { ShipmentCard } from '../../components/organisms/ShipmentCard';
import { Text } from '../../components/atoms/Text';
import { colors } from '../../theme/colors';
import { spacing } from '../../theme/spacing';
import { useShipmentService } from '../../services/shipmentService';
import { Shipment } from '../../types/api';

export const ShipmentsScreen: React.FC = () => {
  const { shipments, loading, fetchShipments } = useShipmentService();

  useEffect(() => {
    fetchShipments();
  }, [fetchShipments]);

  const renderShipment = ({ item }: { item: Shipment }) => {
    // Map Shipment API data to ShipmentCard props
    const statusMap: Record<Shipment['status'], string> = {
      pending: 'Pending',
      in_transit: 'In Transit',
      delivered: 'Delivered',
      cancelled: 'Cancelled',
    };
    
    return (
      <ShipmentCard
        name={item.trackingNumber}
        status={statusMap[item.status] || item.status}
        address={item.destination}
        statusText={statusMap[item.status] || item.status}
      />
    );
  };

  const renderEmpty = () => (
    <View style={styles.emptyContainer}>
      <Text variant="body" style={styles.emptyText}>
        No shipments found
      </Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <Header title="Shipments" />
      <FlatList
        data={shipments}
        renderItem={renderShipment}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
        ListEmptyComponent={!loading ? renderEmpty : null}
        refreshing={loading}
        onRefresh={fetchShipments}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.surface,
  },
  listContent: {
    padding: spacing.md,
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


