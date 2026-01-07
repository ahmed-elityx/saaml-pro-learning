import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { colors } from '../../theme/colors';
import { spacing } from '../../theme/spacing';

interface StatusBadgeProps {
  status: 'online' | 'offline';
  label?: string;
  onPress?: () => void;
}

export const StatusBadge: React.FC<StatusBadgeProps> = ({
  status,
  label,
  onPress,
}) => {
  const displayLabel = label || status.charAt(0).toUpperCase() + status.slice(1);

  const content = (
    <View style={styles.container}>
      <View
        style={[
          styles.indicator,
          { backgroundColor: status === 'online' ? '#4CAF50' : colors.textSecondary },
        ]}
      />
      <Text style={styles.label}>{displayLabel}</Text>
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
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xs,
    borderRadius: 12,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 4,
  },
  indicator: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginRight: spacing.xs,
  },
  label: {
    fontSize: 12,
    color: colors.text,
    fontWeight: '500',
  },
});

