
import { useState, useEffect } from 'react';
import { Box, Typography} from '@mui/material'; 
import { Videos } from './';
import { fetchFromAPI } from '../utils/fetchFromAPI';
import { useParams } from 'react-router-dom';

const SearchFeed = () => {

const [videos, setVideos] = useState([]);
const { searchTerm } = useParams();

  useEffect(() => {
      fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
        .then((data) => setVideos(data.items))//updates state
    }, [searchTerm]);
    //Recalls the 'fetchapi' function once the cateogry section changes 

  return (
    
      <Box p={2} sx={{ overflowY: "auto"
                      ,height: "90vh"
                      , flex: 2 }}>
        <Typography variant="h4" 
                    fontWeight="bold" 
                    mb={2} 
                    sx={{color: "white"}}>
                      
        Search Results for:  <span style={{ color: "red" }}>{searchTerm}</span> videos
        </Typography> 
        <Videos videos={videos} /> 
      </Box>
  )
}

export default SearchFeed;