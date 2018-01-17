import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Carousel from 'antd/lib/carousel';  // 加载 JS
import 'antd/lib/carousel/style/css'
import './home.css'
import kaka from '../../images/kaka.png'
import search from '../../images/search.png'
import pos from '../../images/664.png'
import banner1 from '../../images/banner1.jpeg'
import banner2 from '../../images/banner2.jpg'
import banner3 from '../../images/banner3.png'
import anran from '../../images/anran.png'
import chen from '../../images/chen.png'
import city1 from '../../images/city1.jpg'
import Footer from '../Footer/Footer'
import { Modal } from 'antd'
import score from '../../images/score.png'


class Home extends Component {
  state = {
    data: [
      {
        id: 8,
        src: chen,
        username: 'chen XX',
        score: 50,
        position: '上海市浦东新区 988km',
        time: '2017-03-09',
        content: '想了解一下武汉市武昌区汉街的街景和街上的几个咖啡店里面的情况......'
      },
      {
        id: 9,
        src: anran,
        username: '安然',
        score: 100,
        position: '合肥市包河区917km',
        time: '2017-03-09',
        content: '我想知道北京这个星巴克现在的客流量怎么样'
      }
    ],
    visible: false,
    num: 0
  }

  componentDidMount() {
    const id = this.props.location.state

    if (!(sessionStorage.view === 'false')) {
      this.setState({
        visible: true
      })
    }
    this.setState({
      num: id
    })
  }

  handleCancel = (e) => {
    this.setState({
      visible: false
    })
    sessionStorage.view = false
  }

  handleComment = () => {
    this.props.history.push('/comment')
  }
  render() {
    const { data } = this.state
    return (
      <div className='home-wrap'>
        <header>
          <Link to='/'>
            武汉<img src={pos} alt="加载失败" />
          </Link>
          <img src={kaka} alt="加载失败" />
          <img src={search} alt="加载失败" />
        </header>
        <Carousel autoplay>
          <div><img src={banner1} alt="" /></div>
          <div><img src={banner2} alt="" /></div>
          <div><img src={banner3} alt="" /></div>
        </Carousel>
        <div className='home-main'>
          <div className='small-title'>
            <i></i>
            <span>最新任务</span>
            <i></i>
          </div>
          <div className='home-contain'>
            {
              data.map(item => {
                return (
                <Link to={{ pathname: `/details/${item.id}`, state: item }} key={item.id}>
                    <div className="home-main-content">
                      <span>{item.content}</span>
                      <div>
                        <img src={item.src} alt="加载失败" />
                        <div>
                          <div className="home-user">
                            <span className="home-username">
                              <i>{item.username}</i>
                              <i />
                            </span>
                            <span className="home-user-score">
                              <i />
                              <span>{item.score}</span>
                            </span>
                          </div>
                          <div className="home-position">
                            <div>
                              <span />
                              <span>{item.position}</span>
                            </div>
                            <span>{item.time}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                )
              })
            }
          </div>
          <div className='small-title'>
            <i></i>
            <span>今日推荐</span>
            <i></i>
          </div>
          <div className='home-today'>
            <div className='home-pic'>
              <img src={city1} alt="加载失败" />
              <img src={city1} alt="加载失败" />
              <img src={city1} alt="加载失败" />
            </div>
            <p>所罗门-R-古根海娒美术馆（The Solomon R .Guggenheim Museum)</p>
            <span>古根海娒美术馆</span>
            <div className='home-comment'>
              <div>
                <i></i>
                <span>6326</span>
              </div>
              <div>
                <i></i>
                <span>70</span>
              </div>
              <div>
                <i onClick={this.handleComment}></i>
                <span>261</span>
              </div>
            </div>
          </div>
        </div>
        <div className='home-modal'>
          <Modal
            visible={this.state.visible}
            footer={null}
            closable={false}
            onCancel={this.handleCancel}
          >
            <img src={score} alt="加载失败" />
            <div>
              <span>恭喜您获得今日奖励</span>
              <span>
                <i>+ 10</i>
                <i>积分</i>
              </span>
            </div>
            <span>每日登录即可获得奖励</span>
          </Modal>
        </div>
        <Footer num={this.state.num} />
      </div>
    )
  }
}

export default Home
