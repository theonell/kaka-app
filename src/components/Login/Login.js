import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './login.css'
import logo from '../../images/apple-touch-icon.png'
import qq from '../../images/qq.jpg'
import weibo from '../../images/weibo.jpeg'
import weixin from '../../images/weixin.jpeg'

class Login extends Component {
  state = {
    username: '',
    password: ''
  }

  handleUsername = e => {
    this.setState({
      username: e.target.value
    })
  }
  handlePassword = e => {
    this.setState({
      password: e.target.value
    })
  }
  render() {
    const { username, password } = this.state
    sessionStorage.username = 'theonell'
    sessionStorage.password = '123456'
    return (
      <div className='login'>
        <img src={logo} alt="加载失败"/>
        <div className='login-info'>
          <input type="text" value={ username } onChange={ this.handleUsername }/>
          <input type="password" value={ password } onChange={ this.handlePassword }/>
        </div>
        <div className='reset'>
          <span>忘记密码?</span>
          <span>重置</span>
        </div>
        <Link 
          to = {
            sessionStorage.username === username && sessionStorage.password === password ? '/home' : '/error'
          }
        >登录</Link>
        <div className='other'>
          <i></i>or
          <i></i>
        </div>
        <div className="share">
          <img src={weixin} alt="加载失败"/>
          <img src={qq} alt="加载失败"/>
          <img src={weibo} alt="加载失败"/>
        </div>
        <Link to='/home'>随便看看</Link>
      </div>
    )
  }
}

export default Login