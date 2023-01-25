import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';
import { Definition, Example, Navbar, Searchbar, Footer, Sidebar } from '../components';

const Dict = () => {
    const { word } = useParams();
    const [isVisible, setIsVisible] = useState(false); 

    return (
        <Box>
            <Navbar isVisible={isVisible} setIsVisible={setIsVisible}/>
            <Sidebar isVisible={isVisible}/>
            <Searchbar />
            <Definition word={word}/>
            <Example word={word}/>
            <Footer />
        </Box>
    );
}

export default Dict