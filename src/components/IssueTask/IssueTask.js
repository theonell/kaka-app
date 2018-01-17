import React, { Component } from 'react'
import './issue-task.css'
import score from '../../images/score.png'
import position from '../../images/position.png'

class IssueTask extends Component {
  state = {
    data: [
      {
        id: 25,
        text: '想看看哈尔滨的中央大街现在的情形呢，拜托发几张照片。。',
        time: '刚刚',
        positionSrc: position,
        position: '武汉市 988km 03-010',
        scoreSrc: score,
        score: 50
      },
      {
        id: 26,
        text: '想看看安徽宏村，发几张照片和一段视频把。',
        time: '1天前',
        positionSrc: position,
        position: '武汉市 1000km 03-09',
        scoreSrc: score,
        score: 60
      }
    ]
  }
    handleClick = () => {
      this.props.history.goBack()
    }
  render() {
    const { data } = this.state
    return (
      <div className='issue-task-wrap'>
        <header>
          <i onClick={this.handleClick}></i>
          <span>以发布任务</span>
        </header>
      {
        data.map( item => {
          return (
            <div key={item.id}>
              <p>{ item.text }</p>
              <div>
                <span>{ item.time }</span>
                <img src={position} alt="加载失败"/>
                <span>{ item.position }</span>
                <img src={ score } alt="加载失败"/>
                <span>{ item.score }</span>
              </div>
            </div>
          )
        })
      }
      </div>
    )
  }
}

export default IssueTask