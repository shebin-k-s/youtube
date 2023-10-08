import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { demoChannelTitle, demoChannelUrl, demoVideoUrl } from '../utils/constants'
import { CheckCircle } from '@mui/icons-material'

const VideoCard = ({ video: { id: { videoId }, snippet } }) => {

    return (
        <Card sx={{
            width: { xs: '320px', md: '358px' },
            boxShadow: 'none',
            borderRadius: 'none'
        }}>
            <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
                <CardMedia
                    image={snippet?.thumbnails?.high?.url}
                    alt={snippet?.title}
                    sx={{
                        width: {
                            xs: '320px', md: '358px'
                        },
                        height: 180
                    }}
                />
            </Link>
            <CardContent sx={{ backgroundColor: '#1e1e1e', height: '90px' }} >
                <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
                    <Typography variant='subtitle1' fontWeight="bold" color="#fff">
                        {snippet?.title.slice(0, 60) || demoChannelTitle.slice(0, 60)}...
                    </Typography>
                </Link>
                <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl}>
                    <Typography variant='subtitle2' fontWeight="bold" color="grey">
                        {snippet?.channelTitle || demoChannelTitle}
                        <CheckCircle sx={{ fontSize: 12, color: 'gray', ml: '5px' }} />
                    </Typography>
                </Link>

            </CardContent>
        </Card>
    )
}

export default VideoCard