import * as React from 'react';
import {useParams} from 'react-router-dom'
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import { useState, useEffect } from 'react';
import axiosBase from '../config/axiosBase';
import axiosImg from '../config/axiosImg';
import { Route } from "react-router-dom";

import NotFound from './NotFound';
import { fontSize } from '@mui/system';



function Movie() {
  let params = useParams()

  const[singleMovie, setSingleMovie] = useState([])
  const[poster, setPoster] = useState([])

 

  useEffect(() => {
    async function fetchData(){
      
      // Please note that the request path is between `...` instead of '...'  
      let request = await axiosBase.get(`/movie/${params.id}`+process.env.REACT_APP_API_KEY);
      console.log(request)
      
      if(request.status === 200)
        setSingleMovie(request.data);
        
      else
        <Route exact path='/${params.id}' component={<NotFound/>}  /> 
        return <NotFound/>;

      
      return request;
    }

 

    fetchData();
    
    
  }, []);

  

  useEffect(() => {
    async function fetchImg(){
      let requestImg = await axiosImg.get('/ojDg0PGvs6R9xYFodRct2kdI6wC.jpg');
      setPoster(requestImg.data)

      return requestImg;
    }

    fetchImg();
  }, [singleMovie]);



  
  return (
    <Box sx={{
        display:'flex',
        ml:20
        }}
    >
        
        
        
        <Box 
          component='img' 
          src='https://image.tmdb.org/t/p/w300/ojDg0PGvs6R9xYFodRct2kdI6wC.jpg'
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
              {singleMovie.original_title}
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
            value={Number(2)}
            size="large"
            precision={0.5}
            onChange={(event, newValue) => {
                //setValue(newValue);
            }}
            sx={{
              px:2
            }}
            />
        </Box>
    </Box>
  )
}

export default Movie