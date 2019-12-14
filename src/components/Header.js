import React, {Component} from 'react'
import '../assets/scss/index.css'
import {Layout, Button} from 'element-react'

class AppHeader extends Component {
  render() {
    return (
      <div className="tool-header">
        <Layout.Row>
          <Layout.Col span="6">
            <div className="logo">MERRY</div>
          </Layout.Col>
          <Layout.Col span="12">
            <div className="file-name">MERRY</div>
          </Layout.Col>
          <Layout.Col span="6">
            <div className="right">
              <Button type="primary">下载</Button>
            </div>
          </Layout.Col>
        </Layout.Row>


      </div>
    )
  }
}


export default AppHeader