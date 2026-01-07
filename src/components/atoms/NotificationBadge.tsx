import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { colors } from '../../theme/colors';

interface NotificationBadgeProps {
  count: number;
  size?: number;
}

export const NotificationBadge: React.FC<NotificationBadgeProps> = ({
  count,
  size = 20,
}) => {
  if (count === 0) return null;

  return (
    <View
      style={[
        styles.badge,
        {
          width: size,
          height: size,
          borderRadius: size / 2,
        },
      ]}>
      <Text style={styles.text}>{count > 99 ? '99+' : count}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  badge: {
    backgroundColor: '#4A90E2',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: -5,
    right: -5,
    minWidth: 20,
    paddingHorizontal: 4,
  },
  text: {
    color: colors.white,
    fontSize: 10,
    fontWeight: '600',
  },
});

