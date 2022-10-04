import * as React from 'react';
import Box from '@mui/material/Box';
import { ReactComponent as Logo } from '../resources/logo.svg';

function Header() {
  return (
    
    <header>
        <Box
        sx={{
            bgcolor:'#032541',
            height:98,
            display: "flex",
            alignItems:"center",
            justifyContent:"center"
        }}
        >

            <a href='/ReactWorkshop/' >
                <Logo style={{width:583,height:46 }}>
            </Logo></a>

        </Box>
    </header>
        
    
  )
}

export default Header