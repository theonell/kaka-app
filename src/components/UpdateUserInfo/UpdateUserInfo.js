import React, { Component } from 'react'
import chen from '../../images/chen.png'
import './update-user-info.css'

class UpdateUserInfo extends Component {
  state = {
    src: chen,
    nickname: 'xx、超',
    sex: '男',
    age: 22,
    address: '北京市 朝阳区'
  }
  render() {
    const { src, nickname, sex, age, address } = this.state
    const val = this.props.location.state
    return (
      <div className='update-user-info-wrap'>
        <header>
          <i onClick={() => { this.props.history.push('/user') }}></i>
          <span>修改个人资料</span>
        </header>
        <div>
          <img src={src} alt="加载失败" />
          <span>点击更换头像</span>
        </div>
        <div>
          <span>
            <i>昵称</i>
            <i>{nickname}</i>
            <i>{'>'}</i>
          </span>
          <span>
            <i>性别</i>
            <i>{sex}</i>
            <i>{'>'}</i>
          </span>
          <span>
            <i>年龄</i>
            <i>{age}</i>
            <i>{'>'}</i>
          </span>
          <span>
            <i>现居地</i>
            <i>{address}</i>
            <i>{'>'}</i>
          </span>
          <span onClick={() => { this.props.history.push('/user/settings/personality-signature') }}>
            <i>个性签名</i>
            <i>{val}</i>
            <i>{'>'}</i>
          </span>
        </div>
      </div>
    )
  }
}

export default UpdateUserInfo
