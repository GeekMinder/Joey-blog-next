# 理解重排和重绘

在此之前，帮大家回忆一下浏览器是如何绘制界面：

html解析生成dom树， css解析生成cssom树，两者结合生成渲染树render tree

之后重排会计算每个节点的几何信息(位置、大小)

最后浏览器在屏幕上绘制render tree

## 1. 什么是重排和重绘

### 1.1 重排 reflow

从mdn上描述的来看，重排其实是浏览器重新计算页面内元素的位置和几何大小的过程。

> *This tends to be followed by repainting（往往伴随着重绘，这个后面会说）*

### 1.2 重绘 repaint

在经过了重排的阶段后，如果布局和几何信息发生变化，就会发生重绘：将渲染树的每个节点转化成屏幕上的像素的过程。

## 2. 哪些属性会触发重排和重绘？

### 2.1 重排

一般是布局类属性

| 盒模型 | display padding margin width height min-height max-height border border-width |
| --- | --- |
| 定位和浮动 | position top bottom left right float clear |
| 文字及溢出 | font-family font-size font-weight line-height text-align vertical-align white-space overflow overflow-y |

```jsx

// 举例
bodyStyle.padding = "20px"; // reflow, repaint
bodyStyle.border = "10px solid red"; // reflow, repaint

// 隐藏 DOM 元素将导致重排和重绘 reflow
display: none 

//  更改字体样式会更改元素的几何形状
bodyStyle.fontSize = "2em"; // reflow, repaint

// new DOM element - reflow, repaint
document.body.appendChild(document.createTextNode('Hello!'));
```

### 2.2 重绘

一般是绘制类属性

| 颜色 | color |
| --- | --- |
| 边框 | border-color border-style border-radius |
| 背景 | background background-image background-position background-repeat background-size background-color |
| 轮廓 | outline outline-color outline-style outline-width |
| 可见性 | visibility |
| 文字方向 | text-decoration |
| 发光 | box-shadow |

```jsx

// 举例
bodyStyle.color = "blue"; // 没有布局或位置更改只会repaint 

bodyStyle.backgroundColor = "#cc0000"; // repaint

visibility: hidden  // visibility没有布局或位置更改 只会repaint
```

## 3.如何避免频繁触发重排和重绘

1. 使用仅引起合成的属性transform 、opacity
2. 批量修改dom
3. 不要重复计算样式，将它们缓存到变量中
