import { CardMedia } from '@mui/material'
import React from 'react'
import './skeleton.css'

const videoCardSkeleton = ({ sx }) => {
    return (
        <CardMedia
            className="skeleton-card"
            sx={{
                borderRadius: '15px',
                width: {
                    xs: '350px',
                    md: '336px',
                },
                height: '200px',
                backgroundColor: '#252525',
                ...sx
            }}
        />
    )
}

export default videoCardSkeleton