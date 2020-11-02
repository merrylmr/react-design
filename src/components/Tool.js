import React, {Component} from 'react'
import {Select, ColorPicker, Popover, Slider} from 'element-react'
import PropTypes from 'prop-types'


class Tool extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: [12, 14, 16, 18, 24, 36, 40],
      value: 40,
      color: '#20a0ff',
      selectedItem: {
        fill: 'red',
        type: 'text'
      }
    }
  }

  componentDidMount() {
    console.log('props', this.props.data);
  }


  // 父组件重新渲染，都会导致更新
  // nextProps.data !==this.props.data
  componentWillReceiveProps(nextProps) {

  }

  changed(attr, v) {
    console.log('tool-changed---', attr, v);
    this.props.changed({
      attr, v
    })
  }

  deleteItem() {
    this.props.deleteItem()
  }

  setCanvasBgColor(v) {
    this.props.setCanvasBgColor(v);
  }

  render() {
    const selectedItem =
      (this.props.data && this.props.data[0])
      || {
        fill: 'rgba(0,0,0,0.3)',
        shadow: {
          color: '',
          blur: 10,
          offsetX: 10,
          offsetY: 10,
          affectStroke: false,
          nonScaling: false
        }
      };

    const CommonTool = (props) => {
      return (
        <React.Fragment>
          <div className="tool-item">
            <Popover
              placement="bottom"
              width="300"
              trigger="click"
              content={(
                <div className="operate-item">
                  <div className="operate-item__label">透明度</div>
                  <div className="operate-item__content">
                    <Slider
                      min={0}
                      max={1}
                      step={0.01}
                    />
                  </div>
                </div>
              )}
            >
              <i className="iconfont icon-toumingdu"></i>
            </Popover>
          </div>
          <div className="tool-item">
            <Popover
              placement="bottom"
              width="300"
              trigger="click"
              content={(
                <div className="operate">
                  <div className="operate-item">
                    颜色
                    <ColorPicker
                    ></ColorPicker>
                  </div>
                </div>
              )}>
              <i className="iconfont icon-yinying"></i>
            </Popover>
          </div>
          <div className="tool-item"
               onClick={this.deleteItem.bind(this)}>
            <i className="iconfont icon-lajixiang"></i>
          </div>
        </React.Fragment>
      )
    }

    const CompBar = (props) => {
      switch (selectedItem.type) {
        case'text':
        case'textbox':
          return (
            <React.Fragment>
              <div className="tool-item">
                <ColorPicker
                  value={selectedItem.fill}
                  onChange={props.changed.bind(this, 'fill')}
                ></ColorPicker>
              </div>
              <div className="tool-item">
                <Select
                  value={selectedItem.fontSize}
                  placeholder="请选择"
                  onChange={props.changed.bind(this, 'fontSize')}>
                  {
                    this.state.options.map(el => {
                      return <Select.Option key={el} label={el} value={el}/>
                    })
                  }
                </Select>
              </div>
            </React.Fragment>
          )
        case 'circle':
        case 'rect':
        case 'polygon':
        case 'triangle':
        case 'line':
          return (
            <React.Fragment>
              <div className="tool-item">
                填充：
                <ColorPicker
                  value={selectedItem.fill}
                  onChange={props.changed.bind(this, 'fill')}
                ></ColorPicker>
              </div>
              <div className="tool-item">
                stroke：
                <ColorPicker
                  value={selectedItem.stroke}
                  onChange={props.changed.bind(this, 'stroke')}
                ></ColorPicker>
              </div>
            </React.Fragment>
          )
        default:
          return ''
      }
    }

    const ToolBar = () => {
      if (this.props.data && this.props.data.length) {
        return (
          <React.Fragment>
            <CompBar changed={this.changed.bind(this)}></CompBar>
            {/*<CommonTool changed={this.changed.bind(this)}></CommonTool>*/}
          </React.Fragment>
        )
      } else {
        return (
          <React.Fragment>
            <div className="tool-item">
              <ColorPicker
                onChange={this.setCanvasBgColor.bind(this)}
              ></ColorPicker>
            </div>
          </React.Fragment>
        )
      }
    }


    return (
      <div className='tool-bar'>
        <ToolBar></ToolBar>
      </div>
    )
  }
}

Tool.prototypes = {
  data: PropTypes.array
}
Tool.defaultProps = {
  data: []
}
export default Tool