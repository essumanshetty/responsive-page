import React from 'react';
import {Box} from '@mui/material';
import Card from './Card';

function MainFeed() {
    return(
        <Box flex={4} sx={{ padding:'8px'}}>
            <Card/>
            <Card/>
            <Card/>
        </Box>
    )
}

export default MainFeed;