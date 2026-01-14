import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Input } from '../atoms/Input';
import { Button } from '../atoms/Button';
import { EyeIcon } from '../atoms/EyeIcon';
import { spacing } from '../../theme/spacing';

interface LoginFormProps {
  onSubmit: (email: string, password: string) => void;
  loading?: boolean;
}

export const LoginForm: React.FC<LoginFormProps> = ({
  onSubmit,
  loading = false,
}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = () => {
    // Simple validation - just check if fields are not empty
    if (email.trim() && password.trim()) {
      onSubmit(email, password);
    } else {
      if (!email.trim()) {
        setEmailError('Email is required');
      } else {
        setEmailError('');
      }
      if (!password.trim()) {
        setPasswordError('Password is required');
      } else {
        setPasswordError('');
      }
    }
  };

  return (
    <View style={styles.container}>
      <Input
        label="Email"
        placeholder="Enter your email"
        value={email}
        onChangeText={setEmail}
        error={emailError}
        keyboardType="email-address"
        autoCapitalize="none"
        autoComplete="email"
      />
      <Input
        label="Password"
        placeholder="Enter your password"
        value={password}
        onChangeText={setPassword}
        error={passwordError}
        secureTextEntry={!showPassword}
        autoCapitalize="none"
        autoComplete="password"
        rightIcon={<EyeIcon visible={showPassword} size={20} />}
        onRightIconPress={() => setShowPassword(!showPassword)}
      />
      <Button
        title="Login"
        onPress={handleSubmit}
        loading={loading}
        style={styles.button}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  button: {
    marginTop: spacing.md,
  },
});

