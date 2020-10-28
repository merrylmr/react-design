import {fabric} from "fabric";
// 初始化配置
fabric.Object.prototype.transparentCorners = false;

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
        "shadow": null,
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
    if (object.setSelectionStyles) {
      var style = {};
      style[styleName] = value;
      object.setSelectionStyles(style);
    } else {
      object.set(styleName, value);
    }
    object.setCoords();
    this.canvas.requestRenderAll();
  }
}

export default XFabric



