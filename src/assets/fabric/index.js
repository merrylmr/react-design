import {fabric} from "fabric";

console.log('fabric', fabric);


export function renderComp(items) {
  const canvas = new fabric.Canvas('stage');
  window.canvas = canvas;
  let instance = []
  items.forEach(item => {
    switch (item.type) {
      case 'text':
        instance.push(renderText(item));
        break;
      case 'img':
        renderImg(item, window.canvas);
        break;
      default:
    }
  })

  canvas.add(...instance);

  // 获取json
  console.log(canvas.toJSON());
  // 载入数据
  // canvas.loadFromJSON('{"objects":[{"type":"rect","left":50,"top":50,"width":20,"height":20,"fill":"green","overlayFill":null}]}')
  // canvas.loadFromJSON(JSON.stringify(canvas.toJSON().objects))
}

// 渲染文本
function renderText(item) {
  const text = new fabric.Textbox('我是文本', {
    left: 100,
    top: 150,
    fill: '#D81B60',
    strokeWidth: 2,
    stroke: "#880E4F",
  })
  text.on('moved', function (e) {
    console.log('moved', e);
  })
  return text;
}

function renderImg(item, canvas) {
  return new fabric.Image.fromURL('https://f.cdn-static.cn/1360_16003103201053.jpg', function (img) {
    img.scale(0.5);
    canvas.add(img)
  }, {})
}

export function canvasToJSON() {
  return window.canvas.toJSON()
}