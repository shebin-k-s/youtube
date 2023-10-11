import { Box, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { demoProfilePicture } from '../utils/constants'
import { CheckCircle } from '@mui/icons-material'

const ChannelCard = ({ channelDetail, marginTop, width }) => {

  if (!channelDetail) return 'Loading...'
  const { channelId, channelTitle, thumbnail, subscriberCount } = channelDetail
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
          <CardMedia
            image={thumbnail ?.url || demoProfilePicture}
            alt={channelTitle}
            sx={{
              borderRadius: '50%',
              height: '180px',
              width: '180px',
              mb: '2',
              border: '1px solid e3e3e3'
            }}
          />
          <Typography variant='h6'>
            {channelTitle}
            <CheckCircle sx={{ fontSize: 14, color: 'gray', ml: '5px' }} />
          </Typography>
          <Typography>
            {subscriberCount} Subscribers
          </Typography>


        </CardContent>

      </Link>

    </Box>
  )
}

export default ChannelCard