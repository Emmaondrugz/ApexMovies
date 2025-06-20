import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { View, Text } from 'react-native';
import { BlurView } from 'expo-blur';

// Tab configuration
const TAB_CONFIGS = [
  { name: 'Home', icon: 'home', title: 'Home' },
  { name: 'search', icon: 'search', title: 'Search' },
  { name: 'saved', icon: 'bookmark', title: 'Saved' },
  { name: 'profile', icon: 'person', title: 'Profile' },
];

// Colors
const COLORS = {
  focused: '#f0f0f0',
  unfocused: '#6b7280',
  tabBarBackground: '#374151',
};

// Tab styles
const TAB_STYLES = {
  tabBarShowLabel: false,
  tabBarItemStyle: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    borderRadius: 50,
    alignItems: 'center',
  },
  tabBarStyle: {
    paddingHorizontal: 30,
    paddingTop: 20,
    borderRadius: 0,
    paddingBottom: 60,
    marginBottom: 0,
    height: 50,
    alignItems: 'center',
    position: 'absolute',
    backgroundColor: 'transparent', // Made transparent for blur effect
    borderTopWidth: 0,
    elevation: 0,
    shadowOpacity: 0,
    overflow: 'hidden',
  },
  tabBarBackground: () => (
    <BlurView
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
      }}
      intensity={50}
      tint="dark">
      <View
        style={{
          flex: 1,
          backgroundColor: '#222', // Semi-transparent overlay
        }}
      />
    </BlurView>
  ),
};

// Tab Icon Component
const TabIcon = ({ icon, name, focused }) => {
  const getIconName = (baseIcon, isFocused) => {
    if (isFocused) {
      return baseIcon.replace('-outline', '');
    }
    return baseIcon.includes('-outline') ? baseIcon : `${baseIcon}-outline`;
  };

  const iconName = getIconName(icon, focused);
  const iconColor = focused ? COLORS.focused : COLORS.unfocused;
  const textColor = focused ? 'text-primary' : 'text-gray-500';

  return (
    <View className="mx-3 flex h-[120px] min-w-[100px] flex-col items-center justify-center gap-2">
      <Ionicons name={iconName} size={24} color={iconColor} />
      <View
        className={`h-1 w-1 ${focused ? 'opacity-100' : 'opacity-0'}  rounded-full bg-red-500`}></View>
    </View>
  );
};

// Main Layout Component
const TabsLayout = () => {
  const renderTabScreen = ({ name, icon, title }) => (
    <Tabs.Screen
      key={name}
      name={name}
      options={{
        title,
        headerShown: false,
        tabBarIcon: ({ focused }) => <TabIcon icon={icon} focused={focused} name={title} />,
      }}
    />
  );

  return <Tabs screenOptions={TAB_STYLES}>{TAB_CONFIGS.map(renderTabScreen)}</Tabs>;
};

export default TabsLayout;
