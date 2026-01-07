import React from 'react';
import { View, StyleSheet } from 'react-native';
import { colors } from '../../theme/colors';

interface EyeIconProps {
  visible: boolean;
  size?: number;
}

export const EyeIcon: React.FC<EyeIconProps> = ({ visible, size = 20 }) => {
  const iconSize = size;
  const borderWidth = 1.5;
  const pupilSize = iconSize * 0.35;

  if (visible) {
    // Eye open icon - shows an eye with a pupil
    return (
      <View style={[styles.container, { width: iconSize, height: iconSize }]}>
        <View
          style={[
            styles.eyeOpen,
            {
              width: iconSize,
              height: iconSize * 0.6,
              borderWidth: borderWidth,
            },
          ]}>
          <View
            style={[
              styles.pupil,
              {
                width: pupilSize,
                height: pupilSize,
              },
            ]}
          />
        </View>
      </View>
    );
  } else {
    // Eye closed icon - shows an eye with a diagonal slash
    return (
      <View style={[styles.container, { width: iconSize, height: iconSize }]}>
        <View
          style={[
            styles.eyeClosed,
            {
              width: iconSize,
              height: iconSize * 0.6,
              borderWidth: borderWidth,
            },
          ]}>
          <View
            style={[
              styles.slash,
              {
                width: iconSize * 0.9,
                height: borderWidth,
              },
            ]}
          />
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 2,
  },
  eyeOpen: {
    borderRadius: 50,
    borderColor: colors.textSecondary,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  pupil: {
    borderRadius: 50,
    backgroundColor: colors.textSecondary,
  },
  eyeClosed: {
    borderRadius: 50,
    borderColor: colors.textSecondary,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  slash: {
    backgroundColor: colors.textSecondary,
    transform: [{ rotate: '45deg' }],
    position: 'absolute',
  },
});

