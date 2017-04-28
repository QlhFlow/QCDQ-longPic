function ImgLoadingByFile(imgArray,loadPageID,loadTxtID,readyID,musicID){
    if(sessionStorage.getItem("pageloaded")){
        $('#'+loadTxtID).html('100%');
        $('#'+loadTxtID).hide();
        $('#'+readyID).show();
        $('#'+readyID).unbind('click').bind('click',function(){
            var timer = setTimeout(function(){
                $('#'+loadPageID).hide();
                var player = document.getElementById(musicID);
                if(player.paused){
                    player.play();
                }
                clearTimeout(timer);
            },300);
        });
    }else{
        var imgLoad = 0;
        if(imgArray.length>0){
            var imgTotal = imgArray.length;
            var percent = 0;
            var img = [];
            for(var i = 0;i<imgArray.length;i++){
                img[i] = new Image();
                console.log(imgArray[i],img[i]);
                img[i].src=imgArray[i];
                img[i].onload = function(){
                    imgLoad++;
                    percent = parseInt(imgLoad/imgTotal*100);
                    //console.log(percent, $('#'+loadTxtID).html());
                    $('#'+loadTxtID).html(percent+'%');
                    console.log(percent);
                    console.log($('#'+loadTxtID).html());
                    if(percent>=100){
                        $('#'+loadTxtID).hide();
                        $('#'+readyID).show();
                        $('#'+readyID).unbind('click').bind('click',function(){
                            var timer = setTimeout(function(){
                                var player = document.getElementById(musicID);
                                if(player.paused){
                                    player.play();
                                }
                                $('#'+loadPageID).hide();
                                clearTimeout(timer);
                            },500);
                        });
                        sessionStorage.setItem("pageloaded", "true");

                    }
                }
            }
        }
    }
}
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

