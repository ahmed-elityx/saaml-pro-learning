import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '../../types/api';

interface UserState {
  profile: User | null;
  preferences: {
    theme: 'light' | 'dark' | 'system';
    language: 'en' | 'ar';
    notifications: boolean;
  };
}

const initialState: UserState = {
  profile: null,
  preferences: {
    theme: 'system',
    language: 'en',
    notifications: true,
  },
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setProfile: (state, action: PayloadAction<User>) => {
      state.profile = action.payload;
    },
    updateProfile: (state, action: PayloadAction<Partial<User>>) => {
      if (state.profile) {
        state.profile = { ...state.profile, ...action.payload };
      }
    },
    setTheme: (
      state,
      action: PayloadAction<'light' | 'dark' | 'system'>
    ) => {
      state.preferences.theme = action.payload;
    },
    setLanguage: (state, action: PayloadAction<'en' | 'ar'>) => {
      state.preferences.language = action.payload;
    },
    setNotifications: (state, action: PayloadAction<boolean>) => {
      state.preferences.notifications = action.payload;
    },
    resetUser: (state) => {
      state.profile = null;
      state.preferences = initialState.preferences;
    },
  },
});

export const {
  setProfile,
  updateProfile,
  setTheme,
  setLanguage,
  setNotifications,
  resetUser,
} = userSlice.actions;
export default userSlice.reducer;

