import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { demoChannelTitle, demoChannelUrl, demoThumbnailUrl, demoVideoTitle, demoVideoUrl } from '../utils/constants'
import { CheckCircle, Circle } from '@mui/icons-material'
import numeral from 'numeral'
import { formatDistanceToNow } from 'date-fns'
import LinesEllipsis from 'react-lines-ellipsis'

const VideoCard = ({ video }) => {

    const { channelId, channelThumbnail, channelTitle, title, publishDate, thumbnail, videoId, viewCount } = video

    const publishedDate = new Date(publishDate)
    const relativeTime = formatDistanceToNow(publishedDate, { addSuffix: true });

    return (
        <Card sx={{
            width: { xs: '320px', md: '336px' },
            boxShadow: 'none',
            borderRadius: 'none'
        }}>
            <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
                <CardMedia
                    image={thumbnail?.url}
                    alt={title}
                    sx={{
                        width: {
                            xs: '320px', md: '336px'
                        },
                        height: 188
                    }}
                />
            </Link>
            <CardContent sx={{ backgroundColor: 'black', height: '90px', display: 'flex' }} >
                <Box sx={{ marginRight: '16px' }}>
                    <Link to={channelId ? `/channel/${channelId}` : demoChannelUrl}>
                        <img
                            src={channelThumbnail?.url}
                            alt={channelTitle}
                            style={{ width: '40px', height: '40px', borderRadius: '50%' }}
                        />
                    </Link>
                </Box>
                <Box>
                    <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
                        <Typography variant='subtitle1' fontWeight="bold" color="#fff" sx={{ lineHeight: '1.3' }}>
                            <LinesEllipsis
                                text={title || demoChannelTitle.slice(0, 60)}
                                maxLine="2"
                                ellipsis="..."
                                trimRight
                                basedOn="letters"
                            />
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
                    <Typography
                        variant='subtitle2'
                        fontWeight=""
                        color="grey"
                        sx={{
                            display: 'flex',
                            alignItems: 'center'
                        }}
                    >
                        {numeral(viewCount).format('0.0a').toUpperCase().replace('.0', '')} views
                        <Circle sx={{ fontSize: 4, marginLeft: '10px', marginRight: '3px' }} />
                        {relativeTime}

                    </Typography>

                </Box>

            </CardContent>
        </Card>
    )
}

export default VideoCard