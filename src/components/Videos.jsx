import { Box, Stack } from '@mui/material'
import React from 'react'
import { VideoCard, ChannelCard } from './'

const Videos = ({ videos, maxHeight }) => {
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
          {item.type === 'video' && <VideoCard video={item} />}
          {item.type === 'channel' && <ChannelCard channelDetail={item} width="350px" />}
        </Box>
      ))}

    </Stack>
  )
}

export default Videos