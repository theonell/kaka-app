import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './withdraw.css'

class Withdraw extends Component {
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
      <div className='withdraw-wrap'>
        <header>
          <span onClick={()=>{this.props.history.goBack()}}>取消</span>
          <span>零钱提现</span>
          <i></i>
        </header>
        <div>
          <div>
            <span>
              到银行卡
            </span>
            <span>
              <i>工商银行（9647）</i>
              <i>提现到工商银行，手续费<span>0.2%</span></i>
            </span>
          </div>
          <div>
            <span>
              到微信账号
            </span>
            <span>
              午后的阳光（5695）
            </span>
          </div>
          <div>
            <span>
              提现余额
            </span>
            <span>
              <i>¥</i>
              <input type="text" value={this.state.value} onChange={this.handleChange}/>
            </span>
          </div>
          <p>现金余额{ item.money.toFixed(2) }，<span onClick={this.handleClick}>全部提现</span></p>
          <Link to={{pathname:'/user/account/withdraw-sure',state:this.state.value}}>提现</Link>
          <span>2小时到账</span>
        </div>
      </div>
    )
  }
}

export default Withdraw