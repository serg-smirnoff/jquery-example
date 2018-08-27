		function dropdown_set_name(a){
			if (window.matchMedia("(max-width: 480px)").matches){
				$("#dropdown-block").text(a);
				$(".services-links").toggle();
			}
		}
		
		function dropdown_click(){
			if (window.matchMedia("(max-width: 480px)").matches){
				$(".services-links").addClass("services-links-border");
				$(".services-links").toggle();
			}
		}

		function show_block(a){
			$(".services > .service-item").css("display","none");
			$("."+a).css("display","block");
		}

		function feedbacktop() {
			var form_wrapper = $('.feedback_report_top');
			var form = $('#feedback-top');
			var fields  = form.serialize();
			
			$.ajax({
			  type: 'POST',
			  dataType: 'json',
			  url: 'feedback.php',
			  data: {fields: fields},
			  success: function(data) {
			  	if ( data.status == 'error' ) {
                    if ( data.name != undefined ) $('input[name="name"]', form).addClass('error');
                    if ( data.phone != undefined ) $('input[name="phone"]', form).addClass('error');
                } else if ( data.status == 'success' ) {
                    form_wrapper.html('<div class="feedback-ok">'+data.text+'</div>');
					dataLayer.push({'event': 'form_top_sent'});
                }
			  }
			});
			
		}
		
		function feedbackbottom() {
			var form_wrapper = $('.feedback_report_bottom');
			var form = $('#feedback-bottom');
			var fields  = form.serialize();
			
			$.ajax({
			  type: 'POST',
			  dataType: 'json',
			  url: 'feedback.php',
			  data: {fields: fields},
			  success: function(data) {
			  	if ( data.status == 'error' ) {
                    if ( data.name != undefined ) $('input[name="name"]', form).addClass('error');
                    if ( data.phone != undefined ) $('input[name="phone"]', form).addClass('error');
                } else if ( data.status == 'success' ) {
                    form_wrapper.html('<div class="feedback-ok">'+data.text+'</div>');
					dataLayer.push({'event': 'form_bottom_sent'});
                }
			  }
			});
			
		}
			
		$(document).ready(function() {
        	
			$('input[type="tel"]').mask('+7 (999) 999-99-99');
        	
        	$('input').focus(function() {
        		$(this).removeClass('error');
        	});
			
			$(".video").click(function(){
				autoPlayVideo('GNIBZMiZhdw', 770, 505);
				dataLayer.push({'event': 'video_play'});
			});
			
			function autoPlayVideo(vcode, width, height) {
				$(".video").append('<iframe width="' + width + '" height="' + height + '" src="https://www.youtube.com/embed/' + vcode + '?autoplay=1&loop=1&rel=0&wmode=transparent" frameborder="0" allowfullscreen wmode="Opaque"></iframe>');
			}			
			
			$('a.scroll_slow[href^="#"]').bind('click.scroll_slow',function (e) {

			e.preventDefault();

			var target = this.hash,
			$target = $(target);

			$('html, body').stop().animate({
					'scrollTop': $target.offset().top
					}, 700, 'swing', function () {
					window.location.hash = target;
				});
			});

			$(".flexslider").flexslider({
				animation: "slide",
				directionNav: true,
				controlNav: false
			});

			$(".flexslider2").flexslider({
				animation: "slide",
				directionNav: false,
				controlNav: true
			});

			$(".fancybox").fancybox({
				'overlayShow'	: false,
				'transitionIn'	: 'elastic',
				'transitionOut'	: 'elastic',
				type : 'image'
			});
					
			$().UItoTop({ easingType: 'swing' });
			
		});
