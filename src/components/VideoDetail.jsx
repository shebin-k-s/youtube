import { Box, Stack, Typography } from '@mui/material'
import { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import { fetchFromAPI } from '../utils/FetchFromAPI';
import { Link, useParams } from 'react-router-dom';
import { CheckCircle } from '@mui/icons-material';
import numeral from 'numeral';
import { Videos } from './';

const VideoDetail = () => {

  const [videoDetail, setVideoDetail] = useState();
  const [videos, setVideos] = useState();

  const { id } = useParams();

  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`)
      .then((data) => setVideoDetail(data.items[0]))

    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`)
      .then((data) => setVideos(data.items))

  }, [id])

  if (!videoDetail?.snippet) return 'Loading...'

  const { snippet: { title, channelId, channelTitle },
    statistics: { viewCount, likeCount } } = videoDetail;

  return (
    <Box minHeight="90vh">
      <Stack direction={{ xs: "column", md: 'row' }}>
        <Box flex={10}>
          <Box sx={{ width: '100%', position: 'sticky', top: '86px' }}>
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
          </Box>
        </Box>
        <Box
          flex={1}
          px={2}
          py={{ md: 0, xs: 5 }}
          justifyContent="center"
          alignItems="center"
        >
          <Videos videos={videos} maxHeight={'100%'}/>
        </Box>
      </Stack >

    </Box >

  )
}

export default VideoDetail