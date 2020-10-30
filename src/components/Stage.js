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
      selectedItems: [],
      instance: null
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

  changed(v, attr) {
    console.log('stage-change', v, this.state.instance);
    this.props.instance.setActiveStyle(attr, v[attr])
  }

  render() {
    return (
      <div className="tool-main-panel">
        <div className="tool-main-panel__toolbar">
          <Tool
            data={this.state.selectedItems}
            changed={this.changed.bind(this)}
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
  instance: PropTypes.object
}

Stage.defaultProps = {
  instance: {}
}
export default Stage