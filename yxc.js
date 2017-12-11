var yxc = {
    self: this,
    eleIsExist: function(ele){
        if(!ele){
            throw('ele is valid');
        }
    },
    $: function(ele){
        this.eleIsExist(ele);
        return document.querySelector(ele);
    },
    addEvent: function(ele, handle, fn){
        this.eleIsExist(ele);
        if(ele.addEventListener){
            ele.addEventListener(handle, fn);
        } else if(ele.attachEvent){
            ele.attachEvent('on'+handle, fn);
        } else {
            ele[handle] = fn;
        }
    },
    removeEvent: function(ele, handle, fn){
        this.eleIsExist(ele);
        if(ele.removeEventListener){
            ele.removeEventListener(handle, fn);
        } else if(ele.detachEvent){
            ele.detachEvent('on'+handle, fn);
        } else {
            ele[handle] = null;
        }
    },
    window: function(){  //window宽高
        var w = window;
        var width = w.innerWidth;
        var height = w.innerHeight;
        var outWidth = w.outerWidth;
        var outHeight = w.outerHeight;
        var inWidth = width;
        var inHeight = height;
        return{
            width: width,             //浏览器文档宽度
            height: height,           //浏览器文档高度
            outHeight: outHeight,     //浏览器总高度（包括工具栏等）
            outWidth: outWidth,       //浏览器总宽度（包括工具栏等）
        };

    },
    offset: function(ele){   //文档位置属性
        var box = ele.getBoundingClientRect();
        var winHeight, winWidth;
        var width = box.width || (box.right - box.left);
        var height = box.height || (box.bottom - box.top);
        var top, left, right, bottom;
        winHeight = this.window().height;
        winWidth = this.window().width;
        top = box.top + this.scroll(ele).scrollY;
        left = box.left + this.scroll(ele).scrollX;
        right = winWidth - box.right;
        bottom = winHeight - box.bottom;
        return {
            width: width,                //文档元素宽度
            height: height,              //文档元素高度
            top: top,                    //元素与文档顶部距离
            left: left,                  //元素与文档左部距离
            right: right,                //元素与文档右部距离
            bottom: bottom               //元素与文档底部距离
        };
    },
    client: function(ele){    //视口位置属性
        var box = ele.getBoundingClientRect();
        var winHeight = this.window().height;
        var winWidth = this.window().width;
        var top = box.top;
        var left = box.left;
        var right = winWidth - box.right;
        var bottom = winHeight - box.bottom;
        return {
            top: top,
            left: left,
            right: right,
            bottom: bottom
        }
    },
    scroll: function(ele){
        var scrollX, scrollY;
        var w = window;
        if(w.pageXOffset != null){
            scrollX = w.pageXOffset;
            scrollY = w.pageYOffset;
        } else if(document.compatMode == 'CSS1Compat'){
            scrollX = d.documentElement.scrollLeft;
            scrollY = d.documentElement.scrollTop;
        } else {
            scrollX = d.body.scrollLeft;
            scrollY = d.body.scrollTop;
        };
        return {
            scrollX: scrollX,
            scrollY: scrollY
        }
    }
}
