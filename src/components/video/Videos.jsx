import { Box, Stack } from '@mui/material'
import React from 'react'
import { VideoCard, ChannelCard, SkeletonVideoCard } from '..'

const Videos = ({ videos, maxHeight }) => {
  console.log(videos)
  const screen_width = window.innerWidth;

  return (

    <Stack
      direction={'row'}
      flexWrap='wrap'
      justifyContent='start'
      gap={2}
      overflow='auto'
      maxHeight={maxHeight || "80vh"}
      sx={{ justifyContent: 'center' }}


    >
      {
        videos?.map((item, idx) => (
          (item.type === 'video' || item.type === 'channel') && (
            <Box key={idx}>
              {item.type === 'video' && <VideoCard video={item} />}
              {item.type === 'channel' && <ChannelCard channelDetail={item} width={screen_width >= 600 ? '336px' : '350px'}
              />}
            </Box>
          )
        ))
        ||
        
        <>
        <SkeletonVideoCard />
        <SkeletonVideoCard />
        <SkeletonVideoCard />
        <SkeletonVideoCard />
        <SkeletonVideoCard />
        <SkeletonVideoCard />
        <SkeletonVideoCard />
        <SkeletonVideoCard />
        <SkeletonVideoCard />
        </>
        

      }

    </Stack>
  )
}

export default Videos