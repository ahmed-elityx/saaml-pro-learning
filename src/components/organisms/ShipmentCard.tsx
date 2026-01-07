import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Text } from '../atoms/Text';
import { InfoSmallCard } from '../molecules/InfoSmallCard';
import { colors } from '../../theme/colors';
import { spacing } from '../../theme/spacing';

interface ShipmentCardProps {
  name?: string;
  status?: string;
  codAmount?: string;
  phoneNumber?: string;
  address?: string;
  boxes?: number;
  statusText?: string;
  time?: string;
  onCallPress?: () => void;
  onMessagePress?: () => void;
  onDirectionPress?: () => void;
  onPress?: () => void;
}

export const ShipmentCard: React.FC<ShipmentCardProps> = ({
  name = 'Tariq Ilyas',
  status = 'Delayed',
  codAmount = 'COD SAR 20',
  phoneNumber = '+966 2532565',
  address = 'Al Muhammadiyah Dist, 4335 - 23618',
  boxes = 2,
  statusText = 'Scheduled',
  time = '2:00 PM',
  onCallPress,
  onMessagePress,
  onDirectionPress,
  onPress,
}) => {
  // Phone Icon
  const PhoneIcon = () => (
    <View style={styles.phoneIcon}>
      <View style={styles.phoneBody} />
      <View style={styles.phoneHandle} />
    </View>
  );

  // Location Icon
  const LocationIcon = () => (
    <View style={styles.locationIcon}>
      <View style={styles.locationPin}>
        <View style={styles.locationDot} />
      </View>
    </View>
  );

  // Box Icon
  const BoxIcon = () => (
    <View style={styles.boxIcon}>
      <View style={styles.boxTop} />
      <View style={styles.boxFront} />
    </View>
  );

  // Clock Icon
  const ClockIcon = () => (
    <View style={styles.clockIcon}>
      <View style={styles.clockCircle} />
      <View style={styles.clockCenter} />
      <View style={styles.clockHour} />
      <View style={styles.clockMinute} />
    </View>
  );

  // Call Icon
  const CallIcon = () => (
    <View style={styles.callIcon}>
      <View style={styles.callBody} />
      <View style={styles.callHandle} />
    </View>
  );

  // Message Icon
  const MessageIcon = () => (
    <View style={styles.messageIcon}>
      <View style={styles.messageBubble} />
      <View style={styles.messageDot} />
    </View>
  );

  // Direction Icon
  const DirectionIcon = () => (
    <View style={styles.directionIcon}>
      <View style={styles.directionArrow} />
    </View>
  );

  const content = (
    <View style={styles.container}>
      <View style={styles.redBar} />
      <View style={styles.content}>
        <View style={styles.leftColumn}>
          <View style={styles.nameRow}>
            <Text style={styles.name}>{name}</Text>
            <View style={styles.badgesRow}>
              <View style={styles.delayedBadge}>
                <Text style={styles.delayedText}>{status}</Text>
              </View>
              <View style={styles.codBadge}>
                <Text style={styles.codText}>{codAmount}</Text>
              </View>
            </View>
          </View>

          <View style={styles.infoRow}>
            <PhoneIcon />
            <Text style={styles.infoText}>{phoneNumber}</Text>
          </View>

          <View style={styles.infoRow}>
            <LocationIcon />
            <Text style={styles.infoText}>{address}</Text>
          </View>

          <View style={styles.divider} />

          <View style={styles.smallCardsRow}>
            <InfoSmallCard
            label='Boxes'
              icon={<BoxIcon />}
              value={boxes}
              valueColor={colors.primary}
            />
            <InfoSmallCard
              icon={<ClockIcon />}
              label="Status"
              value={statusText}
            />
            <InfoSmallCard label="Time" value={time} valueColor="#FF9500" />
          </View>
        </View>

        <View style={styles.rightColumn}>
          <TouchableOpacity
            style={styles.actionButton}
            onPress={onCallPress}
            activeOpacity={0.7}>
            <View style={styles.buttonHighlight} />
            <CallIcon />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.actionButton}
            onPress={onMessagePress}
            activeOpacity={0.7}>
            <View style={styles.buttonHighlight} />
            <MessageIcon />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.actionButton}
            onPress={onDirectionPress}
            activeOpacity={0.7}>
            <View style={styles.buttonHighlight} />
            <DirectionIcon />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  if (onPress) {
    return (
      <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
        {content}
      </TouchableOpacity>
    );
  }

  return content;
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 155,
    backgroundColor: '#EBEFEF',
    borderRadius: 10,
    overflow: 'hidden',
    flexDirection: 'row',
  },
  redBar: {
    width: 4,
    height: 155,
    backgroundColor: '#FB2C36',
    position: 'relative',
    right: 0,
  },
  content: {
    flex: 1,
    flexDirection: 'row',
    padding: spacing.md,
    paddingRight: spacing.md + 4, // Account for red bar
  },
  leftColumn: {
    flex: 1,
    marginRight: spacing.sm,
  },
  nameRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.xs,
  },
  name: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.text,
    marginRight: spacing.sm,
    lineHeight: 24,
  },
  badgesRow: {
    flexDirection: 'row',
  },
  delayedBadge: {
    backgroundColor: '#FB2C36',
    width: 55,
    height: 19,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 2,
  },
  delayedText: {
    color: colors.white,
    fontSize: 10,
    fontWeight: '400',
    lineHeight: 15,
  },
  codBadge: {
    backgroundColor: '#D4EDDA',
    width: 77,
    height: 20,
    borderRadius: 4,
    paddingTop: 4,
    paddingRight: 6,
    paddingLeft: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  codText: {
    color: '#28A745',
    fontSize: 11,
    fontWeight: '700',
    lineHeight: 16.5,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.xs,
  },
  infoText: {
    fontSize: 12,
    color: colors.text,
    marginLeft: spacing.xs,
    flex: 1,
    lineHeight:16.5
  },
  divider: {
    width: 187,
    height: 1,
    backgroundColor: '#E5E7EB',
    marginVertical: spacing.sm,
  },
  smallCardsRow: {
    flexDirection: 'row',
    marginTop: spacing.sm,
    gap: spacing.sm,
  },
  rightColumn: {
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: spacing.xs,
  },
  actionButton: {
    width: 39,
    height: 39,
    borderRadius: 26843500,
    backgroundColor: '#F3F4F6',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: spacing.xs,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.15,
    shadowRadius: 3,
    elevation: 3,
    overflow: 'hidden',
    position: 'relative',
  },
  buttonHighlight: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: 18,
    height: 18,
    borderTopRightRadius: 18,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    shadowColor: '#FFFFFF',
    shadowOffset: {
      width: -2,
      height: -2,
    },
    shadowOpacity: 0.6,
    shadowRadius: 2,
  },
  // Icon Styles
  phoneIcon: {
    width: 16,
    height: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  phoneBody: {
    width: 12,
    height: 14,
    borderWidth: 1.5,
    borderColor: colors.textSecondary,
    borderRadius: 2,
  },
  phoneHandle: {
    width: 3,
    height: 2,
    borderWidth: 1.5,
    borderColor: colors.textSecondary,
    borderLeftWidth: 0,
    borderTopRightRadius: 2,
    borderBottomRightRadius: 2,
    marginLeft: -1,
  },
  locationIcon: {
    width: 16,
    height: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  locationPin: {
    width: 12,
    height: 12,
    borderWidth: 1.5,
    borderColor: colors.textSecondary,
    borderRadius: 6,
    backgroundColor: 'transparent',
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
  locationDot: {
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: colors.textSecondary,
    position: 'absolute',
    bottom: 1,
  },
  boxIcon: {
    width: 12,
    height: 12,
    position: 'relative',
  },
  boxTop: {
    position: 'absolute',
    top: 0,
    left: 2,
    width: 8,
    height: 4,
    backgroundColor: colors.primary,
    borderWidth: 1,
    borderColor: colors.primary,
    borderBottomWidth: 0,
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
  },
  boxFront: {
    position: 'absolute',
    top: 3,
    left: 0,
    width: 10,
    height: 9,
    backgroundColor: colors.primary,
    borderWidth: 1,
    borderColor: colors.primary,
    borderRadius: 1,
  },
  clockIcon: {
    width: 12,
    height: 12,
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
  clockCircle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: colors.textSecondary,
    backgroundColor: 'transparent',
  },
  clockCenter: {
    position: 'absolute',
    width: 1.5,
    height: 1.5,
    borderRadius: 0.75,
    backgroundColor: colors.textSecondary,
  },
  clockHour: {
    position: 'absolute',
    width: 1,
    height: 2,
    backgroundColor: colors.textSecondary,
    top: 3,
    left: 5,
  },
  clockMinute: {
    position: 'absolute',
    width: 1,
    height: 3,
    backgroundColor: colors.textSecondary,
    top: 2,
    left: 5,
    transform: [{ rotate: '45deg' }],
  },
  callIcon: {
    width: 18,
    height: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },
  callBody: {
    width: 14,
    height: 16,
    borderWidth: 1.5,
    borderColor: colors.primary,
    borderRadius: 2,
  },
  callHandle: {
    width: 4,
    height: 2,
    borderWidth: 1.5,
    borderColor: colors.primary,
    borderLeftWidth: 0,
    borderTopRightRadius: 2,
    borderBottomRightRadius: 2,
    marginLeft: -1,
  },
  messageIcon: {
    width: 18,
    height: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },
  messageBubble: {
    width: 14,
    height: 12,
    borderWidth: 1.5,
    borderColor: colors.success,
    borderRadius: 2,
    borderBottomRightRadius: 0,
  },
  messageDot: {
    position: 'absolute',
    bottom: 2,
    right: 2,
    width: 2,
    height: 2,
    borderRadius: 1,
    backgroundColor: colors.success,
  },
  directionIcon: {
    width: 18,
    height: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },
  directionArrow: {
    width: 0,
    height: 0,
    borderLeftWidth: 4,
    borderRightWidth: 4,
    borderBottomWidth: 8,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: '#5856D6',
  },
});
