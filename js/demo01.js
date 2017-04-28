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
// helper functions:

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


(lib.元件1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#990000").s().p("A9GRHMAAAgiNMA6MAAAMAABAiNg");
	this.shape.setTransform(7974.3,109.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#99FF99").s().p("A9aRHMAAAgiNMA60AAAMAABAiNg");
	this.shape_1.setTransform(8773.5,109.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#003333").s().p("Eg7vARHMAAAgiNMB3fAAAMAAAAiNg");
	this.shape_2.setTransform(9848.9,109.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF9900").s().p("A+VRHMgABgiNMA8tAAAMAAAAiNg");
	this.shape_3.setTransform(2979,109.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000033").s().p("A5pRHMgABgiNMAzVAAAMAAAAiNg");
	this.shape_4.setTransform(3646,109.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#009933").s().p("A09RHMgABgiNMAp7AAAMAACAiNg");
	this.shape_5.setTransform(4256.9,109.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("A7hRHMgABgiNMA3FAAAMAAAAiNg");
	this.shape_6.setTransform(4911.9,109.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#669900").s().p("EggOARHMAAAgiNMBAcAAAMAABAiNg");
	this.shape_7.setTransform(5642.9,109.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#006600").s().p("EghKARHMgABgiNMBCWAAAMAABAiNg");
	this.shape_8.setTransform(7215.2,109.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#660000").s().p("EHF2ARHMgABgiNMA9+AAAMAAAAiNgEoDzARHMAAAgiNMA/VAAAMAAAAiNg");
	this.shape_9.setTransform(3301.2,109.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#00CC33").s().p("A4aRHMAAAgiNMAw1AAAMAAAAiNg");
	this.shape_10.setTransform(994.1,109.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FF99CC").s().p("A8KRHMAAAgiNMA4UAAAMAAAAiNg");
	this.shape_11.setTransform(1751.2,109.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FF0000").s().p("A5pRHMAAAgiNMAzTAAAMAAAAiNg");
	this.shape_12.setTransform(2364.1,109.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#183851").s().p("EJ1DARHMAAAgiNMBO3AAAMAAAAiNgEH33ARHMgABgiNMBCXAAAMAABAiNgEGFUARHMAAAgiNMA4WAAAMAAAAiNgEEEZARHMAAAgiNMA+lAAAMAAAAiNgECOuARHMgABgiNMA3tAAAMAAAAiNgAXzRHMAAAgiNMA2cAAAMAAAAiNgEhVFARHMgACgiNMA11AAAMAABAiNgEiv3ARHMAAAgiNMAwzAAAMAACAiNgEkTZARHMAAAgiNMAwNAAAMAABAiNgEl4KARHMAAAgiNMAoEAAAMAAAAiNgEnVbARHMAAAgiNMAp9AAAMAAAAiNgEpPeARHMAAAgiNMBBuAAAMAAAAiNgErD5ARHMAAAgiNMBDmAAAMAAAAiNg");
	this.shape_13.setTransform(4935.9,109.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件1, new cjs.Rectangle(0,0,10231.3,219), null);


// stage content:
(lib.demo01 = function(mode,startPosition,loop) {
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
				var cx = that.movieClip_1.x;
				var ex = null;
				//this.movieClip_1.addEventListener("click", fl_MouseClickHandler.bind(this));
				$('#box').unbind('touchstart').bind('touchstart',function(Event){
					var touch = Event.originalEvent.targetTouches[0];
					ex = touch.pageX;
					
					
				});
				$('#box').unbind('touchmove').bind('touchmove',function(Event){
					var touch = Event.originalEvent.targetTouches[0];
					var mx = touch.pageX;
					that.movieClip_1.x=cx+(mx-ex)*1.5;
		
				});
				$('#box').unbind('touchend').bind('touchend',function(Event){
					//var touch = Event.originalEvent.targetTouches[0];
					//var mx = touch.pageX;
					cx=that.movieClip_1.x;
		
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
p.nominalBounds = new cjs.Rectangle(-4466.1,243.6,10231.3,219);
// library properties:
lib.properties = {
	width: 667,
	height: 323,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;