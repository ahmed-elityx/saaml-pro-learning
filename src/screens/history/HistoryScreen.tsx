import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Header } from '../../components/molecules/Header';
import { Text } from '../../components/atoms/Text';
import { colors } from '../../theme/colors';
import { spacing } from '../../theme/spacing';

export const HistoryScreen: React.FC = () => {
  const renderEmpty = () => (
    <View style={styles.emptyContainer}>
      <Text variant="body" style={styles.emptyText}>
        No history found
      </Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <Header title="History" />
      <FlatList
        data={[]}
        renderItem={() => null}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={styles.listContent}
        ListEmptyComponent={renderEmpty}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.surface,
  },
  listContent: {
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


