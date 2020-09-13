const API_KEY='ab5065b26e7912c9a4b1b009c523c9d1'
export default {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchTopRated: '/movie/top_rated?api_key=ab5065b26e7912c9a4b1b009c523c9d1&language=en-US',
    fetchActionMovies: '/discover/movie?api_key=ab5065b26e7912c9a4b1b009c523c9d1&language=en-US&with_genres=28',
    fetchComedyMovies: '/discover/movie?api_key=ab5065b26e7912c9a4b1b009c523c9d1&language=en-US&with_genres=35',
    fetchHorroMovies: '/discover/movie?api_key=ab5065b26e7912c9a4b1b009c523c9d1&language=en-US&with_genres=27',
    fetchRomanceMovies: '/discover/movie?api_key=ab5065b26e7912c9a4b1b009c523c9d1&language=en-US&with_genres=10749',
    fetchMystery: '/discover/movie?api_key=ab5065b26e7912c9a4b1b009c523c9d1&language=en-US&with_genres=9648',
    fetchScifi: '/discover/movie?api_key=ab5065b26e7912c9a4b1b009c523c9d1&language=en-US&with_genres=878',
    fetchWestern: '/discover/movie?api_key=ab5065b26e7912c9a4b1b009c523c9d1&language=en-US&with_genres=37',
    fetchAnimation: '/discover/movie?api_key=ab5065b26e7912c9a4b1b009c523c9d1&language=en-US&with_genres=16',
    fetchTV: '/discover/movie?api_key=ab5065b26e7912c9a4b1b009c523c9d1&language=en-US&with_genres=10770'

}