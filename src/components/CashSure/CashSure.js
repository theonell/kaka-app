import React, { Component } from 'react'
import './cash-sure.css'
import { Link } from 'react-router-dom'
import score from '../../images/score.png'

class CashSure extends Component {
  render() {
    const val = Number(this.props.location.state)
    return (
      <div className='cash-sure-wrap'>
        <header>
          兑换详情
        </header>
        <img src={score} alt="加载失败" />
        <span>提现申请已提交</span>
        <div>
          <span>
            <i>预计到账时间</i>
            <i>2017-03-05 12:14:44</i>
          </span>
          <span>
            <i>到账号</i>
            <i>chen xx</i>
          </span>
          <span>
            <i>兑换积分</i>
            <i>B {val.toFixed(2)}</i>
          </span>
          <span>
            <i>手续费</i>
            <i>B {(val * 10 / 600).toFixed(2)}</i>
          </span>
        </div>
        <Link to={{ pathname: '/user', state: val }}>完成</Link>
      </div>
    )
  }
}

export default CashSure
