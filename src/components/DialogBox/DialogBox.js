import React, { Component } from 'react'
import chen from '../../images/chen.png'
import anran from '../../images/anran.png'
import './dialog-box.css'

class DialogBox extends Component {
  state = {
    value: ''
  }

  handleChange = e => {
    this.setState({
      value: e.target.value
    })
  }

  handleClick = () => {
    this.props.history.goBack()
  }
  render() {
    return (
      <div className='dialog-box-wrap'>
        <header>
          <i onClick={this.handleClick}></i>
          <span>初夏</span>
        </header>
        <div>
          <span>7:48</span>
          <span>
            <i>在吗</i>
            <img src={chen} alt="加载失败"/>
          </span>
          <span>
            <img src={anran} alt="加载失败"/>
            <i>在呢</i>
          </span>
        </div>
        <div>
          <i></i>
          <input
            type="text"
            valur={this.state.value}
            onChange={this.handleChange}
          />
          <span>发送</span>
        </div>
      </div>
    )
  }
}

export default DialogBox