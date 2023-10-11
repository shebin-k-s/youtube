import { useState, useEffect } from 'react'
import { Box, Stack, Typography, useTheme } from '@mui/material'
import { Videos } from './'

import { fetchFromAPI } from '../utils/FetchFromAPI'
import { useParams } from 'react-router-dom'

const SearchFeed = () => {
  const theme = useTheme();

  const { searchTerm } = useParams()
  const [videos, setVideos] = useState([])

  useEffect(() => {
    fetchFromAPI(`search?query=${searchTerm}`)
      .then((data) => {
        console.log(data.data)
        const videosWithChannelDetails = data.data.map((video) => ({
          channelId: video.channelId,
          channelTitle: video.channelTitle,
          channelThumbnail: video.channelThumbnail?.[0],
          thumbnail: video.thumbnail?.[1],
          subscriberCount: video.subscriberCount,
          title: video.title,
          type: video.type,
          videoId: video.videoId,
          viewCount: video.viewCount,
          publishDate: video.publishDate
        }));

        setVideos(videosWithChannelDetails)
      })

  }, [searchTerm])

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
          Search Results for: <span style={{ color: '#F31503' }}>{searchTerm}</span>
        </Typography>

        <Videos videos={videos} />

      </Box>

    </Stack>

  )
}

export default SearchFeed