import React, { Component } from 'react'
import './paysucceed.css'
import weixin from '../../images/weixin.jpeg'
import { Link } from 'react-router-dom'

class Paysucceed extends Component {
  render() {
    return (
      <div className='pay-succeed-wrap'>
        <header>
          支付成功
        </header>
        <img src={weixin} alt="加载失败" />
        <span>支付成功</span>
        <span>预计10分钟到账，充值遇到高峰期可能会延迟</span>
        <Link to='/user'>完成</Link>
      </div>
    )
  }
}

export default Paysucceed
