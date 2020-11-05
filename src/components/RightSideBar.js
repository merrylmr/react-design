import React, {Component} from 'react'

class RightSideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div className="tool-right-panel">
        <div className="comp-layerlist">
        </div>
        <div className="right-panel__toggle"></div>
      </div>
    )
  }
}

export default RightSideBar