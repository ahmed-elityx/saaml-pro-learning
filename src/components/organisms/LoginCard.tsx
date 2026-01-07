import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { LoginForm } from '../molecules/LoginForm';
import { Text } from '../atoms/Text';
import { colors } from '../../theme/colors';
import { spacing } from '../../theme/spacing';

interface LoginCardProps {
  onSubmit: (email: string, password: string) => void;
  loading?: boolean;
  onRegisterPress: () => void;
}

export const LoginCard: React.FC<LoginCardProps> = ({
  onSubmit,
  loading = false,
  onRegisterPress,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text variant="h1" style={styles.title}>
          Welcome Back
        </Text>
        <Text variant="body" style={styles.subtitle}>
          Sign in to continue
        </Text>
        <LoginForm onSubmit={onSubmit} loading={loading} />
        <View style={styles.footer}>
          <Text variant="bodySmall" style={styles.footerText}>
            You don't have an account?{' '}
          </Text>
          <TouchableOpacity onPress={onRegisterPress} activeOpacity={0.7}>
            <Text variant="bodySmall" style={styles.linkText}>
              Signup
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: spacing.lg,
  },
  content: {
    backgroundColor: colors.background,
    borderRadius: 12,
    padding: spacing.xl,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  title: {
    textAlign: 'center',
    marginBottom: spacing.sm,
    color: colors.text,
  },
  subtitle: {
    textAlign: 'center',
    marginBottom: spacing.xl,
    color: colors.textSecondary,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: spacing.lg,
  },
  footerText: {
    color: colors.textSecondary,
  },
  linkText: {
    color: colors.primary,
    fontWeight: '600',
  },
});

