import { useState, useEffect } from 'react'
import { Box, Stack, Typography, useTheme } from '@mui/material'
import { Sidebar, Videos } from '..'

import { fetchFromAPI } from '../../utils/FetchFromAPI'

const Feed = () => {
  const theme = useTheme();

  const [selectedCategory, setSelectedCategory] = useState('New')
  const [videos, setVideos] = useState([])

  useEffect(() => {
    setVideos(null)
    fetchFromAPI(selectedCategory!=='Trending'?`search?query=${selectedCategory}`:`trending?geo=IN`)
      .then((data) => {
        const videosWithChannelDetails = data.data.map((video) => ({
          channelId: video.channelId,
          channelTitle: video.channelTitle,
          channelThumbnail: video.channelThumbnail?.[0],
          thumbnail: video.thumbnail ? (video.thumbnail[2]??video.thumbnail[1] ?? video.thumbnail[0]) : undefined,
          subscriberCount: video.subscriberCount,
          title: video.title,
          type: video.type,
          videoId: video.videoId,
          viewCount: video.viewCount,
          publishDate: video.publishDate
        }));
        setVideos(videosWithChannelDetails)
      })

  }, [selectedCategory])

  return (
    <Stack
      sx={{
        flexDirection: { sx: "column", sm: "row" },
        height: { xs: 'auto', sm: '86vh' },
      }}
      py={2}
    >
      <Box
        sx={{
          height: '100%',
          borderRight: '1px solid #3d3d3d',
          px: { sx: 0, sm: 2 },
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <Sidebar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />

        <Typography
          className='copyright'
          variant='body2'
          sx={{
            mt: 1.5, color: '#fff', whiteSpace: 'nowrap'
          }}
        >
          Copyright 2023 @Youtube
        </Typography>
      </Box>
      <Box
        sx={{
          px: 2
        }}
      >
        <Typography
          variant='h4'
          fontWeight="bold"
          mb={2} sx={{
            color: 'white',
            [theme.breakpoints.up('md')]: {
              px: 8,
            },
          }}
        >
          {selectedCategory} <span style={{ color: '#F31503' }}>Videos</span>
        </Typography>

        <Videos videos={videos} />

      </Box>

    </Stack>

  )
}

export default Feed