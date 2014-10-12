var config = {
	limit_time:60000	
}

var Game = function(){
	var self = this;
	this.sprites = [];
	
	this.images = [];
	this.imageUrls = [];
	
	this.startTime = 0;
	this.lastTime = 0;
	this.gameTime = 0;
	this.fps = 0;
	this.STARTING_FPS = 60;
	
	this.imagesLoaded = 0;
	this.imagesFailedToLoad = 0;
	
	this.paused = false;
	this.startedPauseAt = 0;
	this.PAUSE_TIMEOUT = 100;
		

	this.total = 33;
	return this;
}

Game.prototype = {
	start:function(){
		var self = this;
		this.startTime = getTimeNow();		//record the start time.
	},
	////////////////////////////////////////////////
	loadImage:function(imageUrl,required){
		/*
		 * need to reload while function imageReLoad running if required equal to TRUE
		 *	
		*/
		var image = new Image();
		var self = this;
		
		image.src = imageUrl;
		//此处需要设定图片状态为0
		
		
		image.addEventListener('load',function(e){
			self.imageLoadedCallback(e,required);	
		});	
		image.addEventListener('error',function(e){
			self.imageLoadErrorCallback(e,required);	
		});
		this.images[imageUrl] = image;
	},
	////////////////////////////////////////////////
	queueImage:function(imageUrl){
		this.imageUrls.push(imageUrl);	
	},
	////////////////////////////////////////////////
	getImageByUrl:function(imageUrl){
		return this.images[imageUrl];
	},
	////////////////////////////////////////////////
	getImage:function(index){
		return this.getImageByUrl(this.imageUrls[index]);
	},
	////////////////////////////////////////////////
	imageReLoad:function(){
		/*
		* check if all images loaded
		* 
		*/
		
		
	},
	////////////////////////////////////////////////
	imageLoadedCallback:function(e,required){
		if(required){
			this.imagesLoaded ++;
			var percent = parseInt(this.imagesLoaded / this.total * 100);
			document.getElementById("loading").innerHTML = "游戏加载中，请稍后...(" + percent + "%)";
			if(this.imagesLoaded >= this.total - 1){
				init();	
			}
		}

	},
	////////////////////////////////////////////////
	imageLoadErrorCallback:function(e,required){
		if(required){
			this.imagesLoaded ++;
			var percent = parseInt(this.imagesLoaded / this.total * 100);
			document.getElementById("loading").innerHTML = "游戏加载中，请稍后...(" + percent + "%)";
			if(this.imagesLoaded >= this.total - 1){
				init();	
			}
		}

	}
}
var game = new Game();
var lhref=window.location.href.split('/');
lhref[lhref.length-1] = '';
var shref=lhref.join('/');
var _http = shref;
game.loadImage(_http + "images/n0.png",true);
game.loadImage(_http + "images/n1.png",true);
game.loadImage(_http + "images/n2.png",true);
game.loadImage(_http + "images/n3.png",true);
game.loadImage(_http + "images/n4.png",true);
game.loadImage(_http + "images/n5.png",true);
game.loadImage(_http + "images/n6.png",true);
game.loadImage(_http + "images/n7.png",true);
game.loadImage(_http + "images/n8.png",true);
game.loadImage(_http + "images/n9.png",true);
game.loadImage(_http + "images/nn.png",true);
game.loadImage(_http + "images/np.png",true);
game.loadImage(_http + "images/ns.png",true);

game.loadImage(_http + "images/logo.png",true);
game.loadImage(_http + "images/f1.png",true);
game.loadImage(_http + "images/f2.png",true);
game.loadImage(_http + "images/f3.png",true);
game.loadImage(_http + "images/f4.png",true);
game.loadImage(_http + "images/f5.png",true);
game.loadImage(_http + "images/f6.png",true);
game.loadImage(_http + "images/f7.png",true);
game.loadImage(_http + "images/f8.png",true);
game.loadImage(_http + "images/time.png",true);
game.loadImage(_http + "images/talk.png",true);

game.loadImage(_http + "images/rank_bg.png",true);
game.loadImage(_http + "images/result.png",true);
game.loadImage(_http + "images/girl.png",true);
game.loadImage(_http + "images/title.png",true);
game.loadImage(_http + "images/notice.png",true);

game.loadImage(_http + "images/role.png",true);
game.loadImage(_http + "images/role_1.png",true);
game.loadImage(_http + "images/role_2.png",true);
game.loadImage(_http + "images/role_3.png",true);


function next_load(){
	game.loadImage(_http + "images/x0.png",false);
	game.loadImage(_http + "images/x1.png",false);
	game.loadImage(_http + "images/x2.png",false);
	game.loadImage(_http + "images/x3.png",false);
	game.loadImage(_http + "images/x4.png",false);
	game.loadImage(_http + "images/x5.png",false);
	game.loadImage(_http + "images/x6.png",false);
	game.loadImage(_http + "images/x7.png",false);
	game.loadImage(_http + "images/x8.png",false);
	game.loadImage(_http + "images/x9.png",false);
	game.loadImage(_http + "images/c1.png",false);
	game.loadImage(_http + "images/c2.png",false);
	game.loadImage(_http + "images/c3.png",false);
	game.loadImage(_http + "images/share.png",false);
	game.loadImage(_http + "images/coins.png",false);
	game.loadImage(_http + "images/over.png",false);
	game.loadImage(_http + "images/bottom.png",false);
}
