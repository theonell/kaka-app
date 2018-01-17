import React, { Component } from 'react'
import Header1 from '../Header1/Header1'
import './message.css'
import sys from '../../images/sys.png'
import lida from '../../images/lingdang.png'
import img from '../../images/265324052184913970.png'
import Footer from '../Footer/Footer'

class Message extends Component {
  state = {
    data: [
      {
        id: 3,
        src: img,
        title: '初夏',
        content: '在吗',
        time: '昨天17:43',
        path: 'dialog-box'
      },
      {
        id: 4,
        src: lida,
        title: '系统通知',
        content: '30秒带你体验随享咔咔',
        time: '下午01:25',
        path: 'system'
      },
      {
        id: 5,
        src: sys,
        title: '欢迎加入随享咔咔',
        content: '主人，小咔已恭候多时了，200积分奉上，可在钱包查收。有任何建议可直接在消息中回复小咔',
        time: '2017-01-15'
      }
    ],
    num: 0
  }

  componentDidMount() {
    this.setState({
      num: this.props.location.state
    })
  }

  render() {
    const { data } = this.state
    return (
      <div className='message-wrap'>
        <Header1 />
        {
          data.map(item => {
            return (
              <div
                className='message-content'
                key={item.id}
                onClick={() => this.props.history.push(`/message/${item.path}`)}
              >
                <img src={item.src} alt="加载失败" />
                <div>
                  <span>{item.title}</span>
                  <span>
                    <i>{item.content}</i>
                    <i>{item.time}</i>
                  </span>
                </div>
              </div>
            )
          })
        }
        <Footer num={this.state.num} />
      </div>
    )
  }
}

export default Message;
