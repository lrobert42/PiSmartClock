import React from 'react'
import "../css/News.css"
let RssParser = require('rss-parser')


export default class News extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      feed:[]
    }
    this.parseRssFeed = this.parseRssFeed.bind(this)
    this.renderFeed = this.renderFeed.bind(this)
    this.openBrowserPage = this.openBrowserPage.bind(this)

  }
  openBrowserPage(link){
    console.log("Work in progress")
  }

  async parseRssFeed(){
    const CORS_PROXY = "https://cors-anywhere.herokuapp.com/"
    let parser = new RssParser();
    let newArray = []
    for (let i = 0; i < this.props.URLs.length; i++){
        let feed = await parser.parseURL(CORS_PROXY + this.props.URLs[i])

        feed.items.forEach(item => {
          newArray.push(item)
          this.setState({feed:newArray})
        })
    }
    console.log(newArray)
  }

  componentDidMount(){
    this.parseRssFeed(this.props.URLs)
  }

  renderFeed(item, index){
  return(
    <div className = "news_item" key={index} onClick={this.openBrowserPage(item.link)}>
      <h2 className="news_title">{item.title}</h2>
      <p className="news_content">{item.content}</p>
    </div>
  )}

  render(){
    return(
      <div className="news_container">
      {this.state.feed.map((item, index) =>
        (this.renderFeed(item, index)))}
      </div>
    )
  }
}
