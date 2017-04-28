//function ImgLoadingByFile(imgArray){
//  if(sessionStorage.getItem("pageloaded")){
//      $('#img-loading-txt').html('100%');
//       
//       init();
//      var timer = null;
//      timer = setTimeout(function(){
//	        $("#loadingPage").hide();
//          $('#img-loading-txt').html('100%');
//  		$(".btn-music").show();
//      	$("#animation_container").show();
//      
//	        clearTimeout(timer);
//	        timer=null;
//      },300);
//  }else{
//      var imgLoad = 0;
//      if(imgArray.length>0){
//          var imgTotal = imgArray.length;
//          var percent = 0;
//          var img = [];
//          for(var i = 0;i<imgArray.length;i++){
//              img[i] = new Image();
//              
//              img[i].src=imgArray[i];
//              img[i].onload = function(){
//                  imgLoad++;
//                  
//                  percent = parseInt(imgLoad/imgTotal*100);
//                  $('#img-loading-txt').html(percent+'%');
//                  console.log(percent);
//
//                      if(percent >= 100) {
//                      	
//                      	 init();
//                      	var timer = null;
//                      	timer = setTimeout(function(){
//                      		$("#loadingPage").hide();
//                      		$('#img-loading-txt').html('100%');
//                      		$(".btn-music").show();
//                          	$("#animation_container").show();                               
//                          	sessionStorage.setItem("pageloaded", "true");       
//                           	clearTimeout(timer);
//          					timer=null;
//                      	},300);
//                          
//                      }
//              }
//          }
//      }
//  }
//}
(function(win){
    var remCalc = {};
    var docEl = win.document.documentElement,
        tid,
        hasRem = true;
    hasZoom = true;
    designWidth = 750;
    function refresh(){
        var width = docEl.getBoundingClientRect().width;
        if(hasRem){
            var rem = width/10;
            docEl.style.fontSize = rem + "px";
            remCalc.rem = rem;
            var actualSize = parseFloat(window.getComputedStyle(document.documentElement)["font-size"]);
            if(actualSize!== rem && actualSize>0 && Math.abs(actualSize-rem)>1){
                var remScaled = rem*rem/actualSize;
                docEl.style.fontSize = remScaled + "px";
            }
        }
        if(hasZoom){
            var style = document.getElementById('y_style');
            if(!style){
                style = document.createElement('style');
                style.id = 'y_style';
            }
            style.innerHTML = '._z{zoom:'+ width/designWidth + '}';
            document.getElementsByTagName('head')[0].appendChild(style);
        }
    }
    function dbcRefresh(){
        clearTimeout(tid);
        tid = setTimeout(refresh,100);
    }
    win.addEventListener("resize",function(){
        dbcRefresh()
    },false);
    win.addEventListener("pageshow",function(e){
        if(e.persisted){
            dbcRefresh()
        }
    },false);
    refresh();
    if(hasRem){
        remCalc.refresh = refresh;
        remCalc.rem2px = function(d){
            var val = parseFloat(d)/this.rem;
            if(typeof d==="string" && d.match(/px$/)){
                val+="rem";
            }
            return val
        };
        win.remCalc = remCalc;
    }
})(window);

