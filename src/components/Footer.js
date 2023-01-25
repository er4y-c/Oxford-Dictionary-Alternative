import { Box, Link } from '@mui/material';
import Logo from "../icons/logo-oup.svg";

const Footer = () => {
  return (
    <Box 
        className="footer-container"
        sx={{
            display:'flex',
            alignItems:'center',
            justifyContent:'space-between',
            flexWrap:'wrap',
            minWidth:'100%',
            height:'100px',
            mt:'30px',
            borderTop:'1px solid #ececec',
        }}
    >
        <Box className="link-group" sx={{display:'flex',justifyContent:'space-between', flexWrap:'wrap',width:'60%',ml:'30px',}}>
            <Link to="#" sx={{textDecoration:'none',cursor:'pointer'}}>Privacy Policy</Link>
            <Link to="#" sx={{textDecoration:'none',cursor:'pointer'}}>Cookie Policy</Link>
            <Link to="#" sx={{textDecoration:'none',cursor:'pointer'}}>Cookies Settings</Link>
            <Link to="#" sx={{textDecoration:'none',cursor:'pointer'}}>Terms & Conditions</Link>
            <Link to="#" sx={{textDecoration:'none',cursor:'pointer'}}>Accessibility</Link>
            <Link to="#" sx={{textDecoration:'none',cursor:'pointer'}}>Legal Notice</Link>
        </Box>
        <Box className="footer-logo" sx={{mr:'30px'}}>
            <img src={Logo} alt="Oxford Press" width="150px"/>
        </Box>
    </Box>
  )
}

export default Footer