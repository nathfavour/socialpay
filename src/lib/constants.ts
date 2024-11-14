// Mock data for notifications
export const mockNotifications = Array.from({ length: 25 }, (_, i) => ({
  id: i + 1,
  type: ['payment', 'like', 'comment', 'friend_request', 'mention'][i % 5],
  user: {
    name: ['Alex Chen', 'Maria Garcia', 'James Wilson', 'Priya Patel', 'Omar Hassan'][i % 5],
    avatar: [
      'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde',
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
      'https://images.unsplash.com/photo-1599566150163-29194dcaad36',
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80',
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e'
    ][i % 5],
  },
  content: [
    'sent you ₦5,000',
    'liked your post',
    'commented on your post',
    'sent you a friend request',
    'mentioned you in a post'
  ][i % 5],
  timestamp: `${Math.floor(Math.random() * 24)}h ago`,
  read: false,
}));

// Mock data for profile stats
export const profileStats = {
  posts: 342,
  transactions: 1205,
  totalSent: 2500000,
  totalReceived: 3200000,
  joinedDate: 'September 2023',
  verificationStatus: 'verified',
  accountType: 'premium',
  preferredCurrency: 'NGN',
  language: 'English',
  timezone: 'WAT',
  twoFactorEnabled: true,
  linkedAccounts: ['Bank Account', 'Credit Card', 'PayPal'],
};

// Settings options
export const settingsOptions = {
  account: [
    { title: 'Profile Information', icon: 'User' },
    { title: 'Password & Security', icon: 'Shield' },
    { title: 'Privacy', icon: 'Lock' },
    { title: 'Payment Methods', icon: 'CreditCard' },
    { title: 'Notifications', icon: 'Bell' },
  ],
  preferences: [
    { title: 'Language & Region', icon: 'Globe' },
    { title: 'Theme', icon: 'Palette' },
    { title: 'Accessibility', icon: 'Accessibility' },
  ],
  security: [
    { title: 'Two-Factor Authentication', icon: 'KeyRound' },
    { title: 'Login History', icon: 'History' },
    { title: 'Connected Apps', icon: 'Link' },
  ],
};