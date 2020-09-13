const API_KEY='ab5065b26e7912c9a4b1b009c523c9d1'
export default {
    fetchTrending: `https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchTopRated: 'https://api.themoviedb.org/3/movie/top_rated?api_key=ab5065b26e7912c9a4b1b009c523c9d1&language=en-US',
    fetchActionMovies: 'https://api.themoviedb.org/3/discover/movie?api_key=ab5065b26e7912c9a4b1b009c523c9d1&language=en-US&with_genres=28',
    fetchComedyMovies: 'https://api.themoviedb.org/3/discover/movie?api_key=ab5065b26e7912c9a4b1b009c523c9d1&language=en-US&with_genres=35',
    fetchHorroMovies: 'https://api.themoviedb.org/3/discover/movie?api_key=ab5065b26e7912c9a4b1b009c523c9d1&language=en-US&with_genres=27',
    fetchRomanceMovies: 'https://api.themoviedb.org/3/discover/movie?api_key=ab5065b26e7912c9a4b1b009c523c9d1&language=en-US&with_genres=10749',
    fetchMystery: 'https://api.themoviedb.org/3/discover/movie?api_key=ab5065b26e7912c9a4b1b009c523c9d1&language=en-US&with_genres=9648',
    fetchScifi: 'https://api.themoviedb.org/3/discover/movie?api_key=ab5065b26e7912c9a4b1b009c523c9d1&language=en-US&with_genres=878',
    fetchWestern: 'https://api.themoviedb.org/3/discover/movie?api_key=ab5065b26e7912c9a4b1b009c523c9d1&language=en-US&with_genres=37',
    fetchAnimation: 'https://api.themoviedb.org/3/discover/movie?api_key=ab5065b26e7912c9a4b1b009c523c9d1&language=en-US&with_genres=16',
    fetchTV: 'https://api.themoviedb.org/3/discover/movie?api_key=ab5065b26e7912c9a4b1b009c523c9d1&language=en-US&with_genres=10770'

}