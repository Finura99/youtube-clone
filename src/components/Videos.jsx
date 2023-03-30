import React from 'react'
import { Stack, Box} from '@mui/material';
//import { VideoCard, ChannelCard } from './';
import VideoCard from './VideoCard';
import ChannelCard from './ChannelCard';

const Videos = ({ videos }) => {
    return (
            <Stack  direction="row" 
                    flexWrap="wrap" 
                    justifyContent="start"
                    gap={2} >
                    {videos.map((item, idx) => (
                        <Box key={idx}>
                            {item.id.videoId && <VideoCard video={item}/>}   
                        {/* //if we have an item.id.videoId then that means it should render 
                        a video card */}

                            {item.id.channelId && <ChannelCard channelDetail={item} />} 
                        {/* //if item.id.CHANNEL is true then the channel card should be rendered */}
                        </Box>   
                    ))}
            </Stack>
    )
}

export default Videos