import { Box, Typography, IconButton } from '@mui/material';
import React, { useState, useEffect, useCallback } from 'react';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import TextFieldsIcon from '@mui/icons-material/TextFields';

const Definition = ({ word }) => {
    const[isVisible,setIsVisible] = useState(true);
    const[visibleId,setVisibleId] = useState("nouns");
    const [wordData, setWordData] = useState({
        response: '',
        ipa: '',
        meaning: {
          noun: '',
          verb: '',
          adjective: '',
          adverb:'',
        },
      });

    const fetchData = useCallback(() => {
        const axios = require("axios");

        const options = {
        method: 'GET',
        url: 'https://twinword-word-graph-dictionary.p.rapidapi.com/definition/',
        params: {entry: word},
        headers: {
            'X-RapidAPI-Key': RAPID_API_KEY,
            'X-RapidAPI-Host': 'twinword-word-graph-dictionary.p.rapidapi.com'
        }
        };

        axios.request(options).then(function (response) {
            setWordData(response.data);
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
    <Box 
        className="definition-container" 
        sx={{
            display:'flex',
            flexDirection:'column',
            margin:'0 auto',
            width:'50%',
        }}
    >
        <Box className="container-header">
            <Typography className="word" variant='h6' color="darkblue" fontSize="32px">{wordData.response}</Typography>
            <Box className="voice" sx={{mt:'15px',mb:'20px',}}>
                <IconButton>
                    <VolumeUpIcon fontSize="medium" sx={{color:'darkblue'}}/>  
                </IconButton>
                <Typography variant='body1' sx={{display:'inline-block',ml:'10px'}}>/{wordData.ipa}/</Typography>
            </Box>
        </Box>
        <Box className='container-body' sx={{display:'flex',flexDirection:'column',justifyContent:'space-between'}}>
            <Box className='noun-def' sx={{mb:'20px'}}>
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
                        onClick={()=>{
                            setIsVisible(!isVisible);
                            setVisibleId("nouns");
                        }}
                    >
                        <TextFieldsIcon/>
                    </IconButton>
                    <Typography fontSize="24px" fontWeight="300" sx={{ml:'30px',}}>Noun</Typography>
                </Box>
                <ul id="nouns" style={{listStyle:"inside",listStyleType:"upper-roman"}}>
                    <li>{wordData.meaning && wordData.meaning.noun?wordData.meaning.noun:"None"}</li>
                </ul>
            </Box>
            <Box className='verb-def' sx={{mb:'20px'}}>
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
                        onClick={()=>{setIsVisible(!isVisible);setVisibleId("verbs");}}
                    >
                        <TextFieldsIcon/>
                    </IconButton>
                    <Typography fontSize="24px" fontWeight="300" sx={{ml:'30px',}}>Verb</Typography>
                </Box>
                <ul id="verbs" style={{listStyle:"inside",listStyleType:"upper-roman"}}>
                    <li>{wordData.meaning && wordData.meaning.verb?wordData.meaning.verb:"None"}</li> 
                </ul>
            </Box>
            <Box className='adj-def' sx={{mb:'20px'}}>
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
                        onClick={()=>{setIsVisible(!isVisible);setVisibleId("adjectives");}}
                    >
                        <TextFieldsIcon/>
                    </IconButton>
                    <Typography fontSize="24px" fontWeight="300" sx={{ml:'30px',}}>Adjective</Typography>
                </Box>
                <ul id="adjectives" style={{listStyle:"inside",listStyleType:"upper-roman"}}>
                    <li>{wordData.meaning && wordData.meaning.adjective?wordData.meaning.adjective:"None"}</li> 
                </ul>
            </Box>
            <Box className='adv-def' sx={{mb:'20px'}}>
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
                        onClick={()=>{setIsVisible(!isVisible);setVisibleId("adverbs");}}
                    >
                        <TextFieldsIcon/>
                    </IconButton>
                    <Typography fontSize="24px" fontWeight="300" sx={{ml:'30px',}}>Adverb</Typography>
            </Box>
                <ul id="adverbs" style={{listStyle:"inside",listStyleType:"upper-roman"}}>
                    <li>{wordData.meaning && wordData.meaning.adverb?wordData.meaning.adverb:"None"}</li> 
                </ul>
            </Box>
        </Box>
    </Box>
  );
}

export default Definition;
