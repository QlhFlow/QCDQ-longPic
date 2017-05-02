(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.awrasf = function() {
	this.initialize(img.awrasf);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1334,646);


(lib.sdgsdg = function() {
	this.initialize(img.sdgsdg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,565,447);


(lib.sesg = function() {
	this.initialize(img.sesg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,350,207);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.元件15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.awrasf, null, new cjs.Matrix2D(1,0,0,1,-682.9,-313.2)).s().p("EglnAdQIhih0IjuA6IhsgjIA+m9IjdnRIAAgCQCMq3IjndIABACIAAAQIBIBwIB9BgQBRA+BeAtQAmATAqAJIAMAIQAsAAAsgGQAQABAPgDIjnFhIhsH+IAOO5gEAiJAdIIhszMIouxFIqmmFI4Gg4IqaGJIlSIDQgChCgHhCIgIg9IgMgQQAEgPgGgLQgRgfgTggQgPgZgLgaQguhihKg2QhnhLhygzIAVgCIhIgUIAwAUIADACIg3ACQgUAEgRAGQEAwgTkjOIa9AAUAdFANBACQAk9IAAIZg");
	this.shape.setTransform(301.1,187.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,602.2,374.4);


(lib.元件11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.awrasf, null, new cjs.Matrix2D(1,0,0,1,-480,-284.2)).s().p("ACeFaQgrgKglgSQheguhQg+Ih9hgIhIhwIAAgPQgjhEAIhQQAPiNCQgbIA2gCQgZgMgZgKIBIAUIgWACQByAzBnBLQBJA1AvBjQAKAaAPAZQAUAeAQAfQAGAMgDAPIAMAQIAHA9QAHBCACBDIghAyQgQACgQAAQgsAGgrAAg");
	this.shape.setTransform(32.2,35.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,64.5,70.8);


(lib.元件8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.awrasf, null, new cjs.Matrix2D(1,0,0,1,-606.7,-350.8)).s().p("AADAbIgHgDIhWheIABAAIAMgIIAXgCICDB1IgBAEIAPAnIgpABg");
	this.shape.setTransform(12.2,8.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(3.1,0.4,18.1,16.2);


(lib.元件7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.awrasf, null, new cjs.Matrix2D(1,0,0,1,-601.7,-343.5)).s().p("AkeAWICQg7IDvguIC1gBIAJA+IhpAsIiNghIhEAFIgMAHIgOAHIgRAZIi8A0g");
	this.shape.setTransform(28.7,8.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,57.5,17);


(lib.元件16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.元件11("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(32.2,35.4,1,1,0,0,0,32.2,35.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:360},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,64.5,70.8);


(lib.元件14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.元件15("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(312.3,264.8,1,1,0,0,0,312.3,264.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.95,scaleY:0.95,y:264.9},6).to({scaleX:1,scaleY:1,y:264.8},6).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,602.2,374.4);


(lib.元件4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 2
	this.instance = new lib.元件7("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(26.5,12.6,1,1,0,0,0,26.5,7.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:26.4,rotation:9.4,x:22,y:24.5},17,cjs.Ease.get(1)).to({regX:26.5,rotation:0,x:26.5,y:12.6},19,cjs.Ease.get(1)).wait(1));

	// 图层 1
	this.instance_1 = new lib.元件8("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(40.5,27.3,1,1,0,0,0,18.9,15.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:-38.5},17,cjs.Ease.get(1)).to({rotation:0},19,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,4.7,57.5,23.9);


(lib.元件3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 2
	this.instance = new lib.元件16();
	this.instance.parent = this;
	this.instance.setTransform(98.2,158.2,1,1,0,0,0,32.2,35.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// 图层 1
	this.instance_1 = new lib.元件14();
	this.instance_1.parent = this;
	this.instance_1.setTransform(301.1,187.2,1,1,0,0,0,301.1,187.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,602.2,374.4);


(lib.元件2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.元件4();
	this.instance.parent = this;
	this.instance.setTransform(195.5,125.1,1,1,0,0,0,28.7,14.3);

	this.instance_1 = new lib.元件4();
	this.instance_1.parent = this;
	this.instance_1.setTransform(126.7,121.8,1,1,0,0,0,28.7,14.3);

	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.awrasf, null, new cjs.Matrix2D(1,0,0,1,-689.3,-374.5)).s().p("AqXXsI22g2IgSyEIBtn+IJauXIKamIIYGA4IKmGFIIvRFICCXVgAj9kGIBGAKIBWCCIAcgCIg0iTIEbBFIAAAAIAAAAIAYgjIgBAAIgbgyIAAAAIjKg0IkHAEIioBKIAeArIAAAAIDAgsgAtajfIAjAOIAwA2IAogBIgOgnIAahQICHg5IgLhGIjCgnIlyCbIAdA+IDgg+g");
	this.shape.setTransform(214.4,151.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,428.7,303.2);


(lib.元件17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.元件2();
	this.instance.parent = this;
	this.instance.setTransform(245.6,293.2,1,1,0,0,0,245.6,293.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(13).to({scaleY:1.09,y:293.3},7,cjs.Ease.get(1)).to({regY:293.3,scaleY:0.95},3,cjs.Ease.get(1)).to({regY:293.2,scaleY:1.05},3,cjs.Ease.get(1)).to({scaleY:0.98,y:293.2},3,cjs.Ease.get(1)).to({regY:293.1,scaleY:1.02},3,cjs.Ease.get(1)).to({regY:293.2,scaleY:1},3,cjs.Ease.get(1)).wait(35));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,428.7,303.2);


(lib.元件19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.sdgsdg();
	this.instance.parent = this;
	this.instance.setTransform(956,248);

	this.instance_1 = new lib.sesg();
	this.instance_1.parent = this;
	this.instance_1.setTransform(470.8,0);

	this.instance_2 = new lib.元件17();
	this.instance_2.parent = this;
	this.instance_2.setTransform(360.3,561.9,1,1,0,0,0,214.3,151.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件19, new cjs.Rectangle(146,0,1375,713.5), null);


(lib.元件18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.元件17();
	this.instance.parent = this;
	this.instance.setTransform(307.5,248.5,1,1,0,0,0,214.3,151.6);

	this.instance_1 = new lib.元件3("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(301.1,200.1,1,1,0,0,0,301.1,200.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件18, new cjs.Rectangle(0,0,602.2,400.1), null);


(lib.元件1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.元件18();
	this.instance.parent = this;
	this.instance.setTransform(7009.9,126.7,0.5,0.5,0,0,0,301.1,200.1);

	this.instance_1 = new lib.元件18();
	this.instance_1.parent = this;
	this.instance_1.setTransform(6708.8,115.7,0.5,0.5,0,0,0,301.1,200.1);

	this.instance_2 = new lib.元件18();
	this.instance_2.parent = this;
	this.instance_2.setTransform(6438.4,115.7,0.5,0.5,0,0,0,301.1,200.1);

	this.instance_3 = new lib.元件18();
	this.instance_3.parent = this;
	this.instance_3.setTransform(6108.8,115.7,0.5,0.5,0,0,0,301.1,200.1);

	this.instance_4 = new lib.元件18();
	this.instance_4.parent = this;
	this.instance_4.setTransform(5787.5,115.7,0.5,0.5,0,0,0,301.1,200.1);

	this.instance_5 = new lib.元件18();
	this.instance_5.parent = this;
	this.instance_5.setTransform(5486.4,104.7,0.5,0.5,0,0,0,301.1,200.1);

	this.instance_6 = new lib.元件18();
	this.instance_6.parent = this;
	this.instance_6.setTransform(5216,104.7,0.5,0.5,0,0,0,301.1,200.1);

	this.instance_7 = new lib.元件18();
	this.instance_7.parent = this;
	this.instance_7.setTransform(4886.4,104.7,0.5,0.5,0,0,0,301.1,200.1);

	this.instance_8 = new lib.元件18();
	this.instance_8.parent = this;
	this.instance_8.setTransform(4539.2,104.7,0.5,0.5,0,0,0,301.1,200.1);

	this.instance_9 = new lib.元件18();
	this.instance_9.parent = this;
	this.instance_9.setTransform(4196.8,115.7,0.5,0.5,0,0,0,301.1,200.1);

	this.instance_10 = new lib.元件18();
	this.instance_10.parent = this;
	this.instance_10.setTransform(3255.4,115.7,0.5,0.5,0,0,0,301.1,200.1);

	this.instance_11 = new lib.元件18();
	this.instance_11.parent = this;
	this.instance_11.setTransform(3556.5,115.7,0.5,0.5,0,0,0,301.1,200.1);

	this.instance_12 = new lib.元件19();
	this.instance_12.parent = this;
	this.instance_12.setTransform(4360.3,58.9,0.5,0.5,0,0,0,410.5,313.5);

	this.instance_13 = new lib.元件18();
	this.instance_13.parent = this;
	this.instance_13.setTransform(3857.6,115.7,0.5,0.5,0,0,0,301.1,200.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件1, new cjs.Rectangle(3104.9,-97.8,4055.6,356.8), null);


// stage content:
(lib.QCDQ = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* Mouse Click 事件
		单击此指定的元件实例会执行您可在其中添加自己的自定义代码的函数。
		
		说明:
		1. 在以下"// 开始您的自定义代码"行后的新行上添加您的自定义代码。
		单击此元件实例时，此代码将执行。
		*/
		
		$('body').unbind('touchmove').bind('touchmove',function(e){
			e.preventDefault();
		});
		var that = this;
		var clipY = that.movieClip_1.x;
		var startY = null;
		var lastY = null;
		var lastMoveTime = 0;
		var lastMoveStart = 0;
		var stopInertiaMove = false; // 是否停止缓动
		//this.movieClip_1.addEventListener("click", fl_MouseClickHandler.bind(this));
		$('#box').unbind('touchstart').bind('touchstart',function(Event){
			var touch = Event.originalEvent.targetTouches[0];
			lastY = startY = touch.pageX;
			lastMoveStart = lastY;
			lastMoveTime = new Date().getTime();
			stopInertiaMove = true;

		});
		$('#box').unbind('touchmove').bind('touchmove',function(Event){
			var touch = Event.originalEvent.targetTouches[0];
			var nowY = touch.pageX;
			var moveY = nowY - lastY;
			that.movieClip_1.x+=moveY;
			clipY=that.movieClip_1.x;
			lastY = nowY;

			var nowTime = new Date().getTime();
			stopInertiaMove = true;
			if(nowTime - lastMoveTime > 300) {
				lastMoveTime = nowTime;
				lastMoveStart = nowY;
			}

		});
		$('#box').unbind('touchend').bind('touchend',function(Event){
			var nowY = lastY;
			var moveY = nowY - lastY;
			var contentTop = that.movieClip_1.x;
			var contentY = (parseInt(contentTop) + moveY);
			that.movieClip_1.x=contentY;
			lastY = nowY;

			var nowTime = new Date().getTime();

			var v = (nowY - lastMoveStart) / (nowTime - lastMoveTime); //最后一段时间手指划动速度
			//console.log(v,nowTime);
			stopInertiaMove = false;
			(function(v, startTime, contentY) {
				var dir = v > 0 ? -1 : 1; //加速度方向
				var deceleration = dir*0.0006;
				var duration = v / deceleration; // 速度消减至0所需时间
				var dist = v * duration / 1.8; //最终移动多少
				//console.log(dist);
				function inertiaMove() {
					if(stopInertiaMove) return;
					//var nowTime = Event.timeStamp || Date.now();
					var nowTime = new Date().getTime();
					var t = nowTime-startTime;
					var nowV = v + t*deceleration;
					// 速度方向变化表示速度达到0了
					if(dir*nowV >0) {
						return;
					}
					var moveY = (v + nowV)/2 * t;
					that.movieClip_1.x = contentY + moveY;
					setTimeout(inertiaMove, 10);
				}
				inertiaMove();
			})(v, lastMoveTime, contentY);

		});
		
		/* 水平移动
		通过将所指定元件实例的 x 属性减少或增加指定的像素数可将其向左或右移动。
		
		说明:
		1. 默认情况下此代码将向右移动元件实例。
		2. 要将元件实例向左移动，将以下数字 100 更改为负值。
		3. 要更改元件实例移动的距离，将以下数字 100 更改为希望元件实例移动的像素数。
		*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// 图层 1
	this.movieClip_1 = new lib.元件1();
	this.movieClip_1.parent = this;
	this.movieClip_1.setTransform(316.1,191.6,1,1,0,0,0,5115.7,109.5);

	this.timeline.addTween(cjs.Tween.get(this.movieClip_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1361.3,145.7,4055.6,356.8);
// library properties:
lib.properties = {
	width: 667,
	height: 323,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/awrasf.png", id:"awrasf"},
		{src:"images/sdgsdg.jpg", id:"sdgsdg"},
		{src:"images/sesg.png", id:"sesg"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;