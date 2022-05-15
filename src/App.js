import React from 'react'
import { Grid, LinearProgress } from '@mui/material';
import {SearchBar,VideoDetail,VideoList} from "./components"
import youtube from './api/youtube'
import { keyframes } from "styled-components";

class App extends React.Component{
  state ={
    videos: [],
    selectedVideo: null,
  }
  onVideoSelect =(video) =>{
    this.setState({selectedVideo: video});
  }

  handleSubmit = async(searchTerm) => {
    const response = await youtube.get('search', {
      params: {
        q: searchTerm,
        key: 'AIzaSyBk3CAROcmNJgHBPJEwo4H7o85eWhsmkBI',
        part: 'snippet',
        maxResults: 3,
    }
  });
    console.log(response.data.items);
    this.setState({videos: response.data.items, selectedVideo: response.data.items[0] })
  }
  render(){
      const { selectedVideo,videos }= this.state;
      return(
          <Grid justify="center" container spacing={10} style={{backgroundImage: 'linear-gradient(-45deg,hsl(233, 47%, 0%),hsl(233, 47%, 20%),hsl(233, 47%,50%),hsl(233, 47%, 25%),hsl(233, 47%, 1%)'
            ,backgroundSize: '400% 400%', height:"140vh"}} >
            <Grid item xs={12}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <SearchBar onFormSubmit = {this.handleSubmit}/>
                </Grid>
                <Grid item xs={12}>
                  <h1 style={{color: 'white', fontSize: '3em'}}>Search to play your favourite songs🎶</h1>
                  <LinearProgress/>
                </Grid>
                <Grid item xs={7}>
                  <VideoDetail video ={selectedVideo} style={{border: '2px solid red'}}/>
                </Grid>
                <Grid item xs={4}>
                  <VideoList videos={videos} onVideoSelect={this.onVideoSelect}/>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
      )
  }
}

export default App