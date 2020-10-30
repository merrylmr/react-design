import React, {Component} from 'react'
import '../assets/scss/leftSide.scss'

class LeftSidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuList: [
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

  render() {
    return (
      <div className="tool-left-panel">
        <div className="sidebar-menu">
          <ul className='menu-list'>
            {
              this.state.menuList.map((item) =>
                <li
                  className={`menu-item ${this.state.activeMenu===item.value?'is-active':''}`}>
                  <div><i className={item.icon}></i></div>
                  <div>{item.label}</div>
                </li>
              )
            }
          </ul>
        </div>
        <div className="sidebar-menu__panel"></div>
        <div className="left-panel__toggle"></div>
      </div>
    )
  }
}

export default LeftSidebar