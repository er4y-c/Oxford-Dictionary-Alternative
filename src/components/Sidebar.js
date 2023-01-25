import { useState } from 'react';
import { Box, Button, Link,} from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Sidebar = (props) => {
  const [dict,setDict] = useState(false);
  const [gram,setGram] = useState(false); 
  const [list,setList] = useState(false); 
  const [res,setRes] = useState(false);  

  return (
    <Box
        className='sidebar-container'
        sx={{
            display: props.isVisible ? 'flex': 'none',
            flexDirection:'column',
            height: '100%',
            position: 'fixed',
            bgcolor:'white',
            top:'70px',
            zIndex: 1000,
    }}>
          <Box 
            className='sidebar-button-group' 
            sx={{
              display:'flex',
              flexDirection:'column',
              mt:'30px',
          }}>
            <Button onClick={()=>setDict(!dict)} endIcon={<KeyboardArrowDownIcon />}>Dictionaries</Button>
            {dict?<Box sx={{display:'flex',flexDirection:'column',m:'auto',}}>
              <Link href='#' sx={{textDecoration:'none',ml:'50px',}}>Dictionary</Link>
              <Link href='#' sx={{textDecoration:'none',ml:'50px',}}>English</Link>
              <Link href='#' sx={{textDecoration:'none',ml:'50px',}}>American English</Link>
            </Box>:null}

            <Button onClick={()=>setGram(!gram)} endIcon={<KeyboardArrowDownIcon />}>Grammar</Button>
            {gram?<Box sx={{display:'flex',flexDirection:'column',m:'auto',}}>
              <Link href='#' sx={{textDecoration:'none',ml:'50px',}}>Grammar Home</Link>
              <Link href='#' sx={{textDecoration:'none',ml:'50px',}}>Practical English Usage</Link>
            </Box>:null}
            
            <Button onClick={()=>setList(!list)} endIcon={<KeyboardArrowDownIcon />}>Word Lists</Button>
            {list?<Box sx={{display:'flex',flexDirection:'column',m:'auto',}}>
              <Link href='#' sx={{textDecoration:'none',ml:'50px',}}>Word Lists Home</Link>
              <Link href='#' sx={{textDecoration:'none',ml:'50px',}}>My Word Lists</Link>
              <Link href='#' sx={{textDecoration:'none',ml:'50px',}}>Topics</Link>
            </Box>:null}
            
            <Button onClick={()=>setRes(!res)} endIcon={<KeyboardArrowDownIcon />}>Resources</Button>
            {res?<Box sx={{display:'flex',flexDirection:'column',m:'auto',}}>
              <Link href='#' sx={{textDecoration:'none',ml:'50px',}}>Resources Home</Link>
              <Link href='#' sx={{textDecoration:'none',ml:'50px',}}>Text Checker</Link>
            </Box>:null}
          
            <Box 
              className='responsive-button-group' 
              sx={{ 
                flexDirection:'column',
                justifyContent:'space-between',
                mt:'30px',
            }}>
              <Button variant="contained" size="small" color="primary" sx={{m:'auto',mb:'12px',width:'80%'}}>Redeem</Button>
              <Button variant="contained" size="small" color="error" sx={{m:'auto',mb:'12px',width:'80%'}}>Upgrade</Button>
              <Button variant="outlined" size="small" sx={{m:'auto',mb:'12px',width:'80%'}}>Help</Button>
              <Button variant="outlined" size="small" sx={{m:'auto',mb:'12px',width:'80%'}}>Signin</Button>
            </Box>
            
          </Box>
    </Box>
  );
}

export default Sidebar;