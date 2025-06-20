import { useState, useEffect } from 'react';
import { Text, View, ActivityIndicator, FlatList, useWindowDimensions } from 'react-native';
import SearchBar from 'components/SearchBar';
import useFetch from 'services/useFetch';
import { fetchMovies } from 'services/api';
import MovieCard from 'components/MovieCard';

const search = () => {
  const [searchQuery, setSearchQuery] = useState('');

  // Dynamically set column count
  const numColumns = 3;

  const {
    data: movies,
    loading,
    error,
    refetch: loadMovies,
    reset,
  } = useFetch(() => fetchMovies({ query: searchQuery }), false);

  useEffect(() => {
    const timeoutId = setTimeout(async () => {
      if (searchQuery.trim()) {
        await loadMovies();
      } else {
        reset();
      }
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [searchQuery]);

  return (
    <View className="flex-1 bg-primary">
      {/* Fixed Header with SearchBar */}
      <View className="bg-primary px-5 pb-4 pt-16">
        <SearchBar
          value={searchQuery}
          onchange={(text) => {
            setSearchQuery(text);
          }}
          placeholder="Search for movies or TV shows"
        />
      </View>

      {!loading && !error && searchQuery.trim() && movies?.length > 0 && (
        <Text className="px-5 py-2 text-white">
          Search results for {''}
          <Text className="text-red-500">{searchQuery}</Text>
        </Text>
      )}

      {/* Scrollable Content */}
      <View className="flex-1 px-5">
        {loading ? (
          <ActivityIndicator size="large" color="gray" className="self-center" />
        ) : error ? (
          <Text className="text-white">Error: {error.message}</Text>
        ) : (
          <FlatList
            data={movies}
            renderItem={({ item }) => <MovieCard {...item} />}
            keyExtractor={(item) => item.id.toString()}
            showsVerticalScrollIndicator={false}
            numColumns={numColumns}
            columnWrapperStyle={{
              justifyContent: 'flex-start',
              gap: 10,
              marginBottom: 30,
            }}
            contentContainerStyle={{ paddingBottom: 130, paddingTop: 10 }}
            ListEmptyComponent={
              !loading && !error ? (
                <View className="mt-5 px-5">
                  <Text className="text-center text-gray-500">
                    {searchQuery.trim() ? 'No movies found' : `Search for a movie`}
                  </Text>
                </View>
              ) : null
            }
          />
        )}
      </View>
    </View>
  );
};

export default search;
