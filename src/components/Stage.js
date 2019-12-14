import React, {Component} from 'react'

class Stage extends Component {
  render() {
    return (
      <div className="tool-main-panel">
        <div className="tool-main-panel__toolbar"></div>
        <div className="tool-main-panel__body">
          <div id="stage" className="doc-panel">

          </div>
        </div>
      </div>
    )
  }
}

export default Stage