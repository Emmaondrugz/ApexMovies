import { Text, View, Image } from 'react-native';

export default function ProfileIcon() {
  return (
    <View className="flex h-16 items-center justify-center bg-none text-white">
      {/* logo */}
      <View className="h-14 w-14 overflow-hidden rounded-full">
        <Image
          source={require('../assets/logo.png')}
          style={{ width: '100%', height: '100%' }}
          resizeMode="cover"
        />
      </View>
    </View>
  );
}
