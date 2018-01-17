import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Footer from '../Footer/Footer'
import './feedback.css'

class Feedback extends Component {
  handleClick = () => {
    this.props.history.goBack()
  }
  render() {
    return (
      <div className='feedback-wrap'>
        <header>
          <i onClick={this.handleClick}></i>
          <span>意见反馈</span>
        </header>
        <span>请选择反馈类型</span>
        <p>账号问题</p>
        <p>功能反馈及其他</p>
        <p>积分兑换问题</p>
        <p>充值问题</p>
        <Link to='/home'>提交</Link>
        <Footer />
      </div>
    );
  }
}

export default Feedback;