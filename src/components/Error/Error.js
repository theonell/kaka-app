import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './error.css'

class Error extends Component {
  render() {
    return (
      <div className='error'>
        <span>用户名或密码错误</span>
        <Link to='/login'>返回</Link>
      </div>
    )
  }
}

export default Error