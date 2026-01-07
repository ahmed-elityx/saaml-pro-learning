import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Text } from '../atoms/Text';
import { colors } from '../../theme/colors';
import { spacing } from '../../theme/spacing';

interface SmallCardProps {
  icon?: React.ReactNode;
  text: string;
  value: string | number;
  onPress?: () => void;
}

export const SmallCard: React.FC<SmallCardProps> = ({
  icon,
  text,
  value,
  onPress,
}) => {
  const content = (
    <View style={styles.container}>
      {icon && (
        <View style={styles.iconContainer}>
          {icon}
        </View>
      )}
      <View style={styles.textContainer}>
        <Text style={styles.text}>{text}</Text>
        <Text style={styles.value}>{value}</Text>
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
    width: 159,
    height: 52,
    paddingHorizontal: spacing.md,
    backgroundColor: '#EBEFEF',
    borderRadius: 5,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 4,
    marginHorizontal: spacing.sm,
  },
  iconContainer: {
    width: 10,
    height: 10,
    borderRadius: 8,
    backgroundColor: 'rgba(235, 239, 239, 0.2)', // #EBEFEF33
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: spacing.sm,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 12, // 100% of fontSize
    color: colors.text,
    marginBottom: 2,
  },
  value: {
    fontSize: 18,
    fontWeight: '700',
    lineHeight: 22,
    color: colors.text,
    textAlign:'center'
  },
});

