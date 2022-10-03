import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import { Link } from "react-router-dom";

function MovieCard({movie}) {

  const styleBigRectangle = {
    maxWidth: 485,
    height:485, 
    width:265,
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    
  }

  const styleImgRectangle = {
    maxWidth: 359,
    height:359,
    width:239,
    borderRadius:2,
    
  }

  
const urlImg = `https://image.tmdb.org/t/p/w300/${movie.poster_path}`

const urlMovie = `/${movie.id}`



  return (
    <Link to={urlMovie}>
      <Card 
        sx={[
          styleBigRectangle,
          {m:3, borderRadius:2}
        ]}
      >
        <CardActionArea sx={styleBigRectangle}>
          
          <CardMedia
            component="img"
            src= {urlImg}
            alt="Portada de película"
            sx={styleImgRectangle}
          />
          <CardContent>
            <Box sx={{fontWeight:'bold', fontSize:18, pb:1}}>{movie.original_title}</Box>
            <Box>Rating</Box>
            <Rating name="half-rating-read" value={Number(movie.vote_average)/2} precision={0.5} readOnly />

          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  )
}


export default MovieCard