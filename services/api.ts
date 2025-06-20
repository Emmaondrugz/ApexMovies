type FetchMoviesParams = {
  query?: string;
};

type Movie = {
  id: number;
  title: string;
  overview: string;
  release_date: string;
  popularity: number;
  vote_average: number;
  poster_path: string;
};

type FetchMoviesResponse = {
  results: Movie[];
};

export const TMDB_config = {
  BASE_URL: 'https://api.themoviedb.org/3',
  API_KEY: process.env.EXPO_PUBLIC_MOVIE_API_KEY || '',
  headers: {
    accept: 'application/json',
    authorization: `Bearer ${process.env.EXPO_PUBLIC_MOVIE_API_KEY || ''}`,
  },
};

// Original function with params
export const fetchMovies = async ({ query }: FetchMoviesParams): Promise<Movie[]> => {
  const endpoint = query
    ? `/search/movie?query=${encodeURIComponent(query)}&sort_by=popularity.desc`
    : '/discover/movie?sort_by=popularity.desc';

  const url = `${TMDB_config.BASE_URL}${endpoint}&api_key=${TMDB_config.API_KEY}`;

  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: TMDB_config.headers,
    });

    if (!response.ok) {
      throw new Error(`Error fetching movies: ${response.statusText}`);
    }

    const data: FetchMoviesResponse = await response.json();
    console.log('Fetched Movies : true');
    return data.results || [];
  } catch (error) {
    console.error('Fetch Movies Error:', error);
    throw error;
  }
};

// New function without params for useFetch
export const fetchPopularMovies = async (): Promise<Movie[]> => {
  return fetchMovies({});
};

// Function for searching movies
export const fetchMoviesWithSearch = async (searchQuery: string): Promise<Movie[]> => {
  return fetchMovies({ query: searchQuery });
};
