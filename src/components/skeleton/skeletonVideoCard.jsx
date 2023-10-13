import { Box, Card, CardContent, CardMedia } from '@mui/material'
import React from 'react'
import './skeleton.css'

const skeletonVideoCard = () => {
    return (

        <Card className='skeleton-card' sx={{
            width: { xs: '320px', md: '336px' },
            boxShadow: 'none',
            backgroundColor: 'black'
        }}>
            <CardMedia
                sx={{
                    borderRadius: '15px',
                    width: {
                        xs: '320px', md: '336px'
                    },
                    height: 188,
                    backgroundColor: '#252525'
                }}
            />
            <CardContent sx={{ backgroundColor: 'black', height: '90px', display: 'flex' }} >
                <Box sx={{ marginRight: '16px' }}>
                    <Box
                        style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#252525' }}
                    />
                </Box>
                <Box sx={{ width: '100%' }}>
                    <Box sx={{ width: '90%', height: '20px', backgroundColor: '#252525', borderRadius: '10px' }} />
                    <Box sx={{ width: '70%', height: '20px', backgroundColor: '#252525', marginTop: '10px', borderRadius: '10px' }} />
                </Box>

            </CardContent>
        </Card >
    )
}

export default skeletonVideoCard