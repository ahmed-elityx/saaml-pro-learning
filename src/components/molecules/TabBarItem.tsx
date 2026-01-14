import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { TabIcon } from '../atoms/TabIcon';
import { Text } from '../atoms/Text';
import { colors } from '../../theme/colors';

interface TabBarItemProps {
  iconName: 'home' | 'history' | 'shipments' | 'wallet' | 'profile';
  label: string;
  focused: boolean;
  onPress: () => void;
}

export const TabBarItem: React.FC<TabBarItemProps> = ({
  iconName,
  label,
  focused,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      activeOpacity={0.7}>
      <TabIcon name={iconName} focused={focused} size={24} />
      <Text
        variant="caption"
        style={focused ? [styles.label, styles.labelFocused] : styles.label}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 8,
  },
  label: {
    marginTop: 4,
    color: colors.textSecondary,
    fontSize: 11,
  },
  labelFocused: {
    color: '#00B4B9',
  },
});


