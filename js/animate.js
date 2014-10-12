function getPageHeight(){
	return $("#wrap").height();	
}
function getPageWidth(){
	return $("#wrap").width();	
}
function getLeft(){
	return parseInt($("#player").css("left"));	
}


function setNumber(obj,_numbers,_show){
	$(obj).html("");
	
	var _int = parseInt(_numbers);
	var numbers = new Array();
	if(_int >= 0){
		do{
			var _number = _int % 10;		//对10取余	
			_int = parseInt(_int / 10);
			$("<article></article>").addClass("n" + _number).prependTo(obj);
			numbers.push(_number);
		}while(_int > 0);	
		if(_show){
			//正号加进去	
			$("<article></article>").addClass("np").prependTo(obj);
		}
	}else{
		//加负号	
		var _n = parseInt(-1 * _numbers);
		do{
			var _number = _n % 10;		//对10取余	
			_n = parseInt(_n / 10);
			$("<article></article>").addClass("n" + _number).prependTo(obj);
			numbers.push(_number);
		}while(_n > 0);
		$("<article></article>").addClass("nn").prependTo(obj);
	}
	

}

function drop(obj,x,speed,type,callback){
	/*
	 * 
	 * type决定分数
	**/
	var _page_height = getPageHeight();
	var _move_to = _page_height - 100;
	var _move_time = speed * (_move_to / _page_height);
	
	var _last = speed - _move_time;
	$(obj).animate({left:x,top:0},0).animate({left:x,top:_move_to},_move_time,"linear",function(){
		//此处执行callback，判断是否得分
		var _left = getLeft();
		if(x > _left - 34 && x < _left + 122 - 34){
			$(this).remove();
			//score += type;
			switch(type){
				case 1:;
				case 2:;
				case 3:;
				case 4:;
				case 5:fan();break;
				case 6:;
				case 7:qian();break;
				case 8:zadan();break;
				default:break;	
			}
			

			setNumber($("#score")[0],score);
		}else{
			$(this).animate({left:x,top:_page_height,opacity:0},_last,"linear",function(){
				$(this).remove();	
			});
		}
	});
}

function live_score(__score){
	if(!game_over){
		var _left = getLeft();
		var _numbers = $("<article></article>").addClass("number").appendTo("#wrap");
		var _top = getPageHeight() - 180;
		setNumber(_numbers,__score,true);
		$(_numbers).animate({left:_left + 90,top:_top,opacity:0},0).animate({left:_left+120,top:_top,opacity:1},300,function(){
			$(this).remove();	
		});
	}

}
function fan(){
	
	if(!game_over){
		score += 10;
		/*
		* 接到饭，加10分，显示type1人物形象
		*/	
		$("#role > img").attr("src","images/role_1.png");
		setTimeout(function(){
			$("#role > img").attr("src","images/role.png");
		},200);
		live_score(10);
		$("#a2")[0].play();
	}

}
function qian(){
	if(!game_over){
		score += 1;
		/*
		* 接到饭，加10分，显示type1人物形象
		*/	
		$("#role > img").attr("src","images/role_2.png");
		setTimeout(function(){
			$("#role > img").attr("src","images/role.png");
		},200);
		live_score(1);
		$("#a1")[0].play();
	}

}
function zadan(){
	if(!game_over){
		if(score - 5 > 0){
			score -= 5;	
		}else{
			score = 0;	
		}
		/*
		* 接到炸弹
		*/
		$("#role > img").attr("src","images/role_3.png");
		setTimeout(function(){
			$("#role > img").attr("src","images/role.png");
		},200);
		live_score(-5);
		$("#a3")[0].play();
	}
	

}
