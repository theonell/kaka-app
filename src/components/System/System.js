import React, { Component } from 'react'
import './system.css'

class System extends Component {

  handleClick = () => {
    this.props.history.goBack()
  }
  render() {
    return (
      <div className='system-wrap'>
        <header>
          <i onClick={this.handleClick}></i>
          <span>系统通知</span>
        </header>
        <div>
          <span>
            2017-01-21
          </span>
          <div>
            <span>30秒带你体验随享咔咔</span>
            <span>随享咔咔是一款可以随时随刻帮助你所想看到的任何一处场景，只要那地方有网络，有接单人，便能看见虽身不能处的地方的场景</span>
          </div>
        </div>
      </div>
    )
  }
}

export default System