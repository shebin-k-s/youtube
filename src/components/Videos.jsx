import { Box, Stack } from '@mui/material'
import React from 'react'
import { VideoCard, ChannelCard } from './'

const Videos = ({ videos, maxHeight }) => {
  console.log(videos)
  return (

    <Stack
      direction={'row'}
      flexWrap='wrap'
      justifyContent='start'
      gap={2}
      overflow='auto'
      maxHeight={maxHeight || "80vh"}
      sx={{ justifyContent: 'center'}}


    >
      {videos?.map((item, idx) => (
        <Box key={idx}>
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard channelDetail={item} width="350px" />}
        </Box>
      ))}

    </Stack>
  )
}

export default Videos