import React, { Component } from 'react'
import Header1 from '../Header1/Header1'
import img1 from '../../images/415458452526758301.jpg'
import img2 from '../../images/494717266930670030.jpg'
import img3 from '../../images/894379025342781815.jpg'
import img4 from '../../images/wee.jpg'
import img5 from '../../images/ere.jpg'
import img6 from '../../images/747368050561777166.jpg'
import img7 from '../../images/aa.png'
import img8 from '../../images/265324052184913970.png'
import img9 from '../../images/76.png'
import './find.css'
import Footer from '../Footer/Footer'

class Find extends Component {
  state = {
    data: [
      {
        id: 1,
        avatar_url: img7,
        username: '泡沫',
        sex_url: img9,
        content: '安徽宏村秀里驿境精品文化酒店，喜欢的可以去看看哦...',
        pics: [
          img1, img2, img3
        ],
        time: '58分钟前',
        position: '宏村秀里精品文化酒店',
        eye: 326,
        like: 70,
        comment: 26
      },
      {
        id: 2,
        avatar_url: img8,
        username: '初夏',
        sex_url: img9,
        content: '在乌镇，入夜后,和闺蜜一起在酒吧窗前喝一杯甘甜的“三白酒”，让人回味无穷,去年的这个时间我们同样坐在今天的位置，回忆着那是的点点滴滴....',
        pics: [
          img4, img5, img6
        ],
        time: '1小时前',
        position: '浙江省桐乡市乌镇酒吧',
        eye: 326,
        like: 70,
        comment: 26
      }
    ],
    num: 0
  }

  componentDidMount() {
    this.setState({
      num: this.props.location.state
    })
  }


  render() {
    const { data } = this.state
    return (
      <div className='find-wrap'>
        <Header1 />
        {
          data.map(item => {
            return (
              <div className='find-content' key={item.id}>
                <img src={item.avatar_url} alt="加载失败" />
                <div>
                  <div className='username'>
                    <div>
                      <span>{item.username}</span>
                      <img src={item.sex_url} alt="加载失败" />
                    </div>
                    <i></i>
                  </div>
                  <p>{item.content}</p>
                  <div className='find-pics'>
                    {
                      item.pics.map((it, index) => {
                        return (
                          <img src={it} alt="加载失败" key={index} />
                        )
                      })
                    }
                  </div>
                  <div className='find-more'>
                    <span>{item.time}</span>
                    <div className='position'>
                      <i></i>
                      <span>{item.position}</span>
                    </div>
                    <div className='eye'>
                      <i></i>
                      <span>{item.eye}</span>
                    </div>
                    <div className='like'>
                      <i></i>
                      <span>{item.like}</span>
                    </div>
                    <div className='comment'>
                      <i></i>
                      <span>{item.comment}</span>
                    </div>
                  </div>
                </div>
              </div>
            )
          })
        }
        <Footer num={this.state.num} />
      </div>
    )
  }
}

export default Find
