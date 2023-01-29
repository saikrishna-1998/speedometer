import {Component} from 'react'

import './index.css'

class Speedometer extends Component {
  state = {count: 0}

  onIncrement = () => {
    this.setState(prevState => ({count: prevState.count + 10}))
  }

  onDecrement = () => {
    this.setState(prevState => ({count: prevState.count - 10}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="container">
        <h1 className="heading">SPEEDOMETER</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="Speedometer_image"
          className="img"
        />
        <h2 className="heading-2">Speed is {count}mph</h2>
        <p className="description">Min Limit is 0mph, Max Limit is 200mph</p>
        <button
          className="btn btn-acc"
          type="button"
          onClick={this.onIncrement}
        >
          Accelerate
        </button>
        <button
          className="btn btn-brake"
          type="button"
          onClick={this.onDecrement}
        >
          Apply Brake
        </button>
      </div>
    )
  }
}

export default Speedometer
