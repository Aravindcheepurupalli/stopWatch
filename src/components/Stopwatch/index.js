import {Component} from 'react'
import './index.css'

class StopWatch extends Component {
  state = {isTimeRunning: false, timeElapsedInSec: 0}

  componentWillUnmount() {
    clearInterval(this.timeInterval)
  }

  onResetBtn = () => {
    clearInterval(this.timeInterval)
    this.setState({isTimeRunning: false, timeElapsedInSec: 0})
  }

  onStopBtn = () => {
    clearInterval(this.timeInterval)
    this.setState({isTimeRunning: false})
  }

  updateTime = () => {
    this.setState(prevState => ({
      timeElapsedInSec: prevState.timeElapsedInSec + 1,
    }))
  }

  onStartBtn = () => {
    this.timeInterval = setInterval(this.updateTime, 1000)
    this.setState({isTimeRunning: true})
  }

  timeInSec = () => {
    const {timeElapsedInSec} = this.state
    const seconds = Math.floor(timeElapsedInSec % 60)
    if (seconds < 10) {
      return `0${seconds}`
    }
    return seconds
  }

  timeInMin = () => {
    const {timeElapsedInSec} = this.state
    const minutes = Math.floor(timeElapsedInSec / 60)
    if (minutes < 10) {
      return `0${minutes}`
    }
    return minutes
  }

  render() {
    const {isTimeRunning} = this.state
    const time = `${this.timeInMin()}:${this.timeInSec()}`
    return (
      <div className="app-container">
        <div className="stopwatch-container">
          <h1 className="heading">Stopwatch</h1>
          <div className="timer-container">
            <div className="timer">
              <img
                className="timer"
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                alt="stopwatch"
              />
              <p className="heading">Timer</p>
            </div>
            <h1 className="stopwatch-timer">{time}</h1>
            <div className="timer-buttons">
              <button
                className="start-button button"
                type="button"
                disabled={isTimeRunning}
                onClick={this.onStartBtn}
              >
                Start
              </button>
              <button
                type="button"
                onClick={this.onStopBtn}
                className="stop-button button"
              >
                Stop
              </button>
              <button
                type="button"
                onClick={this.onResetBtn}
                className="reset-button button"
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default StopWatch
