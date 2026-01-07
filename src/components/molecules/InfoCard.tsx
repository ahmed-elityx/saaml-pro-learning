import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Text } from '../atoms/Text';
import { colors } from '../../theme/colors';
import { spacing } from '../../theme/spacing';

interface InfoCardProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  onPress?: () => void;
}

export const InfoCard: React.FC<InfoCardProps> = ({
  icon,
  label,
  value,
  onPress,
}) => {
  const content = (
    <View style={styles.container}>
      <View style={styles.iconContainer}>{icon}</View>
      <View style={styles.textContainer}>
        <Text variant="caption" style={styles.label}>
          {label}
        </Text>
        <Text variant="body" style={styles.value}>
          {value}
        </Text>
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
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#EAEFEF',
    borderRadius: 10,
    borderWidth: 0.8,
    borderColor: '#D0D5D5',
    padding: spacing.xs,
    width: '100%',
    height: 43.087501525878906,
    justifyContent: 'flex-start',
  },
  iconContainer: {
    marginRight: spacing.xs,
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    flex: 1,
  },
  label: {
    color: colors.textSecondary,
    marginBottom: 2,
    textTransform: 'uppercase',
    fontSize: 9,
    fontWeight: '700',
    lineHeight: 13.5


  },
  value: {
    color: colors.text,
    fontSize: 12,
    lineHeight: 16,
    fontWeight:400
  },
});

