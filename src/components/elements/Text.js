import React, {Component} from 'react'

class TextComp extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  componentDidMount() {
    console.log('this.data',this.props.data)
  }
  render() {
    let data=this.props.data
    return (
      <div>
        <div dangerouslySetInnerHTML={{__html:data.r.text}}></div>
      </div>
    )
  }
}

export default TextComp