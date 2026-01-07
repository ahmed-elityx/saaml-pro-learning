import React from 'react';
import { View, Image, StyleSheet, ImageSourcePropType } from 'react-native';
import { colors } from '../../theme/colors';

interface ProfilePictureProps {
  source?: ImageSourcePropType;
  size?: number;
  badge?: React.ReactNode;
}

export const ProfilePicture: React.FC<ProfilePictureProps> = ({
  source,
  size = 80,
  badge,
}) => {
  const DefaultAvatar = () => (
    <View
      style={[
        styles.defaultAvatar,
        {
          width: size,
          height: size,
          borderRadius: size / 2,
          backgroundColor: colors.surface,
        },
      ]}>
      <View style={styles.defaultIcon}>
        <View style={styles.defaultHead} />
        <View style={styles.defaultBody} />
      </View>
    </View>
  );

  return (
    <View style={[styles.container, { width: size, height: size }]}>
      {source ? (
        <Image
          source={source}
          style={[styles.image, { width: size, height: size, borderRadius: size / 2 }]}
        />
      ) : (
        <DefaultAvatar />
      )}
      {badge && <View style={styles.badgeContainer}>{badge}</View>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },
  image: {
    resizeMode: 'cover',
  },
  badgeContainer: {
    position: 'absolute',
    bottom: -5,
    left: -5,
  },
  defaultAvatar: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: colors.border,
  },
  defaultIcon: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  defaultHead: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: colors.textSecondary,
    marginBottom: 4,
  },
  defaultBody: {
    width: 32,
    height: 20,
    backgroundColor: colors.textSecondary,
    borderRadius: 8,
  },
});

