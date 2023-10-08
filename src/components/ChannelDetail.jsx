import { useEffect, useState } from 'react'
import { fetchFromAPI } from '../utils/FetchFromAPI'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/material'
import { ChannelCard, Videos } from './'

const ChannelDetail = () => {

  const [channelDetail, setChannelDetail] = useState(null)
  const [videos, setVideos] = useState(null)


  const { id } = useParams()
  console.log(id)

  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${id}`)
      .then((data) => {
        setChannelDetail(data?.items[0])
      })

    fetchFromAPI(`search?part=snippet&channelId=${id}&order=date`)
      .then((data) => {
        console.log(data.items)
        setVideos(data?.items)
      })
  }, [id])
  return (
    <Box minHeight="90vh">
      <Box>
        <div style={{
          background: 'linear-gradient(0deg, rgba(33,91,201,1) 4%, rgba(246,43,201,0.9444444444444444) 86%)',
          height:'300px'
        }} />
        <ChannelCard channelDetail={channelDetail} marginTop="-110px" width="100%" />
      </Box>
      <Box display="flex" p="2">
          <Videos videos={videos}/>


      </Box>
    </Box>
  )
}

export default ChannelDetail