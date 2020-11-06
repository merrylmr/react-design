import React, {Component} from 'react'
import {Select, Popover, Slider, Button} from 'antd';
import PropTypes from 'prop-types'

const {Option} = Select;

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
      },
      activeType: 'canvas' // canvas/text/img/group/items/shape
    }
  }

  componentDidMount() {
  }


  // 父组件重新渲染，都会导致更新
  // nextProps.data !==this.props.data
  // componentWillReceiveProps(nextProps) {
  //
  // }

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
    const ColorPicker = (props) => {
      return (
        <input
          type="color"
          defaultValue={props.value}
          onChange={(e) => {
            props.onChange(e.target.value)
          }}
        />
      )
    }
    // 选中组件之后:公共工具条
    const CommonTool = (props) => {
      const {activeType} = props;
      const shadow = selectedItem.shadow || {
        color: '#000',
        blur: 0,
        offsetX: 0,
        offsetY: 0,
        affectStroke: false,
        nonScaling: false
      }
      return (
        <div
          className={`tool-list ${activeType !== 'canvas' ? 'is-active' : ''}`}>
          <div className="tool-item">
            <Popover
              placement="bottom"
              trigger="click"
              content={(
                <div style={{width: '300px'}}>
                  <div className="operate-item">
                    <div className="operate-item__label">透明度</div>
                    <div className="operate-item__content">
                      <Slider
                        min={0}
                        max={1}
                        step={0.01}
                        defaultValue={selectedItem.opacity}
                        onChange={props.changed.bind(this, 'opacity')}
                      />
                    </div>
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
              trigger="click"
              content={(
                <div className="operate" style={{width: '300px'}}>
                  <div className="operate-item">
                    <div className="operate-item__label">
                      颜色
                    </div>
                    <ColorPicker
                      value={shadow.color}
                      onChange={props.changed.bind(this, 'shadow.color')}
                    ></ColorPicker>
                  </div>
                  <div className="operate-item">
                    <div className="operate-item__label">
                      模糊
                    </div>
                    <div className="operate-item__content">
                      <Slider
                        defaultValue={shadow.blur}
                        onChange={props.changed.bind(this, 'shadow.blur')}
                      />
                    </div>
                  </div>
                  <div className="operate-item">
                    <div className="operate-item__label">
                      x偏移
                    </div>
                    <div className="operate-item__content">
                      <Slider
                        defaultValue={shadow.offsetX}
                        min={-100}
                        max={100}
                        onChange={props.changed.bind(this, 'shadow.offsetX')}
                      />
                    </div>
                  </div>
                  <div className="operate-item">
                    <div className="operate-item__label">
                      y偏移
                    </div>
                    <div className="operate-item__content">
                      <Slider
                        defaultValue={shadow.offsetY}
                        min={-100}
                        max={100}
                        onChange={props.changed.bind(this, 'shadow.offsetY')}
                      />
                    </div>
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
        </div>
      )
    }

    // 选中的元素是文本
    const TextTool = (props) => {
      const {activeType} = props;
      return (
        <div
          className={`tool-list ${activeType === 'text' ? 'is-active' : ''}`}
        >
          <div className="tool-item">
            <ColorPicker
              value={selectedItem.fill}
              onChange={props.changed.bind(this, 'fill')}
            ></ColorPicker>
          </div>
          <div className="tool-item">
            <Select
              style={{width: 120}}
              defaultValue={selectedItem.fontSize}
              placeholder="请选择"
              onChange={props.changed.bind(this, 'fontSize')}>
              {
                this.state.options.map(el => {
                  return <Option key={el} label={el} value={el}/>
                })
              }
            </Select>
          </div>
        </div>
      )
    }

    // 选中的元素是基本图形
    const ShapeTool = (props) => {
      const {activeType} = props;
      return (
        <div
          className={`tool-list ${activeType === 'shape' ? 'is-active' : ''}`}>
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
          <div className="tool-item">
            <div
              style={{width: '100px'}}>
              <Slider
                defaultValue={selectedItem.strokeWidth}
                onChange={props.changed.bind(this, 'strokeWidth')}
              ></Slider>
            </div>
          </div>
        </div>
      )
    }

    // 选中的元素是组合的工具条
    const GroupTool = (props) => {
      const {activeType} = props;
      return (
        <div
          className={`tool-list ${activeType === 'group' ? 'is-active' : ''}`}
        >
          <div className="tool-item">
            <Button
              size="small"
              onClick={this.props.splitGroup.bind(this)}
            >拆分组合</Button>
          </div>
        </div>
      )
    }
    // 多个组件选中工具条
    const MultiTool = (props) => {
      const {activeType} = props;
      return (
        <div
          className={`tool-list ${activeType === 'items' ? 'is-active' : ''}`}
        >
          <div
            className="tool-item">
            <Button
              size="small"
              onClick={this.props.setGroup.bind(this)}>组合</Button>
          </div>
        </div>
      )
    }
    // 未选中任何元素
    const CanvasTool = (props) => {
      const {activeType} = props;
      return (
        <div
          className={`tool-list ${activeType === 'canvas' ? 'is-active' : ''}`}
        >
          <div className="tool-item">
            <ColorPicker
              onChange={this.setCanvasBgColor.bind(this)}
            ></ColorPicker>
          </div>
          <div className="tool-item">
            <Button onClick={props.setZoom.bind(this)}> 1:1</Button>
          </div>
        </div>
      )
    }
    const ToolBar = () => {
      const {data} = this.props;
      let activeType = 'canvas'
      if (data && data.length) {
        if (data.length === 1) {
          // 组合
          if (selectedItem.getObjects) {
            activeType = 'group'
          } else {
            switch (selectedItem.type) {
              case'text':
              case'textbox':
                activeType = 'text'
                break;
              case 'circle':
              case 'rect':
              case 'polygon':
              case 'triangle':
              case 'line':
                activeType = 'shape'
                break;
              case 'image':
                activeType = 'image'
                break;
              default:
                break
            }
          }
        } else {
          activeType = 'items'
        }
      } else {
        activeType = 'canvas'
      }

      return (
        <React.Fragment>
          <CanvasTool
            setZoom={this.props.setZoom.bind(this)}
            activeType={activeType}
          ></CanvasTool>
          <TextTool
            activeType={activeType}
            changed={this.changed.bind(this)}></TextTool>
          <ShapeTool
            activeType={activeType}
            changed={this.changed.bind(this)}></ShapeTool>
          <GroupTool
            activeType={activeType}
          ></GroupTool>
          <MultiTool
            activeType={activeType}
          ></MultiTool>
          <CommonTool
            activeType={activeType}
            changed={this.changed.bind(this)}></CommonTool>
        </React.Fragment>
      )
    }


    return (
      <div className='tool-bar'>
        <ToolBar></ToolBar>
      </div>
    )
  }
}

Tool.prototypes = {
  data: PropTypes.array,
  setGroup: PropTypes.func,
  splitGroup: PropTypes.func,
  setZoom: PropTypes.func,
}
Tool.defaultProps = {
  data: []
}
export default Tool