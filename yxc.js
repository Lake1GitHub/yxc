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
  window: function(){
    var w = window;
    var width = w.innerWidth;
    var height = w.innerHeight;
    var outWidth = w.outerWidth;
    var outHeight = w.outerHeight;
    var inWidth = width;
    var inHeight = height;
    return{
      width: width,
      height: height,
      outHeight: outHeight,
      outWidth: outWidth,
      inWidth: inWidth,
      inHeight: inHeight
    };

  },
  offset: function(ele){
    var box = ele.getBoundingClientRect();
    var w = window;
    var d = w.document;
    var winHeight, winWidth;
    var width = box.width || (box.right - box.left);
    var height = box.height || (box.bottom - box.top);
    var top, left, right, bottom;
    winHeight = this.window().height;
    winWidth = this.window().width;
    top = box.top;
    left = box.left;
    right = winWidth - box.right;
    bottom = winHeight - box.bottom;
    return {
      width: width,
      height: height,
      top: top,
      left: left,
      right: right,
      bottom: bottom
    };
  },
  client: function(ele){
    ele = ele ||window;
    if(ele.innerWidth != null) return {width: ele.innerWidth, height: ele.innerHeight};
    var d = ele.document;
    if(document.compatMode == "CSS1Compat"){
      return {
        width: d.documentElement.clientWidth,
        height: d.documentElement.clientHeight
      };
    }
    return {
      width: d.body.clientWidth,
      height: d.body.clientHeight
    };
  },
  scroll: function(ele){
    var scrollX, scrollY;
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
