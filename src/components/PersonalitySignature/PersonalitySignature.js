import React, { Component } from 'react'
import './personality-signature.css'

class PersonalitySignature extends Component {
  state = {
    value: ''
  }

  handleChange = e => {
    this.setState({
      value: e.target.value
    })
  }

  handleClick = () => {
    this.props.history.push('/user/settings/update-user-info',this.state.value)
  }
  render() {
    return (
      <div className='personality-signature-wrap'>
        <header>
          <i onClick={()=>{this.props.history.goBack()}}></i>
          <span>个性签名</span>
        </header>
        <textarea value={ this.state.value }
          onChange={ this.handleChange }
          maxLength={50}
          placeholder='最多输入50字'
        ></textarea>
        <span onClick={this.handleClick}>保存</span>
      </div>
    )
  }
}

export default PersonalitySignature