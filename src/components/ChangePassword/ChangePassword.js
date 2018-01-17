import React, { Component } from 'react'
import './change-password.css'

class ChangePassword extends Component {
  state = {
    value1: '',
    value2: '',
    value3: ''
  }

  handleChange1 = e => {
    this.setState({
      value1: e.target.value
    })
  }
  handleChange2 = e => {
    this.setState({
      value2: e.target.value
    })
  }
  handleChange3 = e => {
    this.setState({
      value3: e.target.value
    })
  }
  handleClick = () => {
    alert(1)
  }
  render() {
    return (
      <div className='change-password-wrap'>
        <header>
          <i onClick={() => { this.props.history.goBack() }}></i>
          <span>修改密码</span>
        </header>
        <input
          type="password"
          value={this.state.value1}
          placeholder='请输入原始密码'
          onChange={this.handleChange1}
        />
        <input
          type="password"
          value={this.state.value2}
          placeholder='请输入新密码'
          onChange={this.handleChange2}
        />
        <input
          type="password"
          value={this.state.value3}
          placeholder='请再次输入新密码'
          onChange={this.handleChange3}
        />
        <span onClick={this.handleClick}>保存</span>
      </div>
    )
  }
}

export default ChangePassword