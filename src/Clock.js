import React, {
  Component
} from 'react';
import './App.css';


class Clock extends Component {
  constructor(props){
    super(props);
    this.state = {
      days:0,
      hours: 0,
      minutes: 0,
      seconds: 0
    }
  }

//this is done here to avoid calling setState on the component itself
//which causes an infinite loop issue.
  componentWillMount() {
    this.getTimeUntil(this.props.deadline);
  }

//this is after the component has mounted
  componentDidMount() {
    setInterval(() => this.getTimeUntil(this.props.deadline), 1000)
  }

  leadingZero(num){
      return num < 10 ? "0" + num : num;
  }
  getTimeUntil(deadline) {
    const time = Date.parse(deadline) - Date.parse(new Date());

    const seconds = Math.floor((time/1000) % 60);
    const minutes = Math.floor((time/1000/60) % 60);
    const hours = Math.floor(time/(1000*60*60) % 24);
    const days = Math.floor(time/(1000*60*60*24));

    this.setState({
      days,
      hours,
      minutes,
      seconds
    })
  }
render (){

  return (
    <div>
    <div className="clock clock-days">{this.leadingZero(this.state.days)} days< /div>
    <div className="clock clock-hours"> {this.leadingZero(this.state.hours)} hours< /div>
    <div className="clock clock-minutes">{this.leadingZero(this.state.minutes)} minutes< /div>
    <div className="clock clock-seconds">{this.leadingZero(this.state.seconds)} seconds< /div>
    </div>
  )
}
}

export default Clock;
