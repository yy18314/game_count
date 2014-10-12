function Slide(wrap){
  this.winW = document.documentElement.clientWidth;
  this.winH = document.documentElement.clientHeight;
  this.wrap = document.getElementById(wrap);
  this.startN = 0;
  this.prev = 0;
  this.startX = 0;
  this.startY = 0;
  this.transX = 0;
  this.transY = 0;
}

Slide.prototype = {
  init:function(){
    this.resize();
    this.addHandler(this.wrap,"touchstart",this.bind_fn(this,this.touch_start));
    this.addHandler(this.wrap,"touchmove",this.bind_fn(this,this.touch_move));
    this.addHandler(this.wrap,"touchend",this.bind_fn(this,this.touch_end));
  },
  resize : function(){

  },
  addHandler : function(elem,evtype,fn){
    if(elem.attachEvent){
      elem.attachEvent('on'+evtype,fn);
    }else if(elem.addEventListener){
      elem.addEventListener(evtype,fn,false);
    }else{
      elem["on"+evtype] = fn;
    }
  },
  bind_fn : function(obj,func){
    return function(){
      func.apply(obj,arguments);
    }
  },
  touch_start : function(e){
    if(!event.touches.length) return;
    var touch = event.touches[0];
        this.startX = touch.pageX;
        this.startY = touch.pageY;
		//event.preventDefault();
  },
  touch_move : function(e){
    if(!event.touches.length) return;
    var touch = event.touches[0];
    this.transX = this.startX-touch.pageX;
    this.transY = this.startY-touch.pageY;
	
    e.preventDefault();

    if(Math.abs(this.transY)>Math.abs(this.transX)){

    }
  },
  touch_end : function(){
    if(Math.abs(this.transY)>20){
      this.play(this.startN+this.prev);
    }else{

	}
  }
}
