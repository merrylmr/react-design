import React, {Component} from 'react'

class ImgComp extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    console.log('this.data',this.props.data)
  }
  render() {
    let item=this.props.data.r.item
    return (
      <div>
        <img width={item.width} height={item.height} src={item.src}/>
      </div>
    )
  }
}

export default ImgComp