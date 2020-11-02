import React, {Component} from 'react'

import 'element-theme-default'
import './App.css'
import Editor from './views/Editor'
import './assets/scss/base.scss'
import './assets/font/iconfont.css'

class App extends Component {
  state = {

  }

  render() {
    return (
      <div className="App">
        <Editor/>
      </div>
    )
  }
}


export default App
