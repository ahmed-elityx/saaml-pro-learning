import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Text } from '../atoms/Text';
import { colors } from '../../theme/colors';
import { spacing } from '../../theme/spacing';

interface HeaderProps {
  title: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  onLeftIconPress?: () => void;
  onRightIconPress?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  title,
  leftIcon,
  rightIcon,
  onLeftIconPress,
  onRightIconPress,
}) => {
  return (
    <View style={styles.container}>
      {leftIcon && (
        <TouchableOpacity
          onPress={onLeftIconPress}
          style={styles.iconContainer}>
          {leftIcon}
        </TouchableOpacity>
      )}
      <View style={styles.titleContainer}>
        <Text variant="h3" style={styles.title}>
          {title}
        </Text>
      </View>
      {rightIcon && (
        <TouchableOpacity
          onPress={onRightIconPress}
          style={styles.iconContainer}>
          {rightIcon}
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.md,
    backgroundColor: colors.background,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  iconContainer: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleContainer: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    color: colors.text,
  },
});

