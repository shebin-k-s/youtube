import { Box, Card, CardContent, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { CheckCircle, Circle } from '@mui/icons-material'
import numeral from 'numeral'
import { formatDistanceToNow } from 'date-fns'
import LinesEllipsis from 'react-lines-ellipsis'
import VideoCardSkeleton from '../skeleton/videoCardSkeleton'
import VideoCardImage from './videoCardImage'

const VideoCard = ({ video }) => {

    const { channelId, channelThumbnail, channelTitle, title, publishDate, thumbnail, videoId, viewCount } = video

    const publishedDate = new Date(publishDate)
    const relativeTime = formatDistanceToNow(publishedDate, { addSuffix: true });
    const [videoImageloaded, setVideoImageLoaded] = useState(false);
    const [channelImageloaded, setChannelImageLoaded] = useState(false);

    useEffect(() => {
        const video_image = new Image();
        video_image.src = thumbnail?.url;
        video_image.onload = () => {
            setVideoImageLoaded(true);
        };

    }, [thumbnail]);

    useEffect(() => {
        const channel_image = new Image();
        channel_image.src = channelThumbnail?.url;
        channel_image.onload = () => {
            setChannelImageLoaded(true);
        };
    }, [channelThumbnail])

    return (
        <Card sx={{
            width: { xs: '320px', md: '336px' },
            boxShadow: 'none',
            borderRadius: 'none',
            backgroundColor: 'black',
            border: '0px solid #333',
        }}>

            {
                videoImageloaded ?
                    <Link to={videoId ? `/video/${videoId}` : ''}>
                        <VideoCardImage thumbnail={thumbnail} title={title} />
                    </Link>
                    :
                    <VideoCardSkeleton />
            }
            <CardContent sx={{ backgroundColor: 'black', height: '90px', display: 'flex' }} >
                <Box sx={{ marginRight: '16px' }}>
                    {channelImageloaded ?
                        <Link to={channelId ? `/channel/${channelId}`:''}>
                            <img
                                src={channelThumbnail?.url}
                                alt={channelTitle}
                                style={{ width: '40px', height: '40px', borderRadius: '50%' }}
                            />
                        </Link>
                        :
                        <Box
                            style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#252525' }}
                        />
                    }
                </Box>
                {title ?
                    <Box>
                        <Link to={videoId ? `/video/${videoId}` : ''}>
                            <Typography variant='subtitle1' fontWeight="bold" color="#fff" sx={{ lineHeight: '1.3' }}>
                                <LinesEllipsis
                                    text={title}
                                    maxLine="2"
                                    ellipsis="..."
                                    trimRight
                                    basedOn="letters"
                                />
                            </Typography>
                        </Link>
                        <Link to={channelId ? `/channel/${channelId}` : ''}>
                            <Typography
                                variant='subtitle2'
                                fontWeight="bold"
                                color="grey"
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center'
                                }}
                            >
                                {channelTitle}
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
                    :
                    <Box sx={{ width: '100%' }}>
                        <Box sx={{ width: '90%', height: '20px', backgroundColor: '#252525', borderRadius: '10px' }} />
                        <Box sx={{ width: '70%', height: '20px', backgroundColor: '#252525', marginTop: '10px', borderRadius: '10px' }} />
                    </Box>
                }

            </CardContent>
        </Card>
    )
}

export default VideoCard