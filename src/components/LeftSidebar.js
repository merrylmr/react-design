import React, {Component} from 'react'
import '../assets/scss/leftSide.scss'
import PropTypes from 'prop-types'

class LeftSidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuList: [
        {
          label: '文本',
          value: 'text',
          icon: 'el-icon-edit'
        },
        {
          label: '形状',
          value: 'shape',
          icon: 'el-icon-star-off'
        },
        {
          label: '图片',
          value: 'img',
          icon: 'el-icon-picture'
        },
        {
          label: '弧形',
          value: 'arc',
          icon: 'el-icon-share'
        },
        {
          label: 'SVG',
          value: 'svg',
          icon: 'el-icon-time'
        }
      ],
      activeMenu: 'shape'
    }
  }

  /*
    切换菜单
   */
  switchMenu(item) {
    this.setState({
      activeMenu: item.value
    })
  }

  addEle(item) {
    this.props.addEle(item)
  }

  addText(item) {
    this.props.addText(item)
  }

  addImg(url) {
    this.props.addImg(url)
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextState !== this.state
  }

  render() {
    console.log('LeftSideBar render');
    const ShapePanel = () => {
      const shapes = [
        {
          label: '矩形',
          value: 'rect',
          thumbnail: 'https://imgpub.chuangkit.com/materials/2019/01/11/efa59550-10b6-49ae-8873-db1ad77ec526_thumb?x-oss-process=image/resize,w_300/format,webp'
        },
        {
          label: '圆形',
          value: 'circle',
          thumbnail: 'https://imgpub.chuangkit.com/materials/2019/01/11/b20a6462-6dea-4e3e-b5c7-9d91da7504fb_thumb?x-oss-process=image/resize,w_300/format,webp'
        },
        {
          label: '三角形',
          value: 'triangle',
          thumbnail: 'https://imgpub.chuangkit.com/materials/2019/01/11/da545740-2e0b-4125-86dc-1496041f0433_thumb?x-oss-process=image/resize,w_300/format,webp'
        },
        {
          label: '线条',
          value: 'line',
          thumbnail: '//imgpub.chuangkit.com/materials/2015/07/16/37544_thumb?x-oss-process=image/resize,w_600/format,webp'
        },
        {
          label: '多边形',
          value: 'polygon',
          thumbnail: '//imgpub.chuangkit.com/materials/2019/06/24/d8f151da-cbcd-4138-a3c7-b91609fd9099_thumb?x-oss-process=image/resize,w_300/format,webp'
        }
      ]
      return (
        <div className='panel'>
          <div className="panel-header">
            形状
          </div>
          <div className="panel-body">
            <div className="m-list">
              {
                shapes.map(item =>
                  <div className="m-item"
                       key={item.value}
                       onClick={this.addEle.bind(this, item)}>
                    <div className="m-item__thumbnail">
                      {
                        item.thumbnail ? <img width={100} src={item.thumbnail} alt=""/> :
                          <i className='el-icon-picture'></i>
                      }
                    </div>
                    <div className="m-item__desc">
                      {item.label}
                    </div>
                  </div>
                )
              }

            </div>
          </div>
        </div>
      )
    }
    const ImgPanel = () => {
      const imgList = [
        'https://f.cdn-static.cn/1360_16003103201053.jpg',
        'https://f.cdn-static.cn/1360_16003090248882.jpg']
      return (
        <div className="panel">
          <div className="panel-header">
            图片
          </div>
          <div className="panel-body">
            <div className="m-list">
              {
                imgList.map((item, index) =>
                  <div className='m-item'
                       key={index}
                       onClick={this.addImg.bind(this, item)}>
                    <div className="m-item__thumbnail">
                      <img src={item} alt=""/>
                    </div>
                  </div>
                )
              }
            </div>
          </div>
        </div>
      )
    }
    const TextPanel = () => {
      const textList = [
        {
          value: '我是文本组件',
          fontSize: 36
        },
        {
          value: '我是文本组件',
          fontSize: 24
        },
        {
          value: '我是文本组件',
          fontSize: 14
        }
      ]
      return (
        <div className="panel">
          <div className="panel-header">
            文本
          </div>
          <div className="panel-body">
            <div className="text-list">
              {
                textList.map((item, index) =>
                  <div className="text-item"
                       style={{fontSize: item.fontSize + 'px'}}
                       key={index}
                       onClick={this.addText.bind(this, item)}
                  >
                    {item.value}
                  </div>
                )
              }
            </div>
          </div>
        </div>
      )
    }
    const Panel = () => {
      switch (this.state.activeMenu) {
        case 'shape':
          return <ShapePanel/>
        case 'img':
          return <ImgPanel/>
        case 'text':
          return <TextPanel></TextPanel>
        default:
          return 'xxx'
      }
    }

    return (
      <div className="tool-left-panel">
        <div className="sidebar-menu">
          <ul className='menu-list'>
            {
              this.state.menuList.map((item) =>
                <li
                  key={item.value}
                  className={`menu-item ${this.state.activeMenu === item.value ? 'is-active' : ''}`}
                  onClick={this.switchMenu.bind(this, item)}>
                  <div><i className={item.icon}></i></div>
                  <div>{item.label}</div>
                </li>
              )
            }
          </ul>
        </div>
        <div className="sidebar-menu__panel">
          <Panel></Panel>
        </div>
        <div className="left-panel__toggle"></div>
      </div>
    )
  }
}

LeftSidebar.prototypes = {
  addImg: PropTypes.func,
  addText: PropTypes.func,
  addEle: PropTypes.func,
}
export default LeftSidebar