import React from 'react'
import AlarmPicker from './AlarmPicker.js'

export default class Clock extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      date:new Date(),
      timezone:1,
      timestamp:[new Date().getHours().toString(), new Date().getMinutes().toString(), new Date().getSeconds().toString()],
      alarm:null
    }
  }

componentDidMount(){
  setInterval(
    () => {
      let date = new Date();
      this.setState({
        year: date.getYear(),
        month: date.getMonth(),
        day: date.getDate(),

        timestamp: [
          date.getHours().toString(),
          date.getMinutes().toString(),
          date.getSeconds().toString(),
        ]
      })
    }, 1000)
}

  deleteAlarm(){
    this.setState({alarm:null})
  }

  addAlarm(e){
    console.log(e)
  }


  renderZerosPadding(array){
    let zeroString = "0"
    for (let i = 0; i < array.length; i++) {
      if (parseInt(array[i]) < 10) {
        array[i] = ''.concat(zeroString, array[i])
      }
    }
    return(array.join(":"))
  }

  renderNextAlarm(){
    if (this.state.alarm !== null){
      let alarmString = this.renderZerosPadding(this.state.alarm)
      return(
        <>
          <h2> Next alarm:</h2>
            <p>{alarmString}</p>
            <button onClick = {this.deleteAlarm}/>
        </>
      )
    }
    else{
      return(<AlarmPicker addDate={this.addAlarm}/>)
    }
  }

  render(){
    return(
      <div className = "clock_container">
        <h1>{this.renderZerosPadding(this.state.timestamp)}</h1>
        {this.renderNextAlarm()}
      </div>
    )
  }
}
