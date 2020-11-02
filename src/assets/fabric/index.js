import {fabric} from "fabric";
// 初始化配置
fabric.Object.prototype.transparentCorners = false;
const primaryColor = '#20a0ff';
class XFabric {
  constructor(id) {
    this.canvas = new fabric.Canvas(id);

  }

  renderCanvas() {
    this.canvas.backgroundColor = "#fff"
    this.canvas.renderAll();
  }

  renderComp(items) {

  }

  renderText(item) {
    const text = new fabric.Textbox('我是文本', {
      left: 100,
      top: 150,
      fill: '#D81B60',
      strokeWidth: 2,
      stroke: "#880E4F",
    })
    this.canvas.add(text);
  }

  addRect() {
    const rect = new fabric.Rect({
      left: 300,
      top: 300,
      fill: primaryColor,
      width: 50,
      height: 50,
      opacity: 0.8
    })
    this.canvas.add(rect);
  }

  addCircle() {
    const circle = new fabric.Circle({
      left: 300,
      top: 300,
      fill: primaryColor,
      radius: 50,
      opacity: 0.8
    })
    this.canvas.add(circle);
  }

  addTriangle() {
    this.canvas.add(new fabric.Triangle({
      left: 300,
      top: 300,
      fill: primaryColor,
      width: 50,
      height: 50,
      opacity: 0.8
    }))
  }

  addLine() {
    this.canvas.add(new fabric.Line([50, 100, 200, 200], {
      left: 300,
      top: 300,
      stroke: primaryColor
    }));
  }

  addPolygon() {
    this.canvas.add(new fabric.Polygon([
      {x: 185, y: 0},
      {x: 250, y: 100},
      {x: 385, y: 170},
      {x: 0, y: 245}], {
      left: 0,
      top: 0,
      fill: primaryColor
    }));
  }

  addText(item) {
    const text = new fabric.Textbox(item.value, {
      fontSize: item.fontSize,
      left: 0,
      top: 0,
      originX: 'left',
      hasRotatingPoint: true,
      centerTransform: true
    })
    this.canvas.add(text);
  }

  addImage(url) {
    fabric.Image.fromURL(url, (img) => {
      img.set({
        left: 0,
        top: 0,
      })
        .scale(.2) // todo:需要优化
      this.canvas.add(img);
    })
  }

  loadJSON() {
    let str = JSON.stringify({
      "version": "4.2.0",
      "objects": [{
        "type": "rect",
        "version": "4.2.0",
        "originX": "left",
        "originY": "top",
        "left": 50,
        "top": 50,
        "width": 50,
        "height": 50,
        "fill": "rgb(255,0,0)",
        "stroke": null,
        "strokeWidth": 1,
        "strokeDashArray": null,
        "strokeLineCap": "butt",
        "strokeDashOffset": 0,
        "strokeLineJoin": "miter",
        "strokeMiterLimit": 4,
        "scaleX": 1,
        "scaleY": 1,
        "angle": 0,
        "flipX": false,
        "flipY": false,
        "opacity": 1,
        "shadow": {
          "color": "rgba(0,0,0,0.3)",
          "blur": 10,
          "offsetX": 10,
          "offsetY": 10,
          "affectStroke": false,
          "nonScaling": false
        },
        "visible": true,
        "backgroundColor": "",
        "fillRule": "nonzero",
        "paintFirst": "fill",
        "globalCompositeOperation": "source-over",
        "skewX": 0,
        "skewY": 0,
        "rx": 0,
        "ry": 0
      }, {
        "type": "circle",
        "version": "4.2.0",
        "originX": "left",
        "originY": "top",
        "left": 365,
        "top": 137,
        "width": 80,
        "height": 80,
        "fill": "rgb(0,255,0)",
        "stroke": null,
        "strokeWidth": 1,
        "strokeDashArray": null,
        "strokeLineCap": "butt",
        "strokeDashOffset": 0,
        "strokeLineJoin": "miter",
        "strokeMiterLimit": 4,
        "scaleX": 1,
        "scaleY": 1,
        "angle": 0,
        "flipX": false,
        "flipY": false,
        "opacity": 0.5,
        "shadow": null,
        "visible": true,
        "backgroundColor": "",
        "fillRule": "nonzero",
        "paintFirst": "fill",
        "globalCompositeOperation": "source-over",
        "skewX": 0,
        "skewY": 0,
        "radius": 40,
        "startAngle": 0,
        "endAngle": 6.283185307179586
      }, {
        "type": "text",
        "version": "4.2.0",
        "originX": "left",
        "originY": "top",
        "left": 381.43,
        "top": 239.34,
        "width": 393.48,
        "height": 45.2,
        "fill": "#49d00b",
        "stroke": null,
        "strokeWidth": 1,
        "strokeDashArray": null,
        "strokeLineCap": "butt",
        "strokeDashOffset": 0,
        "strokeLineJoin": "miter",
        "strokeMiterLimit": 4,
        "scaleX": 0.5,
        "scaleY": 0.5,
        "angle": 359.27,
        "flipX": false,
        "flipY": false,
        "opacity": 1,
        "shadow": null,
        "visible": true,
        "backgroundColor": "",
        "fillRule": "nonzero",
        "paintFirst": "fill",
        "globalCompositeOperation": "source-over",
        "skewX": 0,
        "skewY": 0,
        "text": "Lorem ipsum dolor sit ",
        "fontSize": 40,
        "fontWeight": "",
        "fontFamily": "helvetica",
        "fontStyle": "normal",
        "lineHeight": 1.16,
        "underline": false,
        "overline": false,
        "linethrough": false,
        "textAlign": "left",
        "textBackgroundColor": "",
        "charSpacing": 0,
        "styles": {}
      }]
    })
    this.canvas.loadFromJSON(str);
  }


  setActiveStyle(styleName, value, object) {
    object = object || this.canvas.getActiveObject();
    if (!object) return;
    if (object.setSelectionStyles && object.isEditing) {
      var style = {};
      style[styleName] = value;
      object.setSelectionStyles(style);
    } else {
      object.set(styleName, value);
    }
    object.setCoords();
    this.canvas.requestRenderAll();
  }

  removeSelected() {
    const activeObjects = this.canvas.getActiveObjects();
    this.canvas.discardActiveObject()
    if (activeObjects.length) {
      this.canvas.remove.apply(this.canvas, activeObjects);
    }
  }

  setCanvasBgColor(val) {
    this.canvas.backgroundColor = val;
    this.canvas.renderAll();
  }
}

export default XFabric



