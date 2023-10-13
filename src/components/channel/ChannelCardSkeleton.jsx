import { Box, CardContent, CardMedia, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import VideoCardSkeleton from '../skeleton/videoCardSkeleton'

const ChannelCardSkeleton = ({ marginTop, width }) => {

    return (

        <Box
            sx={{
                boxShadow: 'none',
                borderRadius: '20px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop,
                width

            }}

        >
            <CardContent
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    textAlign: 'center',
                    color: '#fff',
                }}>

                <VideoCardSkeleton sx={{
                    borderRadius: '50%',
                    height: '180px',
                    width: '180px',
                    mb: '2',
                    border: '1px solid e3e3e3'
                }} />

                <Box sx={{ width: '100%', paddingY: '20px' }}>
                    <Box sx={{ width: '90%', height: '20px', backgroundColor: '#252525', borderRadius: '10px' }} />
                    <Box sx={{ width: '70%', height: '20px', backgroundColor: '#252525', marginTop: '10px', borderRadius: '10px' }} />
                </Box>


            </CardContent>


        </Box>
    )
}

export default ChannelCardSkeleton