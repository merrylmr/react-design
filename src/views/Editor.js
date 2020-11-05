import React, {Component} from 'react'
import AppHeader from '../components/Header'
import LeftSidebar from '../components/LeftSidebar'
import RightSideBar from '../components/RightSideBar'
import Stage from '../components/Stage'
import XFabric from '../assets/fabric/index'
import {Modal, Button, Input} from 'antd';

class Editor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      instance: null,
      dialogVisible: false,
      src: '',
      name: 'download'
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
  }

  setGroup() {
    console.log('setGroup----');
    this.state.instance.setGroup(this.state.selectedItems);
  }

  splitGroup() {
    console.log('splitGroup----2')
    this.state.instance.splitGroup();
  }


  download() {
    const src = this.state.instance.toImage();
    console.log('src', src);
    this.setState({
      dialogVisible: true,
      src: src
    })
  }

  changeName(e) {
    this.setState((state) => ({
      name: e
    }))
  }


  render() {
    return (
      <div id="editor">
        <AppHeader download={this.download.bind(this)}/>
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
            setGroup={this.setGroup.bind(this)}
            splitGroup={this.splitGroup.bind(this)}
          />
        </div>
        {/*  下载框 */}
        <Modal
          title="下载图片"
          centered={true}
          visible={this.state.dialogVisible}
          footer={null}
          onCancel={() => this.setState({dialogVisible: false})}
        >
          <div className="form-item">
            <img
              style={{border: '1px solid #eee'}}
              src={this.state.src} alt="" width={100}/>
          </div>
          <div className="form-item">
            <div className="form-item__label">图片名称:</div>
            <Input
              defaultValue={this.state.name}
              onChange={this.changeName.bind(this)}
              placeholder="下载文件名称"/>
          </div>
          <Button type="primary"
                  onClick={() => this.setState({dialogVisible: false})}>
            <a href={this.state.src} download={`${this.state.name}.png`}>下载</a>
          </Button>
        </Modal>
      </div>
    )
  }
}

export default Editor