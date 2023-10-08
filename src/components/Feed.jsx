import { useState, useEffect } from 'react'
import { Box, Stack, Typography, useTheme } from '@mui/material'
import { Sidebar, Videos } from './'

import { fetchFromAPI } from '../utils/FetchFromAPI'

const Feed = () => {
  const theme = useTheme();

  const [selectedCategory, setSelectedCategory] = useState('New')
  const [videos, setVideos] = useState([])

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
      .then((data) => {
        setVideos(data.items)
      })

  }, [selectedCategory])

  return (
    <Stack
      sx={{
        flexDirection: { sx: "column", sm: "row" },
        height: { xs: 'auto', sm: '86vh' }, // Use vh unit for height
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