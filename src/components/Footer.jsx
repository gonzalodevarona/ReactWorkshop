import * as React from 'react';
import Box from '@mui/material/Box';


function Footer() {

  const styleWhiteLetters ={
    color:'#ffffff',
    textDecoration: 'none'
  }
  return (
    <footer>
        <Box
          sx={{
            bgcolor:'#032541',
            height:98,
            display: "flex",
            alignItems:"center",
            justifyContent:"center"
          }}
        >

            <p style={styleWhiteLetters}>
                Powered by <a style={styleWhiteLetters} href='https://github.com/gonzalodevarona'>Gonzalo De Varona</a> && <a style={styleWhiteLetters} href='https://github.com/bjuan210302'>Juan Diego Bustamante</a>
            </p>
            
        </Box>
        
    </footer>
  )
}

export default Footer