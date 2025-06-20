import { Text, TouchableOpacity, Image, View } from 'react-native';
import { Link } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function MovieCard({ id, title, poster_path, release_date, vote_average }) {
  const date = release_date ? release_date.slice(0, 4) : 'Unknown';
  const rating = vote_average ? vote_average.toString().slice(0, 3) : 'N/A';

  return (
    <Link href={`/movies/${id}`} asChild>
      <TouchableOpacity style={{ width: '30%' }} className="rounded-lg">
        <Image
          source={{
            uri: poster_path
              ? `https://image.tmdb.org/t/p/w500${poster_path}`
              : `https://via.placeholder.com/600x400/1a1a1a/ffffff.png`,
          }}
          style={{ height: 150, width: '100%' }}
          resizeMode="cover"
        />

        <View className="mt-0 flex flex-col gap-2 bg-secondary px-3 pb-3 pt-3 text-white">
          <Text className="text-sm text-white" numberOfLines={1} ellipsizeMode="tail">
            {title}
          </Text>
          <View className="flex flex-row justify-between">
            <View className="flex flex-row items-center gap-2">
              <Ionicons name="star" color={'gold'} />
              <Text className="text-sm text-white">{rating}</Text>
            </View>

            <Text className="text-sm text-gray-500">{date}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </Link>
  );
}
