import { Box, Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import { Searchbar, Navbar, Footer, Sidebar } from '../components';
import Card1 from "../icons/card1.png";
import Card2 from "../icons/card2.png";
import Card3 from "../icons/card3.png";
import Card4 from "../icons/card4.png";
import Card5 from "../icons/card5.png";
import { useState } from 'react';

const Home = () => {
  const [isVisible, setIsVisible] = useState(false); 
  return (
    <Box 
        className='page-header' 
        sx={{
            display:'flex',
            flexDirection:'column',
            justifyContent:'space-between',
        }}
    >
        <Navbar isVisible={isVisible} setIsVisible={setIsVisible}/>
        <Sidebar isVisible={isVisible}/>
        <Box className='input-area'>
            <Searchbar />
        </Box>
        <Box 
            className='page-content'
            sx={{
                display:'flex',
                flexDirection:'column',
                justifyContent:'space-between',
                m:'0 auto',
                minWidth:'80%',
            }}
        >
            <Box className='reklam-area' sx={{width:'100%', height:'150px',}}></Box>
            <Box 
                className='top'
                sx={{
                    display:'flex',
                    justifyContent:'space-between',
                    mb:'30px',
                }}
            >
                <Card>
                    <CardContent>
                        <Box className="card-content" sx={{ display:'flex',}}>
                            <Box sx={{width:"500px",}}>
                                <Typography variant='h6' sx={{mb:'20px'}}>NEW words and meanings added: September 2022</Typography>
                                <Typography variant='body1'>
                                    More new words and meanings have been added to Oxford Advanced Learner’s Dictionary online.
                                    This time the main themes are business and technology, from corporate culture to hybrid working, from the C-suite to the digital nomad. Is it time to focus on your core competency or to embrace the new economy?
                                    Along with an excursion into Korean culture (bibimbap, hanbok, the Korean wave and more), here are 90+ words and expressions to add to your watch list.
                                </Typography>
                            </Box>
                            <Box sx={{ml:'30px',}}>
                                <img src={Card5} width="200px" alt="Card Content"/>
                            </Box>
                        </Box>
                    </CardContent>
                    <CardActions>
                        <Button>See full list</Button>
                    </CardActions>
                </Card>
                <Card sx={{bgcolor:'#d6f6f4',textAlign:'center'}}>
                    <CardContent>
                        <Typography variant='h6'>27 December 2022</Typography>
                        <Typography variant='body1' color="darkblue" fontSize="24px">rink</Typography>
                        <Typography variant='body1' fontWeight="400" fontSize="18px">noun</Typography>
                        <Box sx={{mt:'20px',mb:'20px',}}>
                            <VolumeUpIcon sx={{color:'darkblue',mr:'20px',}} fontSize="large"/>
                            <VolumeUpIcon sx={{color:'purple'}} fontSize="large"/>        
                        </Box>
                        <Typography variant='body1' fontSize="13px">From Topic</Typography>
                        <Button variant="contained" sx={{width:'200px'}}>Sports</Button>
                        <Typography variant='body1' sx={{color:'white',bgcolor:'gray', width:'40px',margin:'20px auto',borderRadius:'10px'}}>C1</Typography>
                        <Typography variant='body3' fontSize="13px">Oxford Learner's Dictionaries Word of the Day</Typography>
                    </CardContent>
                </Card>
            </Box>
            <Box 
                className='bottom'
                sx={{
                    display:'flex',
                    justifyContent:'space-between',
                }}
            >
                <Card 
                    sx={{
                        maxWidth:'300px',
                        height:'100%',
                    }}
                >
                    <CardMedia 
                        component="img"
                        image={Card1}
                        alt="Card-Photo"
                        height="227px"
                    />
                    <CardContent>
                        <Typography variant='h6'>Spread the Word</Typography>
                        <Typography variant='body2'>
                            All around the world people love to eat, and so it’s no surprise that food is a great world traveller. As it travels from country to country it often undergoes changes, taking on new influences as it goes. Read about some of these changes, in words like tikka masala, pigs in blankets and schnitzel.
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button>Read our blog</Button>
                    </CardActions>
                </Card>
                <Card 
                    sx={{
                        maxWidth:'300px',
                        height:'100%',
                    }}
                >
                    <CardMedia 
                        component="img"
                        image={Card2}
                        alt="Card-Photo"
                        height="227px"
                    />
                    <CardContent>
                        <Typography variant='h6'>Spread the Word</Typography>
                        <Typography variant='body2'>
                            All around the world people love to eat, and so it’s no surprise that food is a great world traveller. As it travels from country to country it often undergoes changes, taking on new influences as it goes. Read about some of these changes, in words like tikka masala, pigs in blankets and schnitzel.
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button>Read our blog</Button>
                    </CardActions>
                </Card>
                <Card 
                    sx={{
                        maxWidth:'300px',
                        height:'100%',
                    }}
                >
                    <CardMedia 
                        component="img"
                        image={Card3}
                        alt="Card-Photo"
                        height="227px"
                    />
                    <CardContent>
                        <Typography variant='h6'>Spread the Word</Typography>
                        <Typography variant='body2'>
                            All around the world people love to eat, and so it’s no surprise that food is a great world traveller. As it travels from country to country it often undergoes changes, taking on new influences as it goes. Read about some of these changes, in words like tikka masala, pigs in blankets and schnitzel.
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button>Read our blog</Button>
                    </CardActions>
                </Card>
                <Card 
                    sx={{
                        maxWidth:'300px',
                        height:'100%',
                    }}
                >
                    <CardMedia 
                        component="img"
                        image={Card4}
                        alt="Card-Photo"
                        height="227px"
                    />
                    <CardContent>
                        <Typography variant='h6'>Spread the Word</Typography>
                        <Typography variant='body2'>
                            All around the world people love to eat, and so it’s no surprise that food is a great world traveller. As it travels from country to country it often undergoes changes, taking on new influences as it goes. Read about some of these changes, in words like tikka masala, pigs in blankets and schnitzel.
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button>Read our blog</Button>
                    </CardActions>
                </Card>
            </Box>
        </Box>
        <Footer />
    </Box>
  )
}
export default Home;