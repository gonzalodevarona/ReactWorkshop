import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';


function MovieCard() {

  const styleBigRectangle = {
    maxWidth: 485,
    height:485, 
    width:265,
    display:'flex',
    flexDirection:'column',
    justifyContent:'center'
  }

  const styleImgRectangle = {
    maxWidth: 359,
    height:359,
    width:239,
    borderRadius:2,
    
  }

  return (
    <Card sx={[styleBigRectangle, {m:5, borderRadius:2}]}>
      <CardActionArea sx={styleBigRectangle}>
        
        <CardMedia
          component="img"
          image={require("../resources/test.png")}
          alt="Portada de película"
          sx={styleImgRectangle}
        />
        <CardContent>
          <Box sx={{fontWeight:'bold', fontSize:18, pb:1}}>Hola</Box>
          <Box>Votación</Box>
          <Rating name="half-rating-read" value={2.5} precision={0.5} readOnly />

        </CardContent>
      </CardActionArea>
    </Card>
  )
}

//sx={{ maxWidth: 359, height:359, width:239 }}
export default MovieCard