import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Hammer from 'react-hammerjs'
import './leader.css'
import img1 from '../../images/1.png'
import img2 from '../../images/11.png'
import img3 from '../../images/111.png'
import logo from '../../images/apple-touch-icon.png'

class Leader extends Component {
  
  state = {
    num : 0
  }

  handleLeft = () => {
    const { num } = this.state
    if(num<3){
      this.setState({
        num : num+1
      })
    }
  }

  render() {
    
    const { num } = this.state
    let ml = `${num * -100}vw`
    return (
      <Hammer onSwipeLeft={this.handleLeft}>
        <div className="show">
          <div className = 'leader' style={{marginLeft:ml}}>
            <img src={img1} alt="1"/>
            <img src={img2} alt="11"/>
            <img src={img3} alt="111"/>
            <div className = 'go'>
              <img src={logo} alt="logo"/>
              <span>随想咔咔</span>
              <p>帮你所看 随想咔咔</p>
              <Link to = '/login'>点击进入</Link>
            </div>
          </div>
        </div>
      </Hammer>
    )
  }
}

export default Leader