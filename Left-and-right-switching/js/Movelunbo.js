/**
小型商品展示轮播
*/
$(function(){
	var i=0;
	$('.tou_right').click(function(){
		i++;
		if(i>=8){
			$('.shang_show').find('ul').css("left",'-1392px')
			i=8;
		}
		$('.shang_show').find('ul').css("left",i*(-174)+"px")
	})
	$('.tou_left').click(function(){
		i--;
		console.log(i);
		if(i<0){
			$('.shang_show').find('ul').css("left",'0px')
			i=0;
		}
		$('.shang_show').find('ul').css("left",i*(-174)+"px")
	})
})
