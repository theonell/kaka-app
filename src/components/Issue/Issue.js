import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Modal } from 'antd'
import position from '../../images/position.png'
import './issue.css'
import 'antd/lib/modal/style/css'; 
import sys from '../../images/sys.png'

class Issue extends Component {
  state = {
    value: '',
    visible: false
  }

  showModal = () => {
    this.setState({
      visible: true,
    })
  }
  handleOk = (e) => {
    this.setState({
      visible: false,
    })
  }
  handleCancel = (e) => {
    this.setState({
      visible: false,
    })
  }

  handleChange = e => {
    this.setState({
      value: e.target.value
    })
  }
  render() {
    const { value } = this.state
    const str = '请详细描述您所需要发布帮助的具体内容，以便接收任务者的回答您所发布的要求'
    return (
      <div className='issue-wrap'>
        <header>
          <span onClick={()=>{this.props.history.goBack()}}>取消</span>
          <span>发布需求</span>
          <i></i>
        </header>
        <div>
          <textarea
            placeholder={str}
            value={value}
            onChange={this.handleChange}
          >
          </textarea>
          <span>0/200</span>
        </div>
        <div>
          <i>+</i>
          <span>添加照片、视频</span>
        </div>
        <div>
          <img src={position} alt="加载失败"/>
          <span>武汉市 武昌区</span>
        </div>
        <div>
          <span>积分</span>
          <span onClick={this.showModal}>积分余额：260</span>
        </div>
        <div>
          <span>*本次发布费用为50积分</span>
          <Link to='/issue/issue-task'>发布</Link>
          <span>发表即表示同意《随享咔咔服务发布规范》</span>
        </div>
        <div className='issue-modal'>
          <Modal
            visible={this.state.visible}
            onOk={this.handleOk}
            onCancel={this.handleCancel}
            closable={false}
            cancelText='取消'
            okText='确定'
            maskClosable={false}
          >
            <img src={sys} alt="加载失败"/>
            <span>发布金额</span>
            <span>可发布积分余额：260</span>
            <span>发布至少需要10积分</span>
          </Modal>
        </div>
      </div>
    )
  }
}

export default Issue