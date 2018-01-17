import React, { Component } from 'react'
import './particulars.css'
import score from '../../images/score.png'

class Particulars extends Component {
  state = {
    data: [
      {
        id: 30,
        src: score,
        sign: '+10.00',
        day: '今日',
        time: '11:25',
        date: '2017-13-13'
      },
      {
        id: 31,
        src: score,
        day: '昨日',
        success: '+50.00',
        time: '14:54',
        date: '2017-03-12'
      },
      {
        id: 32,
        src: score,
        issue: '-60.00',
        day: '昨日',
        time: '14:54',
        date: '2017-03-12'
      }
    ]
  }

  render() {
    const { data } = this.state
    return (
      <div className='particulars-wrap'>
        <header>
          <i onClick={()=>{this.props.history.goBack()}}></i>
          <span>收支明细</span>
          <i></i>
        </header>
        <div>
          <span>
            本月
          </span>
          <span>
            查看本月账单>
          </span>
        </div>
        {
          data.map( item => {
            return (
              <div key={ item.id } className='detail'>
                <img src={ item.src } alt="加载失败"/>
                <span>
                  {
                    item.issue ? '发布需求' : item.success ? '完成任务' : item.sign ? '签到奖励' : ''
                  }
                </span>
                <span>
                  {
                    item.issue || item.success || item.sign
                  }
                </span>
                <div>
                  <span>{ item.day }</span>
                  <span>{ item.time }</span>
                </div>
                <span>{ item.date }</span>
              </div>
            )
          })
        }
      </div>
    )
  }
}

export default Particulars