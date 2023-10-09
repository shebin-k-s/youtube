import { Box, Stack, Typography } from '@mui/material'
import { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import { fetchFromAPI } from '../utils/FetchFromAPI';
import { Link, useParams } from 'react-router-dom';
import { CheckCircle } from '@mui/icons-material';
import numeral from 'numeral';
import { Videos } from './';

const VideoDetail = () => {

  const [videoDetail, setVideoDetail] = useState(null);
  const [videos, setVideos] = useState();

  const { id } = useParams();

  useEffect(() => {
    fetchFromAPI(`video/info?id=${id}&extend=1`)
      .then((data) => {
        console.log(data)
        setVideoDetail(data)
      })

    fetchFromAPI(`related?id=${id}`)
      .then((data) => {
        setVideos(data.data)
      })

  }, [id])

  if (!videoDetail) return 'Loading...'
  const { channelId, channelThumbnail, channelTitle, description, publishDate, title, likeCount, viewCount } = videoDetail

  return (
    <Box minHeight="90vh">
      <Stack direction={{ xs: "column", md: 'row' }}>
        <Box flex={3} sx={{ maxHeight: '90vh', overflowY: 'auto' }}>
          <Box sx={{ width: '100%', position: 'sticky', top: '86px'}}>
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              className="react-player"
              controls
            />
            <Typography color="#fff" variant='h5' fontWeight="bold" p={2}>
              {title}
            </Typography>
            <Stack direction="row" justifyContent="space-between" sx={{ color: '#fff' }} py={1} px={2}>
              <Link to={`/channel/${channelId}`}>
                <Typography
                  variant={{ sm: 'subtitle1', md: 'h6' }}
                  color='#fff'
                >
                  {channelTitle}
                  <CheckCircle sx={{ fontSize: '12px', color: 'gray', ml: '5px' }} />
                </Typography>
              </Link>
              <Stack direction="row" gap="20px" alignItems="center">
                <Typography variant='body1' sx={{ opacity: 0.7 }}>
                  {numeral(viewCount).format('0.0a')} views
                </Typography>
                <Typography variant='body1' sx={{ opacity: 0.7 }}>
                  {numeral(likeCount).format('0.0a')} likes
                </Typography>
              </Stack>
            </Stack>
              <ol>
                <li>s</li>
                <li>s</li>
                <li>s</li>
                <li>s</li>
              </ol>
          </Box>
        </Box>
        <Box
          flex={1}
          px={2}
          py={{ md: 0, xs: 5 }}
          justifyContent="center"
          alignItems="center"
          sx={{ maxHeight: '90vh', overflowY: 'auto' }}


        >
          <Videos videos={videos} maxHeight={'100%'} />
        </Box>
      </Stack >

    </Box >

  )
}

export default VideoDetail