import React from 'react';
import { View, StyleSheet } from 'react-native';
import { TabBarItem } from '../molecules/TabBarItem';
import { colors } from '../../theme/colors';
import { spacing } from '../../theme/spacing';

interface TabBarProps {
  state: any;
  descriptors: any;
  navigation: any;
}

export const TabBar: React.FC<TabBarProps> = ({
  state,
  descriptors,
  navigation,
}) => {
  return (
    <View style={styles.container}>
      {state.routes.map((route: any, index: number) => {
        const { options } = descriptors[route.key];
        const label = options.tabBarLabel || options.title || route.name;
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const iconMap: Record<string, 'home' | 'history' | 'shipments' | 'wallet' | 'profile'> = {
          Home: 'home',
          History: 'history',
          Shipments: 'shipments',
          Wallet: 'wallet',
          Profile: 'profile',
        };

        // Handle nested navigators (Home is a stack)
        const iconName = iconMap[route.name] || 'home';

        return (
          <TabBarItem
            key={route.key}
            iconName={iconName}
            label={label.toLowerCase()}
            focused={isFocused}
            onPress={onPress}
          />
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#EAEFEF',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    paddingTop: spacing.sm,
    paddingBottom: spacing.sm,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: -2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 8,
    minHeight: 60,
  },
});

