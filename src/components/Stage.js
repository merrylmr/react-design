import React, {Component} from 'react'
import {getPageData} from '../api/index.js'
import XFabric from '../assets/fabric/index'
import Tool from './Tool.js'

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


  componentDidMount() {
    let instance = new XFabric('stage');
    instance.loadJSON();
    // 选中元素
    instance.canvas.on('selection:created', (objects) => {
      console.log('object:selected', objects);
      this.setState({
        selectedItems: objects.selected,
      })
    })
    instance.canvas.on('after:render', () => {
      this.setState((state) => ({
        instance: instance
      }))
      console.log('lalalal')
    })


    console.log('instance--------', instance);
    // this.instance = instance;
  }

  async componentWillMount() {
    console.log('componentWillUnmount---11111')
    // const data = await getPageData()
    // this.setState({
    //   pageData: data
    // })
    console.log('this.pageData', this.state.pageData)
    console.log('componentWillUnmount--22222')
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
    this.state.instance.setActiveStyle(attr, v[attr])
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

export default Stage