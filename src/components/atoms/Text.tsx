import React from 'react';
import { Text as RNText, StyleSheet, TextStyle } from 'react-native';
import { colors } from '../../theme/colors';
import { typography } from '../../theme/typography';

interface TextProps {
  children: React.ReactNode;
  variant?: 'h1' | 'h2' | 'h3' | 'body' | 'bodySmall' | 'caption';
  color?: string;
  style?: TextStyle;
  numberOfLines?: number;
}

export const Text: React.FC<TextProps> = ({
  children,
  variant = 'body',
  color,
  style,
  numberOfLines,
}) => {
  const getTextStyle = () => {
    switch (variant) {
      case 'h1':
        return typography.h1;
      case 'h2':
        return typography.h2;
      case 'h3':
        return typography.h3;
      case 'body':
        return typography.body;
      case 'bodySmall':
        return typography.bodySmall;
      case 'caption':
        return typography.caption;
      default:
        return typography.body;
    }
  };

  return (
    <RNText
      style={[
        getTextStyle(),
        { color: color || colors.text },
        style,
      ]}
      numberOfLines={numberOfLines}>
      {children}
    </RNText>
  );
};

