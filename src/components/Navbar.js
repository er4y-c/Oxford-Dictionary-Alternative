import React from "react";
import { Link } from "react-router-dom";
import { Box, Button } from "@mui/material";
import Logo from "../icons/logo.svg";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = ({ isVisible, setIsVisible}) => {
  
    return (
        <Box 
            className="navbar-container"
            sx={{
                bgcolor:'white',
                minWidth:'100%',
                display:'flex',
                justifyContent:'space-between',
                alignItems:'center',
                pt:'10px',
                pb:'10px',
                borderBottom:'1px solid #ececec',
                position:'fixed',
                right:0,
                top:0,
                zIndex: 100,
                height:'70px',
            }}
        >
            <Box 
                className="navbar-left" 
                sx={{
                    display:'flex',
                    justifyContent:'center',
                    alignItems:'center',
                }}
            >
                <Box className="menu-btn">
                    <Button onClick={()=>setIsVisible(!isVisible)}> <MenuIcon sx={{color:'gray'}}/></Button>
                </Box>
                <Box className="logo-container" sx={{flex:1,ml:'20px',}}>
                    <Link to="/"><img src={Logo} alt="Oxford Logo" width={200}/></Link>
                </Box>
            </Box>
            <Box className="navbar-button-group">
                <Button variant="contained" size="small" color="primary" sx={{mr:'20px'}}>Redeem</Button>
                <Button variant="contained" size="small" color="error" sx={{mr:'20px'}}>Upgrade</Button>
                <Button variant="outlined" size="small" sx={{mr:'20px'}}>Help</Button>
                <Link to="/login" variant="outlined">
                    <AccountCircleIcon sx={{mr:'5px',}}/>
                </Link>
            </Box>
        </Box>
    );
}
export default  Navbar;
