import * as React from 'react';
import MovieCard from '../components/MovieCard';
import Box from '@mui/material/Box';
import { useState, useEffect } from 'react';
import axios from '../config/axiosBase';

function Home() {
  const[movieList, setMovieList] = useState([])
  
  const avatar = {
    x: movieList,
    image: require('../resources/test.png'),
    name: 'Avatar',
    rating: '3'
  }


  useEffect(() => {
    async function fetchData(){
      let movies = []
      let request = await axios.get('movie/popular'+process.env.REACT_APP_API_KEY);
      movies.push(request.data.results);

      request = await axios.get('movie/top_rated'+process.env.REACT_APP_API_KEY);
      movies.push(request.data.results);

      // ENDPOINT NOT WORKING
      // request = await axios.get('movie/latest'+process.env.REACT_APP_API_KEY);
      // movies.push(request.data.results);

      setMovieList(movies);

      return request;
    }

    fetchData();
    
  }, []);
  
  

  return (
    <Box>
        <MovieCard movie={avatar}></MovieCard>
    </Box>
  )
}

export default Home