import React, {Component} from 'react'

class SvgComp extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  componentDidMount() {
    console.log('this.data',this.props.data)
  }
  render() {
    return (
      <div>
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          dangerouslySetInnerHTML={{__html:this.props.data.r.html}}
         >
      </svg>
      </div>
    )
  }
}

export default SvgComp