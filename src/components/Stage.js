import React, {Component} from 'react'
import ImgComp from './elements/Img'
import TextComp from './elements/Text'
import SvgComp from './elements/Svg'

import {getPageData} from '../api/index.js'
import {renderComp} from '../assets/fabric/index'

class Stage extends Component {
  state = {
    pageData: {
      r: {},
      layout: {
        items: [],
        groups: []
      }
    }
  }

  componentDidMount() {

  }

  async componentWillMount() {
    console.log('componentWillUnmount---11111')
    const data = await getPageData()
    this.setState({
      pageData: data
    })
    console.log('this.pageData', this.state.pageData)
    console.log('componentWillUnmount--22222')

    renderComp([{type: 'text'}, {type: 'img'}])
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   if (nextProps.content !== this.props.content) {
  //     return true
  //   } else {
  //     return false
  //   }
  // }

  // shouldComponentUpdate
  // componentWillUpdate
  // render
  // componentDidUpdate


  // componentWillReceiveProps


  render() {
    console.log('render222222');
    let items = this.state.pageData.layout.items
    const comps = items.map((item, index) =>
      <div key={index} data-type={item.type}
           className='basic-comp'
           style={{left: item.pos.x + 'px', top: item.pos.y + 'px'}}>
        {
          (() => {
            switch (item.type) {
              case 'text':
                return <TextComp data={item}></TextComp>
              case 'image':
                return <ImgComp data={item}></ImgComp>
              case 'svg':
                return <SvgComp data={item}></SvgComp>
              default:
                break
            }
          })()
        }
      </div>
    )
    return (
      <div className="tool-main-panel">
        <div className="tool-main-panel__toolbar"></div>
        <div className="tool-main-panel__body">
          <canvas
            id="stage"
            width='600px'
            height='500px'
            fill="#fff"
            className="doc-panel">
            {/*渲染页面内容*/}
          </canvas>
        </div>
      </div>
    )
  }
}

export default Stage