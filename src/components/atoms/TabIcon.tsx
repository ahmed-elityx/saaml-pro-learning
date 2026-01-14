import React from 'react';
import { View, StyleSheet } from 'react-native';
import { colors } from '../../theme/colors';

interface TabIconProps {
  name: 'home' | 'history' | 'shipments' | 'wallet' | 'profile';
  focused: boolean;
  size?: number;
}

export const TabIcon: React.FC<TabIconProps> = ({
  name,
  focused,
  size = 24,
}) => {
  const iconColor = focused ? '#00B4B9' : colors.textSecondary;

  const renderIcon = () => {
    switch (name) {
      case 'home':
        return <HomeIcon size={size} color={iconColor} />;
      case 'history':
        return <HistoryIcon size={size} color={iconColor} />;
      case 'shipments':
        return <ShipmentsIcon size={size} color={iconColor} />;
      case 'wallet':
        return <WalletIcon size={size} color={iconColor} />;
      case 'profile':
        return <ProfileIcon size={size} color={iconColor} />;
      default:
        return null;
    }
  };

  return <View style={styles.container}>{renderIcon()}</View>;
};

// Home Icon (house outline with door)
const HomeIcon: React.FC<{ size: number; color: string }> = ({ size, color }) => (
  <View style={[styles.iconContainer, { width: size, height: size }]}>
    <View
      style={[
        styles.houseRoof,
        {
          width: size * 0.7,
          height: size * 0.35,
          borderColor: color,
        },
      ]}
    />
    <View
      style={[
        styles.houseBody,
        {
          width: size * 0.7,
          height: size * 0.5,
          borderColor: color,
        },
      ]}>
      <View
        style={[
          styles.door,
          {
            width: size * 0.25,
            height: size * 0.3,
            backgroundColor: color,
          },
        ]}
      />
    </View>
  </View>
);

// History Icon (clipboard outline)
const HistoryIcon: React.FC<{ size: number; color: string }> = ({ size, color }) => (
  <View style={[styles.iconContainer, { width: size, height: size }]}>
    <View
      style={[
        styles.clipboard,
        {
          width: size * 0.6,
          height: size * 0.8,
          borderColor: color,
        },
      ]}>
      <View
        style={[
          styles.clipboardTop,
          {
            width: size * 0.3,
            height: size * 0.15,
            borderColor: color,
          },
        ]}
      />
    </View>
  </View>
);

// Shipments Icon (2x2 grid of squares)
const ShipmentsIcon: React.FC<{ size: number; color: string }> = ({ size, color }) => (
  <View style={[styles.iconContainer, { width: size, height: size }]}>
    <View style={styles.grid}>
      <View style={[styles.gridItem, { width: size * 0.4, height: size * 0.4, backgroundColor: color }]} />
      <View style={[styles.gridItem, { width: size * 0.4, height: size * 0.4, backgroundColor: color }]} />
      <View style={[styles.gridItem, { width: size * 0.4, height: size * 0.4, backgroundColor: color }]} />
      <View style={[styles.gridItem, { width: size * 0.4, height: size * 0.4, backgroundColor: color }]} />
    </View>
  </View>
);

// Wallet Icon (credit card/wallet outline)
const WalletIcon: React.FC<{ size: number; color: string }> = ({ size, color }) => (
  <View style={[styles.iconContainer, { width: size, height: size }]}>
    <View
      style={[
        styles.wallet,
        {
          width: size * 0.7,
          height: size * 0.5,
          borderColor: color,
        },
      ]}>
      <View
        style={[
          styles.walletLine,
          {
            width: size * 0.5,
            backgroundColor: color,
          },
        ]}
      />
    </View>
  </View>
);

// Profile Icon (person head and shoulders)
const ProfileIcon: React.FC<{ size: number; color: string }> = ({ size, color }) => (
  <View style={[styles.iconContainer, { width: size, height: size }]}>
    <View
      style={[
        styles.head,
        {
          width: size * 0.4,
          height: size * 0.4,
          borderColor: color,
        },
      ]}
    />
    <View
      style={[
        styles.shoulders,
        {
          width: size * 0.6,
          height: size * 0.3,
          borderColor: color,
        },
      ]}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  // Home Icon Styles
  houseRoof: {
    borderTopWidth: 2,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderBottomWidth: 0,
    alignSelf: 'center',
    transform: [{ rotate: '45deg' }],
    marginBottom: -2,
  },
  houseBody: {
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  door: {
    marginTop: 4,
  },
  // History Icon Styles
  clipboard: {
    borderWidth: 2,
    borderRadius: 2,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 2,
  },
  clipboardTop: {
    borderWidth: 2,
    borderRadius: 1,
  },
  // Shipments Icon Styles
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
    height: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  gridItem: {
    margin: 1,
  },
  // Wallet Icon Styles
  wallet: {
    borderWidth: 2,
    borderRadius: 4,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 4,
  },
  walletLine: {
    marginTop: 2,
    height: 1,
  },
  // Profile Icon Styles
  head: {
    borderWidth: 2,
    borderRadius: 50,
    alignSelf: 'center',
    marginBottom: -2,
  },
  shoulders: {
    borderWidth: 2,
    borderTopWidth: 0,
    borderRadius: 20,
    alignSelf: 'center',
  },
});


