import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './taskreply.css'

class TaskReply extends Component{
    state = {
        content: ''
    }

    handleChange = e => {
        this.setState({
            content: e.target.value
        })
    }
    render () {
        return (
            <div className='reply-wrap'>
                <header>
                    <a onClick={()=>this.props.history.goBack()}>取消</a>
                    <span>回复任务</span>
                    <span></span>
                </header>
                <textarea 
                    value={this.state.content}
                    onChange={this.handleChange}
                    placeholder = '请详细描述发布者的问题，以便更圆满的完成此次任务。。。'
                ></textarea>
                <div>
                    <span>当前位置</span>
                    <span>
                        <i></i>
                        <i>北京市 古北口镇司马台村1层</i>
                    </span>
                </div>
                <div>
                    <Link to='./home'>发送</Link>
                </div>
            </div>
        )
    }
}

export default TaskReply