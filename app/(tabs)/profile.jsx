import { Text, View } from 'react-native';

const profile = () => {
  return (
    <View className="flex h-screen items-center justify-center gap-5 bg-white">
      <Text className={`transition-opacity duration-500`}>Profile</Text>
    </View>
  );
};

export default profile;
