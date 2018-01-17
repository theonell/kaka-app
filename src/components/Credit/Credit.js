import React, { Component } from 'react'
import './credit.css'
import { Link } from 'react-router-dom'


class Credit extends Component {
  state = {
    data: [ 
      {
        id: 15,
        num: 10
      },
      {
        id: 16,
        num: 30
      },
      {
        id: 17,
        num: 50
      },
      {
        id: 18,
        num: 100
      },
      {
        id: 19,
        num: 200
      },
      {
        id: 20,
        num: 500
      },
      {
        id: 21,
        num: 1000
      }
    ],
    score: 0
  }
  
onChange(checked) {
  console.log(`switch to ${checked}`);
}

  handleChange = e => {
    this.setState({
      score: e.target.value
    })
  }

  handleClick = item => {
    this.setState({
      score: item
    })
  }
  render() {
    return (
      <div className='credit-wrap'>
        <header>
          <span onClick={()=>{this.props.history.goBack()}}>取消</span>
          <span>积分充值</span>
          <i></i>
        </header>
        <span>10元=100积分</span>
        <span>选择充值金额</span>
        {/* <div className='score1'>
          <span>10积分</span>
          <span>30积分</span>
          <span>50积分</span>
          <span>100积分</span>
        </div>
        <div className='score2'>
          <span>200积分</span>
          <span>500积分</span>
          <span>1000积分</span>
          <span></span>
        </div> */}
        
        <div className="score">
        {
          this.state.data.map( item => {
            return (
              <span
                key={item.id}
                onClick={
                  ()=>this.handleClick(item.num)
                }
                className={this.state.score===item.num?'active':''}
                >{item.num}积分</span>
            )
          })
        }
          <span></span>
        </div>
        <div>
          其他：<input type="text" value={this.state.score} onChange={this.handleChange}/> 积分
        </div>
        <span>选择支付方式</span>
        <div className='pay-style'>
          <span>
            微信支付
          </span>
          <span>
            支付宝
          </span>
        </div>
        <div>
          支付金额：{(this.state.score/100).toFixed(2)}元
        </div>
        <Link to='/user/credit/pay-succeed'>确定</Link>
      </div>
    )
  }
}

export default Credit