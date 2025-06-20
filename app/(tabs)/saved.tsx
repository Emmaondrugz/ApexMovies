import { Text, View } from 'react-native';

const saved = () => {
  return (
    <View className="flex h-screen items-center justify-center gap-5 bg-white">
      <Text className={`transition-opacity duration-500`}>Saved</Text>
    </View>
  );
};

export default saved;
