import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { demoChannelTitle, demoChannelUrl, demoVideoUrl } from '../utils/constants'
import { CheckCircle } from '@mui/icons-material'

const VideoCard = ({ video }) => {

    const { channelId, channelThumbnail, channelTitle, title, publishDate, thumbnail, videoId, viewCount } = video

    return (
        <Card sx={{
            width: { xs: '320px', md: '358px' },
            boxShadow: 'none',
            borderRadius: 'none'
        }}>
            <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
                <CardMedia
                    image={thumbnail[0]?.url}
                    alt={title}
                    sx={{
                        width: {
                            xs: '320px', md: '358px'
                        },
                        height: 180
                    }}
                />
            </Link>
            <CardContent sx={{ backgroundColor: 'black', height: '90px' }} >
                <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
                    <Typography variant='subtitle1' fontWeight="bold" color="#fff">
                        {title.slice(0, 60) || demoChannelTitle.slice(0, 60)}...
                    </Typography>
                </Link>
                <Link to={channelId ? `/channel/${channelId}` : demoChannelUrl}>
                    <Typography
                        variant='subtitle2'
                        fontWeight="bold"
                        color="grey"
                        sx={{
                            display: 'flex',
                            alignItems: 'center'
                        }}
                    >
                        {channelTitle || demoChannelTitle}
                        <CheckCircle sx={{ fontSize: 14, color: 'gray', ml: '5px' }} />
                    </Typography>
                </Link>

            </CardContent>
        </Card>
    )
}

export default VideoCard