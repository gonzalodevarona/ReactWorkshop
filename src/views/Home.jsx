import * as React from 'react';
import MovieCard from '../components/MovieCard';
import Box from '@mui/material/Box';
import { useState } from 'react';

function Home() {
  const[movieList, setMovieList] = useState([])
  
  const avatar = {
    image: '../resources/test.png',
    name: 'Avatar',
    rating: '3'
  }

  return (
    <Box>
        <MovieCard movie={avatar}></MovieCard>
    </Box>
  )
}

export default Home