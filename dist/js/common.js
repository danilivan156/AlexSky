(function ($) {
	$(document).ready(function () {
		const swiper = new Swiper('.swiper', {
			direction: 'horizontal',
			loop: false,
			slidesPerView: 3,
        	spaceBetween: 30,
			
			breakpoints: {
				// when window width is >= 320px
				320: {
				  slidesPerView: 1
				},
				// when window width is >= 480px
				480: {
				  slidesPerView: 1
				},
				// when window width is >= 640px
				640: {
				  slidesPerView: 2
				},
				// when window width is >= 769px
				769: {
					slidesPerView: 3
				}
			},
		  
			// Navigation arrows
			navigation: {
			  nextEl: '.swiper-button-next',
			  prevEl: '.swiper-button-prev',
			},
		});


		$("#page-up").on("click","a", function (event) {
			event.preventDefault();
			var id  = $(this).attr('href'),
				top = $(id).offset().top;
			$('body,html').animate({scrollTop: top}, 1500);
		});

		$('#call').magnificPopup({
			type: 'inline'
		});
		$('#apply').magnificPopup({
			type: 'inline'
		});
		$('#apply-1').magnificPopup({
			type: 'inline'
		});
		$('#thanks').magnificPopup({
			type: 'inline'
		});
		$('#text-popup-one').magnificPopup({
			type: 'inline'
		});
		$('#text-popup-two').magnificPopup({
			type: 'inline'
		});
		$('#text-popup-three').magnificPopup({
			type: 'inline'
		});
		$('#text-popup-four').magnificPopup({
			type: 'inline'
		});
		$('#text-popup-five').magnificPopup({
			type: 'inline'
		});
		

		$('#form-main').submit(function() { // проверка на пустоту заполненных полей. Атрибут html5 — required не подходит (не поддерживается Safari)
			if (document.form.name.value == '' || document.form.phone.value == '' ) {
				valid = false;
				return valid;
			}
			$.ajax({
				type: "POST",
				url: "mail-main.php",
				data: $(this).serialize()
			}).done(function() {
				$.magnificPopup.open({
					items: {
						src: '#modathanks-popup'
					}
				});
				$(this).find('input').val('');
				$('#form-main').trigger('reset');
			});
			return false;
		});
		$('#form-call').submit(function() { // проверка на пустоту заполненных полей. Атрибут html5 — required не подходит (не поддерживается Safari)
			if (document.form.name.value == '' || document.form.phone.value == '' ) {
				valid = false;
				return valid;
			}
			$.ajax({
				type: "POST",
				url: "mail-call.php",
				data: $(this).serialize()
			}).done(function() {
				$.magnificPopup.open({
					items: {
						src: '#modathanks-popup'
					}
				});
				$(this).find('input').val('');
				$('#form-call').trigger('reset');
			});
			return false;
		});
		$('#form-apply').submit(function() { // проверка на пустоту заполненных полей. Атрибут html5 — required не подходит (не поддерживается Safari)
			if (document.form.name.value == '' || document.form.phone.value == '' ) {
				valid = false;
				return valid;
			}
			$.ajax({
				type: "POST",
				url: "mail-apply.php",
				data: $(this).serialize()
			}).done(function() {
				$.magnificPopup.open({
					items: {
						src: '#modathanks-popup'
					}
				});
				$(this).find('input').val('');
				$('#form-apply').trigger('reset');
			});
			return false;
		});
		$('#form-about-page').submit(function() { // проверка на пустоту заполненных полей. Атрибут html5 — required не подходит (не поддерживается Safari)
			if (document.form.name.value == '' || document.form.phone.value == '' ) {
				valid = false;
				return valid;
			}
			$.ajax({
				type: "POST",
				url: "mail-about-page.php",
				data: $(this).serialize()
			}).done(function() {
				$.magnificPopup.open({
					items: {
						src: '#modathanks-popup'
					}
				});
				$(this).find('input').val('');
				$('#form-about-page').trigger('reset');
			});
			return false;
		});
		google.maps.event.addDomListener(window, 'load', init);
        
		function init() {
			var mapOptions = {
				zoom: 13,
				center: new google.maps.LatLng(30.3203808, -81.664462),
				styles: [{"featureType":"water","elementType":"geometry","stylers":[{"color":"#e9e9e9"},{"lightness":17}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":20}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffffff"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#ffffff"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":16}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":21}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#dedede"},{"lightness":21}]},{"elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#ffffff"},{"lightness":16}]},{"elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#333333"},{"lightness":40}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#f2f2f2"},{"lightness":19}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#fefefe"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#fefefe"},{"lightness":17},{"weight":1.2}]}]
			};
			var mapOptions_1 = {
				zoom: 13,
				center: new google.maps.LatLng(41.8781136, -87.6297982),
				styles: [{"featureType":"water","elementType":"geometry","stylers":[{"color":"#e9e9e9"},{"lightness":17}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":20}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffffff"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#ffffff"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":16}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":21}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#dedede"},{"lightness":21}]},{"elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#ffffff"},{"lightness":16}]},{"elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#333333"},{"lightness":40}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#f2f2f2"},{"lightness":19}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#fefefe"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#fefefe"},{"lightness":17},{"weight":1.2}]}]
			};
			var mapElement = document.getElementById('maptwo');
			var mapElement_1 = document.getElementById('mapone');
			var map = new google.maps.Map(mapElement, mapOptions);
			var map_1 = new google.maps.Map(mapElement_1, mapOptions_1);
			var marker = new google.maps.Marker({
				position: new google.maps.LatLng(40.6700, -73.9400),
				map: map,
				title: 'Snazzy!'
			});
			var marker = new google.maps.Marker({
				position: new google.maps.LatLng(40.6700, -73.9400),
				map: map_1,
				title: 'Snazzy!'
			});
		}
	});
})(jQuery);