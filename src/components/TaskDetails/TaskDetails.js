import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Modal } from 'antd'
import warning from '../../images/warning.png'
import './taskdetails.css'

class TaskDetails extends Component {
  state = {
    visible: true,
    checked: false
  }

  componentDidMount(){
    if(sessionStorage.checked === 'false'){
      this.setState({
        visible: false
      })
    }
  }

  handleChange = () => {
    this.setState({
      checked:!this.state.checked
    })
  }

  handleClick = () => {
    this.setState({
      visible: false
    })
    if(this.state.checked){
      sessionStorage.checked = false
    }
  }
  render() {
    const data = this.props.location.state

    return (
      <div className='task-details-wrap' id='task'>
        <header>
          <span onClick={()=>this.props.history.goBack()}></span>
          <span>任务详情</span>
          <span></span>
        </header>
        <div className='task-details-content'>
          <div>
            <img src={data.src} alt="加载失败"/>
            <span>
              <i>{data.username}</i>
              <i></i>
            </span>
          </div>
          <div>
            <p>{data.content}</p>
            <div>
              <div>
                <i></i>
                <span>{data.position}</span>
                <span>{data.time}</span>
              </div>
              <div>
                <i></i>
                <span>{data.score}</span>
              </div>
            </div>
          </div>
        </div>
        <div>
          <Link to='/reply'>接受任务</Link>
        </div>
        <div id='one'>
          <Modal
            visible={ this.state.visible }
            footer={null}
            closable={false}
            getContainer={()=>document.getElementById('one')}
            style={{backgroundColor:'rgba(0,0,0,0)'}}
          >
            <img src={warning} alt="加载失败"/>
            <span>注意事项</span>
            <div>
              <span>1.请尽量发布真实、有价值的问题答案</span>
              <span>2.发送内容支持最多5张照片、视频时间不可超过10s</span>
            </div>
            <div>
              <span>1.所有发送内容都会被审查</span>
              <span>2.禁止发送色情、血腥暴力等不当内容</span>
              <span>3.如有违反《随享咔咔内容条约》将会受到相应的惩罚，严重者追究法律责任</span>
            </div>
            <span onClick={this.handleClick}>我知道了</span>
            <div>
              <input type="checkbox" onChange={this.handleChange} checked={this.state.checked}/><span>不再提示</span>
            </div>
          </Modal>
        </div>
      </div>
    )
  }
}

export default TaskDetails;
