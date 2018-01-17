import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Header1 from '../Header1/Header1'
import imgUser from '../../images/chen.png'
import './user.css'
import img1 from '../../images/my-acount.png'
import img2 from '../../images/raw.png'
import img3 from '../../images/wet.png'
import img4 from '../../images/yytr.png'
import img5 from '../../images/ygs.png'
import img6 from '../../images/tyt.png'
import img7 from '../../images/wqee.png'
import img8 from '../../images/essa.png'
import Footer from '../Footer/Footer';

class User extends Component {
  state = {
    data: [
      {
        src: img1,
        text: '我的账户',
        path: 'account'
      },
      {
        src: img2,
        text: '积分充值',
        path: 'credit'
      },
      {
        src: img3,
        text: '已完成任务',
        path: ''
      },
      {
        src: img4,
        text: '已发布任务',
        path: ''
      },
      {
        src: img5,
        text: '我的收藏',
        path: ''
      },
      {
        src: img6,
        text: '意见反馈',
        path: 'feedback'
      },
      {
        src: img7,
        text: '关于我们',
        path: 'about'
      },
      {
        src: img8,
        text: '设置',
        path: 'settings'
      }
    ],
    src: imgUser,
    tel: '18733535695',
    num: 0
  }

  componentDidMount() {
    this.setState({
      num: this.props.location.state
    })
  }
  render() {
    const { src, tel, data } = this.state
    return (
      <div className='user-wrap'>
        <Header1 />
        <div className='user-info'>
          <span>签到</span>
          <img src={src} alt="" />
          <span>{tel}</span>
          <Link to='/user/my-card'>我的名片</Link>
        </div>
        {
          data.map((item, index) => {
            return (
              <div className='user-items' key={index}>
                <img src={item.src} alt="加载失败" />
                <Link to={`/user/${item.path}`}>
                  <i>{item.text}</i>
                  <i>{'>'}</i>
                </Link>
              </div>
            )
          })
        }
        <Footer num={this.state.num} />
      </div>
    )
  }
}

export default User
