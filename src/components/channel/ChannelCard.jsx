import { Box, CardContent, CardMedia, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { CheckCircle } from '@mui/icons-material'
import VideoCardSkeleton from '../skeleton/videoCardSkeleton'
import ChannelCardSkeleton from './ChannelCardSkeleton'

const ChannelCard = ({ channelDetail, marginTop, width }) => {


  const { channelId, channelTitle, thumbnail, subscriberCount } = channelDetail

  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const image = new Image();
    image.src = thumbnail?.url;
    image.onload = () => {
      setLoaded(true);
    };

  }, [thumbnail]);

    return (

      <Box
        sx={{
          boxShadow: 'none',
          borderRadius: '20px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop,
          width

        }}

      >
        <Link to={`/channel/${channelId}`}>
          <CardContent
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              textAlign: 'center',
              color: '#fff',
            }}>
            {
              loaded ?
                <CardMedia
                  image={thumbnail?.url}
                  alt={channelTitle}
                  sx={{
                    borderRadius: '50%',
                    height: '180px',
                    width: '180px',
                    mb: '2',
                    border: '1px solid e3e3e3'
                  }}
                />
                :
                <VideoCardSkeleton sx={{
                  borderRadius: '50%',
                  height: '180px',
                  width: '180px',
                  mb: '2',
                  border: '1px solid e3e3e3'
                }} />
            }
            <Box sx={{ paddingY: '20px' }}>

              <Typography variant='h6'>
                {channelTitle}
                <CheckCircle sx={{ fontSize: 14, color: 'gray', ml: '5px' }} />
              </Typography>
              <Typography>
                {subscriberCount} Subscribers
              </Typography>
            </Box>


          </CardContent>

        </Link>

      </Box>
    )
}

export default ChannelCard