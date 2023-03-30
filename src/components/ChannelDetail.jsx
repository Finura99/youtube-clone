import React from 'react'
import {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import {Box} from '@mui/material';

import { Videos, ChannelCard} from './';
import { fetchFromAPI } from '../utils/fetchFromAPI';

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState();
  const [videos, setVideos] = useState([])



  const { id} = useParams();



  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${id}`)
      .then((data) => setChannelDetail(data?.items[0]));

      fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`)
      .then((data) => setVideos(data?.items));
  },[id])


  return (
    <Box minHeight="95vh" >
      


    </Box>
  )
  }

export default ChannelDetail