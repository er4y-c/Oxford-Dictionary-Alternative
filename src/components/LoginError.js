import React from 'react'
import ErrorIcon from '@mui/icons-material/Error';
import { Box, Typography } from '@mui/material';

const LoginError = ({error}) => {
  return (
    <Box sx={{
        display:'flex',
        
    }}>
        <Box className="error-icon-container">
            <ErrorIcon sx={{color:'orange',}}/>
        </Box>
        <Box className="error-msg-container" sx={{ml:'15px',}}>
            <Typography>{error}</Typography>
        </Box>
    </Box>
  );
}
export default LoginError;
