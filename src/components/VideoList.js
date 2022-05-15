import React from 'react'
import { Grid, LinearProgress } from '@mui/material'
import VideoItem from './VideoItem'
const VideoList = ({videos,onVideoSelect}) => {
    if(!videos) return <LinearProgress />
    const listOfVideos = videos.map(( video,id ) => <VideoItem onVideoSelect={onVideoSelect}key={id} video={video}/>)
    return (
        <Grid container spacing={10}>
            {listOfVideos}
        </Grid>
    )
}

export default VideoList;