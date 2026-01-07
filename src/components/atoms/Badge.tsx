import React from 'react';
import { View, StyleSheet } from 'react-native';
import { colors } from '../../theme/colors';

interface BadgeProps {
  children: React.ReactNode;
  color?: string;
  size?: number;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  color = '#FFB900', // Theme color
  size = 32,
}) => {
  return (
    <View
      style={[
        styles.badge,
        {
          width: size,
          height: size,
          backgroundColor: color,
          borderRadius: size / 2,
        },
      ]}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  badge: {
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
});

