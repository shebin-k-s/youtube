import { useState, useEffect } from 'react'
import { Box, Stack, Typography, useTheme } from '@mui/material'
import { Videos } from './'

import { fetchFromAPI } from '../utils/FetchFromAPI'
import { useParams } from 'react-router-dom'

const SearchFeed = () => {
  const theme = useTheme();

  const {searchTerm} = useParams()
  const [videos, setVideos] = useState([])

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
      .then((data) => {
        setVideos(data.items)
      })

  }, [searchTerm])

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