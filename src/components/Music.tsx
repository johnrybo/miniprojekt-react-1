import React, { Component, CSSProperties } from "react";
import ReactAudioPlayer from 'react-audio-player';
import mp3 from "./assets/songbirds.mp3";

interface State {
  mp3: any;
}

export default class Music extends Component{
  state: State = {
    mp3: ""
  }
  

  render() {
    return <ReactAudioPlayer style={audioPlayer} src={mp3} autoPlay controls/>
  }
}

const audioPlayer: CSSProperties = {
   display: "none"
}
