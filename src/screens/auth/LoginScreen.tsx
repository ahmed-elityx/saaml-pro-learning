import React from 'react';
import { View, StyleSheet, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation, CommonActions } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { LoginCard } from '../../components/organisms/LoginCard';
import { colors } from '../../theme/colors';
import { AuthStackParamList, RootStackParamList } from '../../types/navigation';
import { navigationRef } from '../../navigation/RootNavigator';

type LoginScreenNavigationProp = StackNavigationProp<AuthStackParamList>;

export const LoginScreen: React.FC = () => {
  const navigation = useNavigation<LoginScreenNavigationProp>();

  const handleLogin = (email: string, password: string) => {
    // Simple navigation - accept any email and password
    if (email && password) {
      // Use navigation ref for reliable navigation
      if (navigationRef.current) {
        navigationRef.current.dispatch(
          CommonActions.reset({
            index: 0,
            routes: [{ name: 'App' }],
          })
        );
      } else {
        // Fallback: Try using parent navigation
        const rootNavigator = navigation.getParent()?.getParent();
        if (rootNavigator) {
          rootNavigator.dispatch(
            CommonActions.reset({
              index: 0,
              routes: [{ name: 'App' }],
            })
          );
        }
      }
    }
  };

  const handleSignupPress = () => {
    navigation.navigate('Register');
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
            <LoginCard onSubmit={handleLogin} onRegisterPress={handleSignupPress} />
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
    justifyContent: 'center',
    padding: 16,
  },
  content: {
    width: '100%',
  },
});

