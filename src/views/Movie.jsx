import * as React from 'react';
import {useParams} from 'react-router-dom'
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import { useState, useEffect } from 'react';
import axiosBase from '../config/axiosBase';
import NotFound from './NotFound';
import { Button } from '@mui/material';




function Movie() {
  let params = useParams()

  const[singleMovie, setSingleMovie] = useState({})
  const[guestSession, setGuestSession] = useState({})
  const [ isAlertVisible, setIsAlertVisible ] = React.useState(false);

  const handleStarClick = () => {
    setIsAlertVisible(true);
    setTimeout(() => {
      setIsAlertVisible(false);
    }, 5000);

  }
  

  useEffect(() => {
    async function fetchData(){
      
      // Please note that the request path is between `...` instead of '...'  
      let request = await axiosBase.get(`/movie/${params.id}`+process.env.REACT_APP_API_KEY);
      
      if(request.status === 200)
        setSingleMovie(request.data);
      
      request = await axiosBase.get('/authentication/guest_session/new'+process.env.REACT_APP_API_KEY);
      
      if(request.status === 200)
        setGuestSession(request.data.guest_session_id);
    
      return request;
    }

    fetchData();
        
  }, [params.id]);

  

  const urlImg = `https://image.tmdb.org/t/p/w300/${singleMovie.poster_path}`

  async function rateMovie(rate){
    rate= Number(rate)*2;
    let response = await axiosBase.post(`/movie/${singleMovie.id}/rating${process.env.REACT_APP_API_KEY}&guest_session_id=${guestSession}`, {value: rate })

    return response;
  }

  async function deleteMovie(){
    setIsAlertVisible(false);
    let response = await axiosBase.delete(`/movie/${singleMovie.id}/rating${process.env.REACT_APP_API_KEY}&guest_session_id=${guestSession}`)

    return response;
  }
  
  
  return (
    <>
    {singleMovie.id  ? <Box sx={{
        display:'flex',
        ml:20
        }}
    >
        
        <Box 
          component='img' 
          src={urlImg}
          alt='Movie poster'
          sx={{
            my:2,
            borderRadius:2,
            maxWidth:300,
            maxHeight:450
          }}
        >
        </Box>

        <Box  
          sx={{
            display:'flex',
            flexDirection:'column',
            justifyContent:'center',
            m:5,
            textAlign:'left',
          }}
        >
            
            <Box sx={{
              fontWeight:'bold',
              fontSize:25,
              pb:2
            }}
            >
              {singleMovie.title}
            </Box>
            
            <Box>
              <Box 
                component="span" 
                sx={{
                  fontWeight:500
                }}
              >Plot: </Box>
              {singleMovie.overview}
            </Box>
            
            <Box sx={{
                  fontWeight:'bold',
                  fontSize:18,
                  pt:3,
                  pb:1
                }}>Now you rate it below!</Box>
            <Rating
            name="simple-controlled"
            value={Number(singleMovie.vote_average)/2}
            size="large"
            precision={0.5}
            onChange={(event, newValue) => {
              rateMovie(newValue); 
              handleStarClick();
            }}
            sx={{
              px:2,
              mb:1
            }}
            />
            {isAlertVisible && 
            <Box>
              <Button 
                sx={{
                  ml:5
                }}
                onClick={deleteMovie}
              >Delete vote</Button>
              <Box>Your vote has been submitted</Box>
            </Box>}
            
        </Box>
    </Box> 
    : <NotFound/>}
    </>
  )
}

export default Movie