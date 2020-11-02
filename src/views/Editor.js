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

  deleteItem() {
    this.state.instance.removeSelected()
    console.log('deleteItem1111')
  }

  componentWillMount() {

  }

  componentDidMount() {
    let instance = new XFabric('stage');
    instance.loadJSON();
    // 选中元素
    instance.canvas.on('selection:created', (objects) => {
      console.log('selection:created-----11111', objects);
      this.setState({
        selectedItems: objects.selected,
      })
    })
    // 选中区域更新
    instance.canvas.on('selection:updated', (objects) => {
      console.log('selection:update-----22222', objects);
      this.setState({
        selectedItems: objects.selected,
      })
    })
    // 选中区域清除
    instance.canvas.on('selection:cleared', (objects) => {
      console.log('selection:cleared-----33333', objects);
      this.setState({
        selectedItems: [],
      })
    })
    this.setState((state) => ({
      instance: instance
    }))
  }

  changed({attr, v}) {
    console.log('editor', v);


    const selectedItem = this.state.selectedItems[0]
    //  渲染
    this.state.instance.setActiveStyle(attr, v, selectedItem)

    // selectedItem[attr] = v;
    // this.setState((state) => {
    //   let selectedItems = state.selectedItems
    //   return {
    //     selectedItems: selectedItems.splice(0, 1, selectedItem)
    //   }
    // })
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
          <Stage
            instance={this.state.instance}
            selectedItems={this.state.selectedItems}
            deleteItem={this.deleteItem.bind(this)}
            changed={this.changed.bind(this)}
          />
        </div>
      </div>
    )
  }
}

export default Editor