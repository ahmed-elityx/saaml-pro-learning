import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { NotificationBadge } from '../atoms/NotificationBadge';
import { colors } from '../../theme/colors';

interface NotificationIconProps {
  count: number;
  onPress?: () => void;
  size?: number;
}

export const NotificationIcon: React.FC<NotificationIconProps> = ({
  count,
  onPress,
  size = 24,
}) => {
  const BellIcon = () => (
    <View
      style={[
        styles.bell,
        {
          width: size,
          height: size,
        },
      ]}>
      <View style={[styles.bellBody, { borderColor: colors.text }]} />
      <View style={[styles.bellClapper, { backgroundColor: colors.text }]} />
    </View>
  );

  const content = (
    <View style={styles.container}>
      <BellIcon />
      <NotificationBadge count={count} />
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
    position: 'relative',
  },
  bell: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  bellBody: {
    width: '70%',
    height: '70%',
    borderWidth: 2,
    borderRadius: 2,
    borderBottomWidth: 0,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  bellClapper: {
    width: 4,
    height: 4,
    borderRadius: 2,
    position: 'absolute',
    bottom: '15%',
  },
});

