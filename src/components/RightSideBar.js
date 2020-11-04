import React, {PureComponent} from 'react'
import {Popover, Button, Slider} from 'element-react'

class RightSideBar extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      test: {
        number: 0,
        content: 'xxxx'
      }
    }
  }

  render() {
    let {test,changed} = this.props;
    console.log('test', test)
    return (
      <div className="tool-right-panel">
        <div className="comp-layerlist">
          <Popover placement="top-start"
                   title="标题"
                   width="100"
                   trigger="click" content={
            (
              <Slider value={test.num}
                      onChange={changed.bind(this)}
              />
            )
          }>
            <Button>hover 激活</Button>
          </Popover>
        </div>
        <div className="right-panel__toggle"></div>
      </div>
    )
  }
}

export default RightSideBar