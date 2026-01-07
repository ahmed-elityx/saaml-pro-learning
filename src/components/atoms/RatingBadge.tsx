import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { spacing } from '../../theme/spacing';
import { colors } from '../../theme/colors';

interface RatingBadgeProps {
  rating: number;
}

export const RatingBadge: React.FC<RatingBadgeProps> = ({ rating }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.star}>★</Text>
      <Text style={styles.rating}>{rating}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFB900',
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xs,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.white,
  },
  star: {
    fontSize: 14,
    marginRight: spacing.xs,
    color: colors.white,
  },
  rating: {
    fontSize: 12,
    fontWeight: '600',
    color: colors.white,
  },
});
