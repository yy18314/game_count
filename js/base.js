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