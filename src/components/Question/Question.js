import React, { Component } from 'react'
import './question.css'

class Question extends Component {
  state = {
    data: [
      {
        id: 33,
        user1: 'Q',
        user2: 'A',
        ask: '提现后多长时间可以到我的支付宝账户？',
        anwser: '您申请提现以后，系统会马上处理您的提现申请，一般情况下24小时内会到账，遇周末或节假日特色情况下会顺延到工作日处理，处理成功后会收到体统的提示。'
      },
      {
        id: 34,
        user1: 'Q',
        user2: 'A',
        ask: '提现会收手续费吗？',
        anwser: '会的，由于第三方支付渠道（支付宝、微信）需要收取一定的手续费，同时，作为提供服务所得回报，随享会对每笔收入收取2%的服务费。受第三方支付渠道政策调整或其他因素，随享有权随时调整服务费率。'
      }
    ]
  }
  render() {
    const { data } = this.state
    return (
      <div className='question-wrap'>
        <header>
          <i onClick={()=>{this.props.history.goBack()}}></i>
          <span>常见问题</span>
          <i></i>
        </header>
        {
          data.map( item => {
            return (
              <div key={ item.id }>
                <span>
                  <i>{ item.user1 } : </i>
                  <i>{ item.ask }</i>
                </span>
                <span>
                  <i>{ item.user2 } : </i>
                  <i>{ item.anwser }</i>
                </span>
              </div>
            )
          })
        }
      </div>
    )
  }
}

export default Question