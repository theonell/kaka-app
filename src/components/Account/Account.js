import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import img1 from '../../images/ewe.png'
import img2 from '../../images/eds.png'
import img3 from '../../images/credit.png'
import './account.css'

class Account extends Component {
  state = {
    data: [
      {
        id: 13,
        src: img1,
        money: 26.60,
        text1: '现金余额',
        text2: '提现',
        path: 'withdraw'
      },
      {
        id: 14,
        src: img2,
        money: 180.00,
        text1: '积分余额',
        text2: '兑现',
        path: 'cash'
      }
    ]
  }
  // componentDidMount() {
  //   const num = this.props.location.state
  //   const { data } = this.state
  //   data[1].money = data[1].money - num
  //   this.setState({
  //     data: data
  //   })
  // }
  
  render() {
    const { data } = this.state
    return (
      <div className='account-wrap'>
        <header>
          <i onClick={()=>{this.props.history.goBack()}}></i>
          <span>我的账户</span>
          <i></i>
        </header>
        {
          data.map( item => {
            return (
              <div className='account-content' key={item.id}>
                <img src={ item.src } alt="加载失败"/>
                <span>
                  <i>{ item.text1 }</i>
                  <i>{ item.money.toFixed(2) }</i>
                </span>
                <span><Link to={{pathname:`/user/account/${item.path}`,state:{item}}} >{item.text2}</Link></span>
              </div>
            )
          })
        }
        <img src={ img3 } alt="加载失败"/>
        <div>
          <span onClick={()=>{this.props.history.push('/user/account/particulars')}}>
            <i></i>
            <i>收支明细</i>
          </span>
          <span onClick={()=>{this.props.history.push('/user/account/question')}}>
            <i></i>
            <i>常见问题</i>
          </span>
        </div>
      </div>
    )
  }
}

export default Account