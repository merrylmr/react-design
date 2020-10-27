import React, {Component} from 'react'
import PropTypes from 'prop-types'

class ImgComp extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    console.log('this.data', this.props.data)
  }

  render() {
    let item = this.props.data.r.item
    return (
      <div>
        <img width={item.width} height={item.height} src={item.src} alt=""/>
      </div>
    )
  }
}

ImgComp.prototypes = {
  data: PropTypes.object
}
ImgComp.defaultProps = {
  data: {
    r: {
      item: {}
    }
  }
}

export default ImgComp