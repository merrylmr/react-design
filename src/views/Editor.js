import React, {Component} from 'react'
import AppHeader from '../components/Header'
import LeftSidebar from '../components/LeftSidebar'
import RightSideBar from '../components/RightSideBar'
import Stage from '../components/Stage'

class Editor extends Component {
  render() {
    return (
      <div id="editor">
        <AppHeader/>
        <div className="main">
          <LeftSidebar/>
          <RightSideBar/>
          <Stage/>
        </div>
      </div>
    )
  }
}

export default Editor