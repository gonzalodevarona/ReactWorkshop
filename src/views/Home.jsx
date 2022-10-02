import * as React from 'react';
import MovieCard from '../components/MovieCard';
import Box from '@mui/material/Box';
import { useState } from 'react';
import { requirePropFactory } from '@mui/material';

function Home() {
  const[movieList, setMovieList] = useState([])
  
  const avatar = {
    image: require('../resources/test.png'),
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