import React from 'react';
import { CardMedia } from '@mui/material';

const VideoCardImage = ({ thumbnail, title }) => {
    return (
        <CardMedia
            image={thumbnail?.url}
            alt={title}
            sx={{
                width: {
                    xs: '350px',
                    md: '336px',
                },
                // height: 188,
                height:'200px'
            }}
        />
    )
};

export default VideoCardImage;
