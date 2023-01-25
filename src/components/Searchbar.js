import { Box, TextField, InputAdornment, FormControl } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Searchbar = () => {
    const [word,setWord] = useState("");
    const [isTrigged,setIsTrigged] = useState(false);
    useEffect(()=>{
        const getWord = () => {
            var param = document.getElementById("text-area").value;
            setWord(param);
        }
        if(isTrigged) {
            getWord(); 
        }
    },[isTrigged]);

    return (
        <Box 
            className='search-bar'
            sx={{
                display:'flex',
                justifyContent:'center',
                alignItems:'center',
                width:'100%',
                height:'100px',
                margin:'100px auto',
                backgroundColor:'#4a6360ff',
            }}
        >
            <FormControl>
                <TextField
                    id='text-area' 
                    variant='outlined'
                    InputProps={{
                        endAdornment:(
                            <InputAdornment position="end">
                            <Link
                                to={`/${word}`}
                                onClick={()=>setIsTrigged(!isTrigged)}
                            >
                                <SearchIcon />
                            </Link>
                            </InputAdornment>
                        )
                    }}
                    sx={{
                        bgcolor:'white',
                        width:{md:"500px",sm:"100%"},
                    }}
                />
            </FormControl>
        </Box>
    );
}

export default Searchbar