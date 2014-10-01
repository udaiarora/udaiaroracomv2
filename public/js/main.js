
var anim_angle=360;
var isRunning=false;
var viewed=false;


function isScrolledIntoView(elem)
{
	var docViewTop = $(window).scrollTop();
	var docViewBottom = docViewTop + $(window).height();

	var elemTop = $(elem).offset().top;
	var elemBottom = elemTop + $(elem).height();

	return ((elemBottom <= docViewBottom));//(elemBottom <= docViewBottom) &&
}


$(function() {
	$('a[href*=#]:not([href=#])').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			if (target.length) {
				$('html,body').animate({
					scrollTop: target.offset().top
				}, 500);
				return false;
			}
		}
	});
});



$(window).load(function(){
	$(".foo").fadeOut(500, function(){
		// $("html").niceScroll({scrollspeed : "100", autohidemode : false});
	});
	$(".main-content").css({"display":"block"});
});



$(document).on("scroll", function(){
	if(!viewed && isScrolledIntoView("#second")) {
		viewed=true;
		jQuery(document).ready(function(){
		jQuery('.skillbar').each(function(){
			jQuery(this).find('.skillbar-bar').animate({
				width:jQuery(this).attr('data-percent')
			},2000);
		});
	});
	}
});


$(document).ready(function(){

	// TagCanvas.Start('tagCanvas','tags',{
	// 	textColour: '#fff',
	// 	textHeight: 7,
	// 	noSelect: true,
	// 	initial: [0.05,0.15],
	// 	maxSpeed: 0.1
	// });



	(function($){
		$(window).load(function(){
		});
	})(jQuery);


	$(document).scroll(function() {
		var distFromTop=$(this).scrollTop();
		$('.blurred').css('opacity', distFromTop/150);
		if( distFromTop <= 300 ) {

			$('#head-text').css({top:distFromTop+200});

		} else {

			$('#head-text').css({top:500});
		}
	});



	$("#change-text, .spin-text").on("click", function(ev) {
		$("#change-text").removeClass("breath");
		setTimeout(function()
			{$("#change-text").css({'-webkit-transform':'rotate('+anim_angle+'deg)','-moz-transform':'rotate('+anim_angle+'deg)', '-ms-transform':'rotate('+anim_angle+'deg)','-o-transform':'rotate('+anim_angle+'deg)', '-webkit-transition-duration':'500ms', '-moz-transition-duration':'500ms', '-o-transition-duration':'500ms', '-ms-transition-duration':'500ms'});
		}
		,10)


		setTimeout(function()
			{if (!isRunning){
				isRunning=true;

				anim_angle+=360;
				$(".spin-text").find(".visible").fadeOut(200, function(){
					if (0==$(".spin-text").find(".visible").next().length) 
					{
						$(".spin-text").find(".visible").siblings().first().removeClass("hidden").addClass("visible").removeAttr("style");
					}
					else 
					{
						$(".spin-text").find(".visible").next().removeClass("hidden").addClass("visible").removeAttr("style");
					}

					$(this).addClass("hidden").removeClass("visible");

				});
			}
			
			isRunning=false;
			$("#change-text").addClass("breath");
		}
		, 500);
		

	});

});


