import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Header } from '../../components/molecules/Header';
import { Text } from '../../components/atoms/Text';
import { colors } from '../../theme/colors';
import { spacing } from '../../theme/spacing';

export const ProfileScreen: React.FC = () => {
  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <Header title="Profile" />
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.emptyContainer}>
          <Text variant="body" style={styles.emptyText}>
            Profile information will be displayed here
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.surface,
  },
  content: {
    padding: spacing.md,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: spacing.xxl,
  },
  emptyText: {
    color: colors.textSecondary,
  },
});


