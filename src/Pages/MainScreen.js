import React from 'react'

import News from "../Components/News.js"
import SpotifyContainer from "../Components/Spotify.js"
import Clock from "../Components/Clock.js"

export default class MainScreen extends React.Component{
  constructor(props){
    super(props)
    this.state ={
      URLs : [
        "https://www.lemonde.fr/rss/une.xml",
        "https://www.lemonde.fr/politique/rss_full.xml"
      ]
    }
  }

  render(){
    return(
      <>
        <Clock/>
        <News URLs = {this.state.URLs}/>
        <h1> Todo/Calendar </h1>
        <SpotifyContainer />
        <h1> Lights </h1>
        <h1> Weather Forecast </h1>
      </>
    )
  }
}
