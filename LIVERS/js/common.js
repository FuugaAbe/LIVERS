$(function(){
	$('a[href*=\\#]:not([href=\\#],.popup-modal)').on('click',function() {
	if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var $target = $(this.hash);
			$target = $target.length && $target || $('[name=' + this.hash.slice(1) +']');
			if ($target.length) {
				if($(this).parents('.menuBox').length){
					setTimeout(function(){
						var targetOffset = $target.offset().top - $('#gHeader').innerHeight();
						$('html,body').animate({scrollTop: targetOffset}, 1000);
					},100);
				}else{
					var targetOffset = $target.offset().top - $('#gHeader').innerHeight();
					$('html,body').animate({scrollTop: targetOffset}, 1000);
				}
				return false;
			}
		}
	});


	$('.menu').on('click', function(){
		$(this).toggleClass('on');
		$('.menuBox').stop().fadeToggle();
	})

	$('.menuBox li a:not(.accordion)').on('click',function(){
		$('.menu').removeClass('on');
		$('.menuBox').fadeOut();
	});
});

$(window).on('load',function(){
	var localLink = window.location+'';
	if(localLink.indexOf("#") != -1 && localLink.slice(-1) != '#'){
		localLink = localLink.slice(localLink.indexOf("#")+1);
		if($('#'+localLink).length){
			setTimeout(function(){
				$('html,body').animate({scrollTop: $('#'+localLink).offset().top - $('#gHeader').innerHeight()}, 500);
			},100);
		}
	}
});