import { TextInput, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface SearchBarProps {
  placeholder?: string;
  onPress?: () => void;
  value?: string;
  onchange?: (text: string) => void;
}

export default function SearchBar({ placeholder, onPress, value, onchange }: SearchBarProps) {
  return (
    <View className="flex flex-row items-center gap-4 rounded bg-secondary px-5 py-3.5">
      <Ionicons name={'search-outline'} size={22} color={'#9ca3af'} />
      <TextInput
        placeholder={placeholder}
        onPress={onPress}
        value={value}
        onChangeText={onchange}
        placeholderTextColor={'#9ca3af'}
        className="flex-1 text-white"
      />
    </View>
  );
}
