import { View, Text } from 'react-native';
import { Image } from 'react-native';
import { useState, useEffect } from 'react';
import { useNavigation } from 'expo-router';
import { router } from 'expo-router';

export default function CoverPage() {
  const [displayLogo, setDisplayLogo] = useState(false);
  const navigation = useNavigation();

  const DisplayScreen = () => {
    // First timeout: Show the logo after 1 second
    setTimeout(() => {
      setDisplayLogo(true);

      // Second timeout: Hide logo and navigate after 3 seconds
      setTimeout(() => {
        setDisplayLogo(false);

        // Navigate to the home screen
        setTimeout(() => {
          navigation.navigate('(tabs)', { screen: 'Home' });
        }, 500);
      }, 2000);
    }, 1000);
  };

  // Call DisplayScreen when component mounts
  useEffect(() => {
    DisplayScreen();
  }, []);

  return (
    <View
      className={`fixed left-0 top-0 z-[999] m-0 h-screen w-full items-center justify-center bg-primary text-white transition-all duration-500`}>
      <View
        className={`flex flex-row items-center justify-center transition-opacity duration-700 ${
          displayLogo ? 'opacity-100' : 'opacity-0'
        }`}>
        {/* <Image source={require('../assets/splash_bg.png')} className="h-screen w-full" /> */}

        <View className="absolute flex h-svh w-full items-center bg-none p-10">
          <Image source={require('../assets/logo.png')} className="mb-10 mt-5 h-20 w-20" />
          <Text className="text-center text-4xl font-bold text-white">
            Bring <Text className="text-red-500">free</Text> streaming to your devices
          </Text>
          <Text className="mt-5 text-center text-gray-400">
            Unleash a world of limited entertainment, Watch everything now only on <Text>Flix</Text>{' '}
            mobile.
          </Text>
        </View>
      </View>
    </View>
  );
}
