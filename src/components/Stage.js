import React, {Component} from 'react'
import Tool from './Tool.js'
import PropTypes from 'prop-types'


class Stage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageData: {
        r: {},
        layout: {
          items: [],
          groups: []
        }
      },
    }
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


  // 设置画布背景颜色
  setCanvasBgColor(v) {
    this.props.instance.setCanvasBgColor(v)
  }

  render() {
    return (
      <div className="tool-main-panel">
        <div className="tool-main-panel__toolbar">
          <Tool
            data={this.props.selectedItems}
            changed={this.props.changed}
            setGroup={this.props.setGroup}
            splitGroup={this.props.splitGroup}
            deleteItem={this.props.deleteItem.bind(this)}
            setCanvasBgColor={this.setCanvasBgColor.bind(this)}
          ></Tool>
        </div>
        <div className="tool-main-panel__body">
          <canvas
            id="stage"
            width='600px'
            height='500px'
            className="doc-panel">
            {/*渲染页面内容*/}
          </canvas>
        </div>
      </div>
    )
  }
}

Stage.prototypes = {
  instance: PropTypes.object,
  selectedItems: PropTypes.array,
  changed: PropTypes.func,
  setGroup:PropTypes.func
}

Stage.defaultProps = {
  instance: {},
  selectedItems: []
}
export default Stage