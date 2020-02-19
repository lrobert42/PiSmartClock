import React from 'react'

import News from "../Components/News.js"

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
        <h1> Clock </h1>
        <News URLs = {this.state.URLs}/>
        <h1> Todo/Calendar </h1>
        <h1> Spotify </h1>
        <h1> Lights </h1>
        <h1> Weather Forecast </h1>
      </>
    )
  }
}
