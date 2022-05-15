import React from 'react'
import { Grid, Paper, Typography } from '@mui/material'
const VideoItem = ({video, onVideoSelect}) => {
  return (
    // <h1>video item</h1>
    <Grid item xs={12} >
        <Paper style={{display: 'flex', alignItems: 'center', cursor: 'pointer', backgroundColor: 'hsl(244, 38%, 16%)', color: 'white'}} onClick={() => onVideoSelect(video)}>
            <img alt="thumbnail" src={video.snippet.thumbnails.medium.url}/>
            <Typography variant="subtitle1" style={{display: 'flex', justifyContent: 'center', paddingLeft: '10px'}}><b>{video.snippet.title}</b></Typography>
        </Paper>
    </Grid>
  )
}

export default VideoItem