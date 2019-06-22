<div class="instance i1">
  <div class="demo"></div>
	<div class="ctrls">
		<div class="btn btn-default open">开启</div>
		<div class="btn btn-default pause">暂停</div>
	</div>
</div>

查看源代码：

```javascript
new JParticles.Particles('#demo-1', {
    // 两粒子圆心点之间的直线距离为 90
    proximity: 90,
    // 定位点半径 100 以内（包含）的所有粒子，圆心点之间小于等于 proximity 值，则连线
    range: 100,
})
```

<div class="instance i2">
  <div class="demo"></div>
	<div class="ctrls">
		<div class="btn btn-default open">开启</div>
		<div class="btn btn-default pause">暂停</div>
	</div>
</div>

查看源代码：

```javascript
new JParticles.Particles('#demo-2', {
    color: '#25bfff',
    lineShape: 'cube',
    range: 2000,
    proximity: 100,
    // 开启视差效果
    parallax: true,
})
```

<div class="instance i3">
  <div class="demo"></div>
	<div class="ctrls">
		<div class="btn btn-default open">开启</div>
		<div class="btn btn-default pause">暂停</div>
	</div>
</div>

查看源代码：

```javascript
new JParticles.Particles('#demo-3', {
  // range 等于 0，粒子之间不连线
  range: 0,
  num: 18,
  maxR: 20,
  minR: 10,
  maxSpeed: 3,
})
```

### 默认参数及描述

<table class="table table-bordered-inner table-striped">
    <thead>
	    <tr>
	        <th width="100">名称</th>
	        <th width="100">默认值</th>
	        <th width="150">类型</th>
	        <th width="450">描述</th>
	    </tr>
    </thead>
    <tbody>
	    <tr>
	        <td>num</td>
	        <td>0.12</td>
	        <td>number</td>
	        <td>
	            粒子个数。<br>
	            `(0, 1)` 显示为容器宽度相应倍数的个数，`0 & [1, +∞)` 显示具体个数。<br>
	            传入 `0` 是没有意义的，其他雷同参数同理。
	        </td>
	    </tr>
	    <tr>
	        <td>maxR</td>
	        <td>2.4</td>
	        <td>number</td>
	        <td>粒子最大半径 `(0, +∞)` </td>
	    </tr>
	    <tr>
	        <td>minR</td>
	        <td>0.6</td>
	        <td>number</td>
	        <td>粒子最小半径 `(0, +∞)` </td>
	    </tr>
	    <tr>
	        <td>maxSpeed</td>
	        <td>1</td>
	        <td>number</td>
	        <td>粒子最大运动速度 `(0, +∞)` </td>
	    </tr>
	    <tr>
	        <td>minSpeed</td>
	        <td>0.1</td>
	        <td>number</td>
	        <td>粒子最小运动速度 `(0, +∞)` </td>
	    </tr>
	    <tr>
	        <td>proximity</td>
	        <td>0.2</td>
	        <td>number</td>
	        <td>
	            两粒子圆心点之间的直线距离。<br>
	            在 `range` 范围内的两点圆心点之间的距离小于或等于 `proximity`，则两点之间连线。<br>
				      `(0, 1)` 显示为容器宽度相应倍数的值，`0 & [1, +∞)` 显示具体值。
	        </td>
	    </tr>
	    <tr>
	        <td>range</td>
	        <td>0.2</td>
	        <td>number</td>
	        <td>
	            定位点的范围，范围越大连线越多，等于 `0` 时，不连线，相关值无效。<br>
				      `(0, 1)` 显示为容器宽度相应倍数的值，`0 & [1, +∞)` 显示具体值。<br>
	            (定位点：即鼠标移动到画布时的鼠标点，一开始默认生成一点)
	        </td>
	    </tr>
	    <tr>
	        <td>lineWidth</td>
	        <td>0.2</td>
	        <td>number</td>
	        <td>线段的宽度。</td>
	    </tr>
	    <tr>
	        <td>lineShape</td>
	        <td>spider</td>
	        <td>string</td>
	        <td>
              连线的形状，目前支持以下两种：<br>
              `spider:` 散开的蜘蛛状。<br>
              `cube:` 合拢的立方体状。
			    </td>
	    </tr>
	    <tr>
	        <td>eventElem</td>
	        <td>null</td>
	        <td>null 或 element</td>
	        <td>
	            触发移动事件的元素，用于改变定位点，`null` 表示 `Canvas` 画布，或传入 `DOM` 元素对象，如 `document` 等。
	        </td>
	    </tr>
	    <tr>
	        <td>parallax</td>
	        <td>false</td>
	        <td>boolean</td>
	        <td>视差效果，视差效果和粒子移动在移动端都支持陀螺仪特性。</td>
	    </tr>
	    <tr>
	        <td>parallaxLayer</td>
	        <td>[1, 2, 3]</td>
	        <td>array</td>
	        <td>
	            定义粒子在视差图层里的层数及每层的层级大小，类似 `css` 里的 `z-index`。<br>
              取值范围: `[0, +∞)`，值越小视差效果越强烈，`0` 则不动。<br>
              定义四层粒子示例：`[1, 3, 5, 10]`
	        </td>
	    </tr>
	    <tr>
	        <td>parallaxStrength</td>
	        <td>5</td>
	        <td>number</td>
	        <td>视差强度，值越小视差效果越强烈 `(0, +∞)` </td>
	    </tr>
    </tbody>
</table>