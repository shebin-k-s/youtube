import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Box } from '@mui/material'
import { ChannelDetail, Feed, Navbar, SearchFeed, SkeletonVideoCard, VideoDetail } from './components'


const App = () => {
    return (
        <BrowserRouter basename="/youtube">
            <Box sx={{ backgroundColor: '#000' }}>
            <Navbar />
            <Routes>
                <Route path='/' exact element={<Feed />} />
                <Route path='/video/:id' element={<VideoDetail />} />
                <Route path='/channel/:id' element={<ChannelDetail />} />
                <Route path='/search/:searchTerm' element={<SearchFeed />} />
            </Routes>

            </Box>
        </BrowserRouter>
        // <SkeletonVideoCard />
    )
}

export default App