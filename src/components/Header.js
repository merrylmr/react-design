import React, {Component} from 'react'
import '../assets/scss/index.scss'
import {Row, Col, Button} from 'antd';
import PropTypes from 'prop-types'

class AppHeader extends Component {
  render() {
    return (
      <div className="tool-header">
        <div className="tool-header__wrapper">
          <Row>
            <Col span="6">
              <div className="logo">MERRY</div>
            </Col>
            <Col span="12">
              <div className="file-name">MERRY</div>
            </Col>
            <Col span="6">
              <div className="text-right">
                <Button type="primary"
                        onClick={this.download.bind(this)}>下载</Button>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    )
  }

  download() {
    this.props.download()
  }
}

AppHeader.prototypes = {
  download: PropTypes.func
}
export default AppHeader