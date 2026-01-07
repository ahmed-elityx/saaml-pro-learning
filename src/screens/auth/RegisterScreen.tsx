import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Input } from '../../components/atoms/Input';
import { Button } from '../../components/atoms/Button';
import { Text } from '../../components/atoms/Text';
import { EyeIcon } from '../../components/atoms/EyeIcon';
import { colors } from '../../theme/colors';
import { spacing } from '../../theme/spacing';
import { validateEmail, validatePassword } from '../../utils/validators';
import { AuthStackParamList } from '../../types/navigation';

type RegisterScreenNavigationProp = StackNavigationProp<AuthStackParamList>;

export const RegisterScreen: React.FC = () => {
  const navigation = useNavigation<RegisterScreenNavigationProp>();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!validateEmail(email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!validatePassword(password)) {
      newErrors.password = 'Password must be at least 8 characters';
    }

    if (password !== confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleRegister = () => {
    if (validate()) {
      setLoading(true);
      // TODO: Implement registration logic
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
  };

  return (
    <SafeAreaView style={styles.container} edges={['top', 'bottom']}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.keyboardView}>
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          keyboardShouldPersistTaps="handled">
          <View style={styles.content}>
            <Text variant="h1" style={styles.title}>
              Create Account
            </Text>
            <Text variant="body" style={styles.subtitle}>
              Sign up to get started
            </Text>
            <Input
              label="Name"
              placeholder="Enter your name"
              value={name}
              onChangeText={setName}
              error={errors.name}
            />
            <Input
              label="Email"
              placeholder="Enter your email"
              value={email}
              onChangeText={setEmail}
              error={errors.email}
              keyboardType="email-address"
              autoCapitalize="none"
              autoComplete="email"
            />
            <Input
              label="Password"
              placeholder="Enter your password"
              value={password}
              onChangeText={setPassword}
              error={errors.password}
              secureTextEntry={!showPassword}
              autoCapitalize="none"
              autoComplete="password"
              rightIcon={<EyeIcon visible={showPassword} size={20} />}
              onRightIconPress={() => setShowPassword(!showPassword)}
            />
            <Input
              label="Confirm Password"
              placeholder="Confirm your password"
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              error={errors.confirmPassword}
              secureTextEntry={!showConfirmPassword}
              autoCapitalize="none"
              rightIcon={<EyeIcon visible={showConfirmPassword} size={20} />}
              onRightIconPress={() => setShowConfirmPassword(!showConfirmPassword)}
            />
            <Button
              title="Register"
              onPress={handleRegister}
              loading={loading}
              style={styles.button}
            />
            <View style={styles.footer}>
              <Text variant="bodySmall" style={styles.footerText}>
                Already have an account?{' '}
              </Text>
              <TouchableOpacity
                onPress={() => navigation.navigate('Login')}
                activeOpacity={0.7}>
                <Text variant="bodySmall" style={styles.linkText}>
                  Login
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.surface,
  },
  keyboardView: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    padding: spacing.lg,
  },
  content: {
    width: '100%',
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
  button: {
    marginTop: spacing.md,
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

