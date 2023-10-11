import { useEffect, useState } from 'react'
import { fetchFromAPI } from '../utils/FetchFromAPI'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/material'
import { ChannelCard, Videos } from './'

const ChannelDetail = () => {

  const [channelDetail, setChannelDetail] = useState(null)
  const [videos, setVideos] = useState(null)


  const { id } = useParams()

  useEffect(() => {
    fetchFromAPI(`channel/videos?id=${id}`)
      .then((data) => {
        const channelDetails = {
          channelId: data.meta.channelId,
          channelTitle: data.meta.title,
          thumbnail: data.meta.avatar?.[2],
          subscriberCount: data.meta.subscriberCountText,
        };
        setChannelDetail(channelDetails)
        const channelId = id

        const videosWithChannelDetails = data.data.map((video) => ({
          channelId,
          channelTitle: data.meta.title,
          channelThumbnail: data.meta.avatar?.[0],
          thumbnail: video.thumbnail?.[3],
          title: video.title,
          type: video.type,
          videoId: video.videoId,
          viewCount: video.viewCount,
          publishDate: video.publishDate
        }));
        setVideos(videosWithChannelDetails)

      })
  }, [id])

  return (
    <Box minHeight="90vh">
      <Box>
        <div style={{
          background: 'linear-gradient(0deg, rgba(33,91,201,1) 4%, rgba(246,43,201,0.9444444444444444) 86%)',
          height: '300px'
        }} />
        <ChannelCard channelDetail={channelDetail} marginTop="-110px" width="100%" />
      </Box>
      <Box display="flex" p="2">
        <Videos videos={videos} />


      </Box>
    </Box>
  )
}

export default ChannelDetail