import React, { Component } from 'react'
import './commentdetails.css'
import img1 from '../../images/08c2b1641132a2ed7d658cfb5fa8620e.png'
import img2 from '../../images/df46eff3ac91af727dea1839564f7dc0.png'

class CommentDetails extends Component {
  state = {
    data: [
      {
        id: 10,
        reply_username: 'hh',
        src: img1,
        sex: 'male',
        reply_text: '古根海姆博物馆到外部非常朴实无华，只是将博物馆到名字装饰了一下，平滑到白色混凝土覆盖在墙上，使他们仿佛更像一座巨大到雕塑而不是建筑物',
        username: 'BIG BOSS',
        text: '把你的回复读完之后我想去看一看了'
      },
      {
        id: 11,
        reply_username: '五海',
        src: img2,
        sex: 'male',
        reply_text: '光是建筑外观就与众不同啊'
      }
    ],
    value: ''
  }

  handleChange = e => {
    this.setState({
      value: e.target.value
    })
  }
  render() {
    const { data, value } = this.state
    return (
      <div className='comment-wrap'>
        <header>
          <span onClick={() => { this.props.history.goBack() }}></span>
          <span>评论详情</span>
          <span></span>
        </header>
        <div>
          <span>评论（261）</span>
            {
              data.map( item => {
                return (
                  <div key={item.id} className='comment-cnt'>
                    <img src={item.src} alt="加载失败"/>
                    <div>
                      <div>
                        <span>{item.reply_username}</span>
                        <i></i>
                      </div>
                      <p>{item.reply_text}</p>
                      {
                        item.username&&item.text ? (
                          <span><i>{item.username}</i>:{item.text}</span>
                          ) : ''
                      }
                    </div>
                  </div>
                )
              })
            }
        </div>
        <div>
            <i></i>
            <input type="text" value={value} onChange={this.handleChange}/>
            <i></i>
        </div>
      </div>
    )
  }
}

export default CommentDetails