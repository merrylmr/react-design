import React, {Component} from 'react'
import AppHeader from '../components/Header'
import LeftSidebar from '../components/LeftSidebar'
import RightSideBar from '../components/RightSideBar'
import Stage from '../components/Stage'
import XFabric from '../assets/fabric/index'

class Editor extends Component {
  constructor() {
    super();
    this.state = {
      instance: null
    }
  }

  addText(item) {
    console.log('item', item);
    this.state.instance.addText(item)
  }

  addImg(url) {
    console.log('addImg', url)
    this.state.instance.addImage(url)
  }

  /**
   * 添加基本形状
   * @param item
   */
  addEle(item) {
    console.log('addEle', item);
    const {instance} = this.state
    switch (item.value) {
      case 'rect':
        instance.addRect();
        break;
      case 'circle':
        instance.addCircle();
        break;
      case 'triangle':
        instance.addTriangle();
        break;
      case 'line':
        instance.addLine();
        break;
      case 'polygon':
        instance.addPolygon();
        break;
      default:
        break;
    }
  }

  componentWillMount() {

  }

  componentDidMount() {
    let instance = new XFabric('stage');
    instance.loadJSON();
    // 选中元素
    instance.canvas.on('selection:created', (objects) => {
      this.setState({
        selectedItems: objects.selected,
      })
    })
    this.setState((state) => ({
      instance: instance
    }))
  }

  render() {
    return (
      <div id="editor">
        <AppHeader/>
        <div className="main">
          <LeftSidebar
            addImg={this.addImg.bind(this)}
            addText={this.addText.bind(this)}
            addEle={this.addEle.bind(this)}/>
          <RightSideBar/>
          <Stage instance={this.state.instance}/>
        </div>
      </div>
    )
  }
}

export default Editor