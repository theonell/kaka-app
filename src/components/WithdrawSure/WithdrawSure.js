import React, { Component } from 'react'
import './withdraw-sure.css'
import { Link } from 'react-router-dom'
import cash from '../../images/cash.jpeg'

class WithdrawSure extends Component {
  render() {
    const val = Number(this.props.location.state)
    return (
      <div className='withdraw-sure-wrap'>
        <header>
          提现详情
        </header>
        <img src={cash} alt="加载失败" />
        <span>提现申请已提交</span>
        <div>
          <span>
            <i>预计到账时间</i>
            <i>2017-03-05 12:14:44</i>
          </span>
          <span>
            <i>储蓄卡</i>
            <i>工商银行 尾号9647</i>
          </span>
          <span>
            <i>提现金额</i>
            <i>￥ {val.toFixed(2)}</i>
          </span>
          <span>
            <i>手续费</i>
            <i>B {(val * 0.01 / 26).toFixed(2)}</i>
          </span>
        </div>
        <Link to={{ pathname: '/user', state: val }}>完成</Link>
      </div>
    )
  }
}

export default WithdrawSure
