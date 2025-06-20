import { View, Text, ActivityIndicator, FlatList, useWindowDimensions } from 'react-native';
import ProfileIcon from '../../components/ProfileIcon';
import SearchBar from 'components/SearchBar';
import { useRouter } from 'expo-router';
import useFetch from 'services/useFetch';
import { fetchMovies } from 'services/api';
import MovieCard from 'components/MovieCard';

export default function Home() {
  const router = useRouter();

  // Dynamically set column count
  const numColumns = 3;

  const {
    data: movies,
    loading: moviesLoading,
    error: moviesError,
  } = useFetch(() => fetchMovies({ query: '' }));

  const HorizontalLine = ({ width = 54, height = 2, color = 'red' }) => (
    <View
      style={{
        width,
        height,
        backgroundColor: color,
        marginTop: 3,
      }}
    />
  );

  return (
    <View className="flex-1 bg-primary px-3 pt-16">
      {moviesLoading ? (
        <ActivityIndicator size="large" color="gray" className="self-center" />
      ) : moviesError ? (
        <Text className="text-white">Error: {moviesError.message}</Text>
      ) : (
        <FlatList
          data={movies}
          ListHeaderComponent={() => (
            <View>
              <ProfileIcon />
              <View className="mt-6">
                <SearchBar
                  onPress={() => router.push('/search')}
                  placeholder="Search for movies or TV shows"
                />
              </View>
              <View className="my-6">
                <Text className="text-2xl text-white">Latest Movies</Text>
                <HorizontalLine />
              </View>
            </View>
          )}
          renderItem={({ item }) => <MovieCard {...item} />}
          keyExtractor={(item) => item.id.toString()}
          showsVerticalScrollIndicator={false}
          numColumns={numColumns}
          columnWrapperStyle={{
            justifyContent: 'flex-start',
            gap: 10,
            marginBottom: 30,
          }}
          contentContainerStyle={{ paddingBottom: 130 }}
        />
      )}
    </View>
  );
}
