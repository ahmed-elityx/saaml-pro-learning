import React from 'react';
import { View, StyleSheet, TextStyle } from 'react-native';
import { Text } from '../atoms/Text';
import { colors } from '../../theme/colors';

interface InfoSmallCardProps {
  icon?: React.ReactNode;
  label?: string;
  value: string | number;
  valueColor?: string;
}

export const InfoSmallCard: React.FC<InfoSmallCardProps> = ({
  icon,
  label,
  value,
  valueColor,
}) => {
  const valueStyle: TextStyle = valueColor
    ? { ...styles.value, color: valueColor }
    : styles.value;

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <View style={styles.iconLabelRow}>
          {icon && <View style={styles.iconContainer}>{icon}</View>}
          {label && <Text style={styles.label}>{label}</Text>}
        </View>
        <Text style={valueStyle}>{value}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 76.75,
    height: 40,
    backgroundColor: '#F8F8F8',
    borderRadius: 4,
    paddingTop: 4,
    paddingRight: 6,
    paddingLeft: 6,
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 2,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 4,
  },
  textContainer: {
    flex: 1,
     justifyContent: 'center',
  },
  iconLabelRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 2,
  },
  iconContainer: {
    marginRight: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    fontSize: 9,
    fontWeight: '400',
    color: colors.textSecondary,
    lineHeight: 13.5,
  },
  value: {
    fontSize: 9,
    fontWeight: '700',
    color: colors.text,
    lineHeight: 13.5,
  },
});

