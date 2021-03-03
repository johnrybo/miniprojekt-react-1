import React, { Component, CSSProperties } from "react";
import ReactAudioPlayer from 'react-audio-player';
// @ts-ignore
import mp3 from "./assets/songbirds.mp3";

export default class Music extends Component{

  render() {
    return <ReactAudioPlayer style={audioPlayer} src={mp3} autoPlay controls/>
  }
}

const audioPlayer: CSSProperties = {
   display: "none"
}
