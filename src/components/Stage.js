import React, {Component} from 'react'
import ImgComp from './elements/Img'
import TextComp from './elements/Text'
import SvgComp from './elements/Svg'

import pageData from '../assets/json/page.json'

class Stage extends Component {
  state = {
    pageData: pageData
  }

  componentDidMount() {
    console.log('this.pageData', this.state.pageData)
  }

  componentWillUnmount() {
  }

  render() {
    let items = this.state.pageData.layout.items
    const comps = items.map((item, index) =>
      <div key={index} data-type={item.type}
           className='basic-comp'
       style={{left:item.pos.x+'px',top:item.pos.y+'px'}}>
        {
          (() => {
            switch (item.type) {
              case 'text':
                return <TextComp data={item}></TextComp>
              case 'image':
                return <ImgComp data={item}></ImgComp>
                break
              case 'svg':
                return <SvgComp data={item}></SvgComp>
                break
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
          <div id="stage" className="doc-panel">
            {/*渲染页面内容*/}
            {comps}
          </div>
        </div>
      </div>
    )
  }
}

export default Stage