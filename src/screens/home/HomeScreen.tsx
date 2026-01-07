import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ProfileHeader } from '../../components/organisms/ProfileHeader';
import { SmallCard } from '../../components/molecules/SmallCard';
import { ShipmentCard } from '../../components/organisms/ShipmentCard';
import { colors } from '../../theme/colors';
import { spacing } from '../../theme/spacing';

export const HomeScreen: React.FC = () => {
  const handleNotificationPress = () => {
    // Handle notification press
    console.log('Notification pressed');
  };

  // Box icon for Active Shipment
  const BoxIcon = () => (
    <View style={styles.boxIcon}>
      <View style={styles.boxTop} />
      <View style={styles.boxFront} />
    </View>
  );

  // Clock icon with checkmark for Completed Today
  const ClockIcon = () => (
    <View style={styles.clockIcon}>
      <View style={styles.clockCircle} />
      <View style={styles.clockCenter} />
      <View style={styles.clockHour} />
      <View style={styles.clockMinute} />
      <View style={styles.checkmark} />
    </View>
  );

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <ProfileHeader
        userName="Ahmed Meer"
        rating={4.8}
        status="online"
        notificationCount={12}
        id="0213215"
        phone="+966 2525325"
        commission="500 SR"
        codBalance="80 SR"
        onNotificationPress={handleNotificationPress}
      />
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}>
        <View style={styles.cardsRow}>
          <SmallCard
            icon={<BoxIcon />}
            text="Active Shipment"
            value="5"
          />
          <SmallCard
            icon={<ClockIcon />}
            text="Completed Today"
            value="3"
          />
        </View>
        <View style={styles.shipmentCardContainer}>
          <ShipmentCard />
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
  scrollContent: {
    flexGrow: 1,
    padding: spacing.md,
  },
  shipmentCardContainer: {
    marginTop: spacing.md,
  },
  cardsRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  // Box Icon Styles
  boxIcon: {
    width: 24,
    height: 24,
    position: 'relative',
  },
  boxTop: {
    position: 'absolute',
    top: 0,
    left: 4,
    width: 16,
    height: 8,
    backgroundColor: colors.primary,
    borderWidth: 1.5,
    borderColor: colors.primary,
    borderBottomWidth: 0,
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
  },
  boxFront: {
    position: 'absolute',
    top: 6,
    left: 0,
    width: 20,
    height: 18,
    backgroundColor: colors.primary,
    borderWidth: 1.5,
    borderColor: colors.primary,
    borderRadius: 2,
  },
  // Clock Icon Styles
  clockIcon: {
    width: 24,
    height: 24,
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
  clockCircle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 1.5,
    borderColor: colors.primary,
    backgroundColor: colors.primary,
  },
  clockCenter: {
    position: 'absolute',
    width: 2,
    height: 2,
    borderRadius: 1,
    backgroundColor: colors.white,
  },
  clockHour: {
    position: 'absolute',
    width: 1.5,
    height: 4,
    backgroundColor: colors.white,
    top: 6,
    left: 10,
  },
  clockMinute: {
    position: 'absolute',
    width: 1.5,
    height: 5,
    backgroundColor: colors.white,
    top: 5,
    left: 10,
    transform: [{ rotate: '45deg' }],
  },
  checkmark: {
    position: 'absolute',
    bottom: 3,
    left: 5,
    width: 6,
    height: 3,
    borderRightWidth: 1.5,
    borderBottomWidth: 1.5,
    borderColor: colors.white,
    transform: [{ rotate: '45deg' }],
  },
});

