import React, {Component} from 'react'
import {Select, ColorPicker} from 'element-react'


class Tool extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: [12, 14, 16, 18, 24, 36, 40],
      value: 40,
      color: '#20a0ff',
      selectedItem: {
        fill: 'red'
      }
    }
  }

  componentDidMount() {
    console.log('props', this.props.data);
  }

  componentWillUpdate(nextProps, nextState, nextContext) {
    console.log('componentWillUpdate', this.props.data);
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('componentDidUpdate', prevProps, this.props.data)
  }

  componentWillReceiveProps(nextProps, nextContext) {
    console.log('componentWillReceiveProps--111', nextProps);
    this.setState({
      selectedItem: (nextProps.data && nextProps.data[0]) || {},
      color: "#ccc"
    })
  }

  changeFontColor(v) {
    let selectedItem = this.state.selectedItem;
    selectedItem.fill = v;
    this.setState({
      selectedItem: selectedItem
    })
    console.log('changeColor111', v, this.state.selectedItem);
    this.props.changed(this.state.selectedItem, 'fill')
  }

  render() {
    return (
      <div className='tool-bar'>
        {/*文字*/}
        <React.Fragment>
          <div className="tool-item">
            <ColorPicker
              value={this.state.selectedItem.fill}
              onChange={this.changeFontColor.bind(this)}
            ></ColorPicker>
          </div>
          <div className="tool-item">
            <Select value={this.state.value} placeholder="请选择">
              {
                this.state.options.map(el => {
                  return <Select.Option key={el} label={el} value={el}/>
                })
              }
            </Select>
          </div>
          <p>xxx:{this.state.selectedItem.fill}</p>
        </React.Fragment>
      </div>
    )
  }
}

export default Tool