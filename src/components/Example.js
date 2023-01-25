import { Box, Typography, IconButton  } from '@mui/material';
import React, { useState, useEffect, useCallback } from 'react';
import TextFieldsIcon from '@mui/icons-material/TextFields';

const Example = ({ word }) => {
    const[isVisible,setIsVisible] = useState(true);
    const[visibleId,setVisibleId] = useState("nouns");
    const [examples, setExamples] = useState(["None"]);

    const fetchData = useCallback(() => {
        const axios = require("axios");

        const options = {
        method: 'GET',
        url: 'https://twinword-word-graph-dictionary.p.rapidapi.com/example/',
        params: {entry: word},
        headers: {
            'X-RapidAPI-Key': 'b0dbab0c2emsh984d5b6276e1902p1811b4jsn09b3c17cdbc9',
            'X-RapidAPI-Host': 'twinword-word-graph-dictionary.p.rapidapi.com'
        }
        };

        axios.request(options).then(function (response) {
            setExamples(response.data.example);
            console.log(response.data);
        }).catch(function (error) {
            console.error(error);
        });
    },[word]);
    useEffect(()=>{
        fetchData();
        if(isVisible===false){
            document.getElementById(visibleId).style.display="none"; 
        } else
            document.getElementById(visibleId).style.display="block";  
    },[isVisible,visibleId,fetchData]);

  return (
    <Box sx={{
        margin:"0 auto",
        width:'50%',
    }}>
        <Box 
            className='def-title' 
            sx={{
                display:'flex',
                flex:1,
                bgcolor:'#FADED7',
                mb:'20px',
            }}
        >
            <IconButton 
                        sx={{
                            color:'black',
                        }}
                        onClick={()=>{setIsVisible(!isVisible);setVisibleId("examples");}}
                    >
                        <TextFieldsIcon/>
                    </IconButton>
            <Typography fontSize="24px" fontWeight="300" sx={{ml:'30px',}}>Examples</Typography>
        </Box>
        <ul id="examples" style={{listStyle:'none',}}>
            {
                examples.map((example)=>(
                    <li key={examples.indexOf(example)} style={{marginBottom:'12px',}}>{example}</li>
                ))
            }
        </ul>
    </Box>
  );
}

export default Example;