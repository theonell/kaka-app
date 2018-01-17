import React, { Component } from 'react'
import './cash.css'
import score from '../../images/score.png'
import Link from 'react-router-dom/Link';

class Cash extends Component {
  state = {
    value: ''
  }

  handleChange = e => {
    this.setState({
      value: e.target.value
    })
  }

  handleClick = () => {
    this.setState({
      value: this.props.location.state.item.money.toFixed(2)
    })
  }
  render() {
    const item = this.props.location.state.item

    return (
      <div className='cash-wrap'>
        <header>
          <span onClick={() => { this.props.history.goBack() }}>取消</span>
          <span>零钱提现</span>
          <i></i>
        </header>
        <div>
          <img src={ score } alt="加载失败"/>
          <span>
            积分兑换
          </span>
          <input type="text" value={this.state.value} onChange={this.handleChange}/>
          <p>积分余额{item.money.toFixed(2)}，<span onClick={this.handleClick}>全部兑换</span></p>
          <Link to={{pathname:'/user/account/cash-sure',state:this.state.value}}>确定</Link>
          <span>
            2小时内到账
          </span>
        </div>
      </div>
    )
  }
}

export default Cash