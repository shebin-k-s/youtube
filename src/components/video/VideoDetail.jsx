import { Box, Stack, Typography } from '@mui/material'
import { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import { fetchFromAPI } from '../../utils/FetchFromAPI';
import { Link, useParams } from 'react-router-dom';
import { CheckCircle } from '@mui/icons-material';
import numeral from 'numeral';
import { Videos } from '..';

const VideoDetail = () => {

  const [videoDetail, setVideoDetail] = useState(null);
  const [videos, setVideos] = useState();

  const { id } = useParams();

  useEffect(() => {
    fetchFromAPI(`video/info?id=${id}&extend=1`)
      .then((data) => {
        setVideoDetail(data)
      })

    fetchFromAPI(`related?id=${id}`)
      .then((data) => {
        const videosWithChannelDetails = data.data.map((video) => ({
          channelId: video.channelId,
          channelTitle: video.channelTitle,
          channelThumbnail: video.channelThumbnail?.[0],
          thumbnail: video.thumbnail?.[1],
          title: video.title,
          type: video.type,
          videoId: video.videoId,
          viewCount: video.viewCount,
          publishDate: video.publishDate
        }));
        setVideos(videosWithChannelDetails)
      })

  }, [id])

  if (!videoDetail) return 'Loading...'
  const { channelId, channelThumbnail, channelTitle, subscriberCountText, title, likeCount, viewCount } = videoDetail

  return (
    <Box minHeight="90vh">
      <Stack direction={{ xs: "column", md: 'row' }}>
        <Box flex={3}>
          <Box sx={{ width: '100%', position: 'sticky', top: '86px' }}>
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              className="react-player"
              controls
            />
            <Typography color="#fff" variant='h5' fontWeight="bold" p={2}>
              {title}
            </Typography>
            <Stack direction="row" justifyContent="space-between" sx={{ color: '#fff', alignItems: 'center' }} py={1} px={2}>
              <Link to={`/channel/${channelId}`} style={{ display: 'flex', alignItems: 'center' }}>
                <img
                  src={channelThumbnail[0]?.url}
                  alt={channelTitle}
                  style={{ width: '30px', height: '30px', borderRadius: '50%' }}
                />
                <Stack direction='column' ml={2}>
                  <Typography
                    variant='title1'
                    fontWeight='bold'
                    fontSize={17}
                    color='#fff'
                  >
                    {channelTitle}
                    <CheckCircle sx={{ fontSize: '12px', color: 'gray', ml: '5px' }} />
                  </Typography>
                  <Typography
                    variant='subtitle2'
                    color='#fff'
                  >
                    {subscriberCountText}
                  </Typography>
                </Stack>
              </Link>
              <Stack direction="row" gap="20px" alignItems="center">
                <Typography variant='body1' sx={{ opacity: 0.7 }}>
                  {numeral(viewCount).format('0.0a').toUpperCase().replace('.0', '')} views
                </Typography>
                <Typography variant='body1' sx={{ opacity: 0.7 }}>
                  {numeral(likeCount).format('0.0a').toUpperCase().replace('.0', '')} likes
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>
        <Box
          flex={1}
          px={2}
          py={{ md: 0, xs: 5 }}
          justifyContent="center"
          alignItems="center"
        >
          <Videos videos={videos} maxHeight={'100%'} />
        </Box>
      </Stack >

    </Box >

  )
}

export default VideoDetail