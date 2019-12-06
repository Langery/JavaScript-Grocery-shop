/**
城市点滑动
*/
$(function(){
	$('.xia_1_left').find('ul').find('li').eq(0).mouseover(function(){
		$('.heng_point').animate({'left': '10px'})
		$('.city1').css('display', 'block');
		$('.city2').css('display', 'none');
		$('.city3').css('display', 'none');
		$('.city4').css('display', 'none');
		$('.city5').css('display', 'none');
	});
	$('.xia_1_left').find('ul').find('li').eq(1).mouseover(function(){
		$('.heng_point').animate({'left':'70px'})
		$('.city2').css('display', 'block');
		$('.city1').css('display', 'none');
		$('.city3').css('display', 'none');
		$('.city4').css('display', 'none');
		$('.city5').css('display', 'none');
	});
	$('.xia_1_left').find('ul').find('li').eq(2).mouseover(function(){
		$('.heng_point').animate({'left':'130px'})
		$('.city3').css('display', 'block');
		$('.city1').css('display', 'none');
		$('.city2').css('display', 'none');
		$('.city4').css('display', 'none');
		$('.city5').css('display', 'none');
	});
	$('.xia_1_left').find('ul').find('li').eq(3).mouseover(function(){
		$('.heng_point').animate({'left':'190px'})
		$('.city4').css('display', 'block');
		$('.city1').css('display', 'none');
		$('.city2').css('display', 'none');
		$('.city3').css('display', 'none');
		$('.city5').css('display', 'none');
	});
	$('.xia_1_left').find('ul').find('li').eq(4).mouseover(function(){
		$('.heng_point').animate({'left':'250px'})
		$('.city5').css('display', 'block');
		$('.city1').css('display', 'none');
		$('.city2').css('display', 'none');
		$('.city3').css('display', 'none');
		$('.city4').css('display', 'none');
	});
})
