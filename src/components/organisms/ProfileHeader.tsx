import React from 'react';
import { View, StyleSheet } from 'react-native';
import { ProfilePicture } from '../atoms/ProfilePicture';
import { Badge } from '../atoms/Badge';
import { RatingBadge } from '../atoms/RatingBadge';
import { StatusBadge } from '../atoms/StatusBadge';
import { NotificationIcon } from '../molecules/NotificationIcon';
import { InfoCard } from '../molecules/InfoCard';
import { Text } from '../atoms/Text';
import { colors } from '../../theme/colors';
import { spacing } from '../../theme/spacing';

interface ProfileHeaderProps {
  userName: string;
  profileImage?: any;
  rating?: number;
  status?: 'online' | 'offline';
  notificationCount?: number;
  id?: string;
  phone?: string;
  commission?: string;
  codBalance?: string;
  onNotificationPress?: () => void;
}

export const ProfileHeader: React.FC<ProfileHeaderProps> = ({
  userName = 'Ahmed Meer',
  profileImage,
  rating = 4.8,
  status: initialStatus = 'online',
  notificationCount = 12,
  id = '0213215',
  phone = '+966 2525325',
  commission = '500 SR',
  codBalance = '80 SR',
  onNotificationPress,
}) => {
  const [status, setStatus] = React.useState<'online' | 'offline'>(initialStatus);

  const toggleStatus = () => {
    setStatus((prev) => (prev === 'online' ? 'offline' : 'online'));
  };
  // Icon components
  const PersonIcon = () => (
    <View style={styles.icon}>
      <View style={styles.personHead} />
      <View style={styles.personBody} />
    </View>
  );

  const PhoneIcon = () => (
    <View style={styles.phoneIcon}>
      <View style={styles.phoneBody} />
      <View style={styles.phoneHandle} />
    </View>
  );

  const CommissionIcon = () => (
    <View style={styles.icon}>
      <View style={styles.personHead} />
      <View style={styles.personBody}>
        <View style={styles.checkmark} />
      </View>
    </View>
  );

  const CodIcon = () => (
    <View style={styles.icon}>
      <View style={styles.personHead} />
      <View style={styles.personBody}>
        <View style={styles.minus} />
      </View>
    </View>
  );

  const GoldBadgeIcon = () => (
    <View style={styles.goldBadge}>
      <View style={styles.ribbon} />
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.headerTop}>
        <View style={styles.profileColumn}>
          <ProfilePicture
            source={profileImage}
            size={80}
            badge={<Badge>{<GoldBadgeIcon />}</Badge>}
          />
          <View style={styles.badgeWrapper}>
            <RatingBadge rating={rating} />
          </View>
          <View style={styles.badgeWrapper}>
            <StatusBadge status={status} onPress={toggleStatus} />
          </View>
        </View>

        <View style={styles.rightSection}>
          <View style={styles.nameRow}>
            <Text variant="h2" style={styles.userName}>
              {userName}
            </Text>
            <NotificationIcon
              count={notificationCount}
              onPress={onNotificationPress}
            />
          </View>

          <View style={styles.infoCards}>
            <View style={styles.cardRow}>
              <View style={styles.cardWrapper}>
                <InfoCard icon={<PersonIcon />} label="ID" value={id} />
              </View>
              <View style={styles.cardWrapper}>
                <InfoCard icon={<PhoneIcon />} label="PHONE" value={phone} />
              </View>
            </View>
            <View style={styles.cardRow}>
              <View style={styles.cardWrapper}>
                <InfoCard
                  icon={<CommissionIcon />}
                  label="My Commission"
                  value={commission}
                />
              </View>
              <View style={styles.cardWrapper}>
                <InfoCard icon={<CodIcon />} label="COD Balance" value={codBalance} />
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#EAEFEF',
    padding: spacing.md,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    height: 186,
    overflow: 'hidden',
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 8,
  },
  headerTop: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  profileColumn: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginRight: spacing.md,
  },
  badgeWrapper: {
    marginTop: spacing.sm,
  },
  rightSection: {
    flex: 1,
    flexDirection: 'column',
  },
  nameRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: spacing.md,
  },
  userName: {
    color: colors.text,
    flex: 1,
    fontSize:15,
    fontWeight:700,
    lineHeight:28
  },
  infoCards: {
    flexDirection: 'column',
  },
  cardRow: {
    flexDirection: 'row',
    marginBottom: spacing.sm,
    justifyContent: 'space-between',
    paddingHorizontal: 4,
  },
  cardWrapper: {
    flex: 1,
    marginHorizontal: 4,
    marginVertical: 3
  },
  // Icon Styles
  icon: {
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  personHead: {
    width: 12,
    height: 12,
    borderRadius: 6,
    borderWidth: 1.5,
    borderColor: colors.textSecondary,
    alignSelf: 'center',
    marginBottom: 2,
  },
  personBody: {
    width: 16,
    height: 10,
    borderWidth: 1.5,
    borderColor: colors.textSecondary,
    borderTopWidth: 0,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderRadius: 8,
    alignSelf: 'center',
    position: 'relative',
  },
  checkmark: {
    position: 'absolute',
    right: -4,
    top: 2,
    width: 6,
    height: 3,
    borderRightWidth: 1.5,
    borderBottomWidth: 1.5,
    borderColor: colors.primary,
    transform: [{ rotate: '45deg' }],
  },
  minus: {
    position: 'absolute',
    right: -2,
    top: 4,
    width: 4,
    height: 1.5,
    backgroundColor: colors.error,
  },
  phoneIcon: {
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  phoneBody: {
    width: 14,
    height: 16,
    borderWidth: 1.5,
    borderColor: colors.textSecondary,
    borderRadius: 2,
  },
  phoneHandle: {
    width: 4,
    height: 2,
    borderWidth: 1.5,
    borderColor: colors.textSecondary,
    borderLeftWidth: 0,
    borderTopRightRadius: 2,
    borderBottomRightRadius: 2,
    marginLeft: -1,
  },
  goldBadge: {
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ribbon: {
    width: 12,
    height: 8,
    borderWidth: 1.5,
    borderColor: colors.white,
    borderRadius: 2,
  },
});

