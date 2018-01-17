import React, { Component } from 'react'
import { withRouter, Link } from 'react-router-dom'
import './footer.css'

class Footer extends Component {
  state = {
    data: [
      {
        id: 22,
        path: 'home',
        text: '首页'
      },
      {
        id: 23,
        path: 'find',
        text: '发现'
      },
      {
        id: 24,
        path: 'issue',
        text: '发布'
      },
      {
        id: 25,
        path: 'message',
        text: '消息'
      },
      {
        id: 26,
        path: 'user',
        text: '我的'
      }
    ]
  }
  render() {
    const { data } = this.state
    const { num } = this.props

    return (
      <footer>
        <ul>
          {
            data.map(item => {
              return (
                <Link to={{ pathname:`/${item.path}`,state:item.id }}  key={item.id}>
                  <li>
                    <i className={num === item.id ? 'active' : ''}></i>
                    <span>{item.text}</span>
                  </li>
                </Link>
              )
            })
          }
        </ul>
      </footer>
    )
  }
}

export default withRouter(Footer)
