

$(window).load(function(){
	$(".foo").fadeOut(500, function(){
		//$("html").niceScroll({scrollspeed : "100", autohidemode : false});
	});
	$(".main-content").css({"visibility":"visible"});
});



$(document).ready(function(){
	(function($){
		$(window).load(function(){

			// $(".main-content").mCustomScrollbar({
			// 	scrollButtons:{
			// 		enable:true
			// 	},
			// 	scrollInertia: 500,
			// 	theme: "minimal",
			// 	callbacks:{
			// 		whileScrolling:function(){
			// 			var distFromTop=-this.mcs.top;
			// 			$('.blurred').css('opacity', distFromTop/200);
			// 			if( distFromTop <= 300 ) {

			// 				$('#head-text').css({top:distFromTop+200});

			// 			} else {

			// 				$('#head-text').css({top:500});
			// 			}
			// 		}
			// 	}
			// });
		});
	})(jQuery);
	$(document).scroll(function() {
		var distFromTop=$(this).scrollTop();
		$('.blurred').css('opacity', distFromTop/250);
		if( distFromTop <= 300 ) {

			$('#head-text').css({top:distFromTop+200});

		} else {

			$('#head-text').css({top:500});
		}
	});

})


