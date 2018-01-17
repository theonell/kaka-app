import React, { Component } from 'react'
import './about.css'
import logo from '../../images/apple-touch-icon.png'

class About extends Component {

  handleClick = () => {
    this.props.history.goBack()
  }
  render() {
    return (
      <div className='user-about-wrap'>
        <header>
          <i onClick={ this.handleClick }></i>
          <span>关于我们</span>
        </header>
        <div>
          <img src={ logo } alt="加载失败"/>
          <span>帮你所看，随想咔咔</span>
        </div>
        <p>官方微信：weijichao1125</p>
        <p>联系邮箱：727320883@qq.com</p>
        <p>手机号码：18733535695</p>
        <p>关于我们：</p>
        <span>一个帮你实现你现在想看所看不到的景象平台 帮你了解现在所发生到真实景象</span>
      </div>
    )
  }
}

export default About