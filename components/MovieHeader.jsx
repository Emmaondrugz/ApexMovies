// import { Text, View, Image, ActivityIndicator } from 'react-native';
// import { fetchMovies } from 'services/api';
// import { useState, useEffect } from 'react';
// import { LinearGradient } from 'expo-linear-gradient';

// export default function MovieHeader() {
//   const [movie, setMovie] = useState(null);
//   const [image, setImage] = useState(null);

//   useEffect(() => {
//     const fetchMovieData = async () => {
//       const movies = await fetchMovies({});
//       setMovie(movies[0]);
//       setImage(movie.poster_path);
//     };

//     fetchMovieData();
//   }, []);

//   return (
//     <View className="relative h-[200px] w-full">
//       <Image
//         source={{ uri: `https://image.tmdb.org/t/p/w500${image}` }}
//         className="h-full w-full rounded-xl"
//         resizeMode="cover"
//       />

//       <LinearGradient
//         colors={['transparent', '#2b303a']}
//         locations={[0.5, 1]}
//         style={{
//           position: 'absolute',
//           bottom: 0,
//           height: '50%',
//           width: '100%',
//           borderBottomLeftRadius: 12,
//           borderBottomRightRadius: 12,
//         }}
//       />
//     </View>
//   );
// }

// This component is depricated : )
