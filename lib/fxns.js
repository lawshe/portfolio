Meteor.myFunctions = {
	isMobile: function(){
		var windowWidth = $( window ).width();
		if(windowWidth > 650){
			return true;
		}else{
			return false;
		}
	},
	isEven: function(value){
		if (value%2 === 0){
			return true;
		}else{
			return false;
		}
	},
	isFullpage: function(){
		if($('#fp-nav').hasClass('left')){
			return true;
		}else{
			return false;
		}
	},
	imageHeight: function(){
		var divideBy;
		if(Meteor.myFunctions.isMobile()){
			divideBy = 2;
		}else{
			divideBy =3;
		}
		var imgHeight = parseInt(window.innerHeight,10) /parseInt(divideBy,10);
		$('img').css('max-height', imgHeight+'px');
	},
	adiosSpam: function(){
		var txt = $('.email').text().replace(' [ at ] ', '\u0040').replace(' [ dot ] ', '\u002E').split('').reverse().join('');

		$('.email').html('<i class="fa fa-envelope-o"></i>' + txt);
		$('.email').attr('href',"mailto:" + txt );
	},
	checkMenu: function(){
		if($('.menu_wrap').hasClass('menu_visible')){
			Meteor.myFunctions.toggleMobileMenu();
		}
	},
	createProjectLinks: function(sections){
		$('.section').each(function( index ) {
			var projects = '';
			$(this).children('.slide').each(function (index) {
				index = index+1;
				var project = $(this).attr('subproject');
				if(project){
					project = '<li><span class="toSlide outline-link" data-index="'+index+'">'+project+'</span></li>';
					projects = projects+ project;
				}
			});
			$(this).find('.project_list').html(projects);
		});
	},
	pageSections:function() {
		var result = [];
		var anchors = [];
		var tooltips = [];
		$('.section').each(function( index ) {
			var anchor = $( this ).attr('section');
			anchors.push(anchor);

			var tooltip = $( this ).attr('tooltip');
			tooltips.push(tooltip);
		});
		result.anchors= anchors;
		result.tooltips = tooltips;
		return result;
	},
	leavingPage:function(){
		Meteor.myFunctions.removeMenuClasses();
		$('.loading').removeClass('hide-loading');
		$('#fullpage').removeClass('opacity-fix');
		$('.container').hide();
		Meteor.myFunctions.destroyFullpage();
	},
	imagesReady: function(){
		$('.loading').addClass('hide-loading');
		$('#fullpage').addClass('opacity-fix');
		$('.container').show();
	},
	pageReady: function(page) {
		if(Meteor.myFunctions.isFullpage()){
			//Meteor.myFunctions.destroyFullpage();
		}
		$(document).ready(function(){
			//--loading images
			var imagesCount = 0;
			var imagesLoaded = 0;
			$('img').each(function(){
				if($(this).attr('src') != '/img/loading.gif'){
					imagesCount++;
					$(this).load(function(){
						imagesLoaded++;
						if(imagesLoaded == imagesCount){
						$('.container').hide();
							Meteor.myFunctions.imagesReady();
						}else if(imagesCount > 7 && imagesLoaded > 7){
							Meteor.myFunctions.imagesReady();
						}
					});
				}
			});

			//--fullPage
				if(Meteor.myFunctions.isFullpage()){
					//Meteor.myFunctions.createFullpage();
					location.reload();
				}else{
					Meteor.myFunctions.createFullpage();
				}

				$('#fp-nav li a').each(function( index ) {
					$(this).addClass('solid-link');
				});

			//--email
				Meteor.myFunctions.adiosSpam();
			//--images
				Meteor.myFunctions.imageHeight();
				$('.imagepop').magnificPopup({
					type:'image',
					gallery:{enabled:true},
					image: {
						titleSrc: 'data-title'
					},
					callbacks: {
					  beforeOpen: function() {
						if(Meteor.myFunctions.isFullpage){
							$.fn.fullpage.setKeyboardScrolling(false);
							$.fn.fullpage.setAllowScrolling(false);
						}
					  },
					  beforeClose: function() {
						if(Meteor.myFunctions.isFullpage){
							$.fn.fullpage.setKeyboardScrolling(true);
							$.fn.fullpage.setAllowScrolling(true);
						}
					  },
					}
				});
			//--fp-nav for mobile
				$(document).on('click', '#fp-nav a', function(){
					Meteor.myFunctions.toggleMobileMenu();
				});
			//--resize
				$( window ).resize(function() {
					Meteor.myFunctions.resizePage();
				});
			//--orientation
				Meteor.myFunctions.orientationCheck();
				$(window).bind('orientationchange', function(event) {
					Meteor.myFunctions.orientationCheck();
				});

				window.addEventListener('scroll', function () {
					if (document.activeElement === document.body && window.scrollY > 0) {
						document.body.scrollTop = 0;
					}
				}, true);
			//--tooltips
				/*$(".imagepop").each(function( index ) {
					var title = $(this).attr("data-title");
					if(title){
						$(this).append("<span>"+title+"</span>");
					}
				});*/
		});
	},
	orientationCheck:  function(){
		//--for page load only
		var windowWidth = window.innerWidth;
		var windowHeight = window.innerHeight;

		if(windowWidth > windowHeight && windowWidth < 650){
			//--LANDSCAPE
			Meteor.myFunctions.createLandscape();
		}else{
			//--FULLPAGE
			Meteor.myFunctions.destroyLandscape();
		}
	},
	fullPageExpandArrows: function(index){
		var index = index-1;
		var windowWidth = $( window ).width();
		if(windowWidth > 650){
			var arrowWidth = '30px';
			var arrowExpand = '50px';
		}
		$('.section:eq('+index+')').find('.fp-controlArrow').animate({ 'width' : arrowWidth});
	},
	fullPageCollapseArrows: function(index){
		var index = index-1;
		var windowWidth = $( window ).width();
		var arrowWidth = '0px';
		$('.section:eq('+index+')').find('.fp-controlArrow').animate(
			{ 'width' : arrowWidth}
		);
	},
	toggleMobileMenu: function() {
		$('.menu_wrap').toggleClass('menu_visible');
		$('#fp-nav').toggleClass('page_menu_visible');
		$('.section').toggleClass('opaque');
		$('#main_menu > li').removeClass('hover_bg');
		$('#fullpage').toggleClass('fullpage_covered');

		if($('.menu_wrap').attr('class') == 'menu_visible'){
			$.fn.fullpage.setAllowScrolling(false);
		}else{
			$.fn.fullpage.setAllowScrolling(true);
		}
	},
	removeMenuClasses: function(){
		//--mobile menu
			$('.menu_wrap').removeClass('menu_visible');
			$('#fullpage').removeClass('fullpage_covered');
			$('#fp-nav').removeClass('page_menu_visible');
	},
	currentSection: function(){
		var result = [];

		result.anchor  = $('#fullpage').find('.section.active').attr('section');
		result.index  = $('#fullpage').find('.section.active').index();
		//console.log(result);
		return result;
	},
	resizePage: function(){
		//--image sizes
			Meteor.myFunctions.imageHeight();
		//--slide sizes
			//Meteor.myFunctions.resizeHeights();
		//--orientation
			Meteor.myFunctions.orientationCheck();
		//--mobile menu
			Meteor.myFunctions.removeMenuClasses();
		//--slide arrows
			var section = Meteor.myFunctions.currentSection();
			var sectionIndex = section.index;
			Meteor.myFunctions.fullPageExpandArrows(sectionIndex);
	},
	resizeHeights: function(){
		//console.log("__resizeHeights");
		var section = Meteor.myFunctions.currentSection();
		var sectionAnchor = section.anchor;
		var sectionIndex = section.index;

		var windowHeight = window.innerHeight;
		var top = sectionIndex*windowHeight;
		top = '-'+top+'px';
		//console.log(top);
		$('#fullpage').css('top',top);
		$('.fp-tableCell').each(function( index ) {
			$(this).css('height',windowHeight+'px');
		});
		$('.section').each(function( index ) {
			$(this).css('height',windowHeight+'px');
		});
	},
	createLandscape: function(){
		if(!$('.container').hasClass('landscape')){
			$('.container').addClass('landscape');
			$('.mobile_menu_toggle').addClass('landscape');
			$('#fp-nav').addClass('landscape');
		}
	},
	destroyLandscape: function(){
		$('.container').removeClass('landscape');
		$('.mobile_menu_toggle').removeClass('landscape');
		$('#fp-nav').removeClass('landscape');
	},
	createFullpage: function(){
		var sections = Meteor.myFunctions.pageSections();
		Meteor.myFunctions.createProjectLinks(sections);
		var anchors = sections.anchors;
		var tooltips = sections.tooltips;
		//--fullpage
		$('#fullpage').fullpage({
			css3: true,
			autoScrolling: true,
			navigation: true,
			navigationPosition: 'left',
			navigationTooltips:tooltips,
			animateAnchor: false,
			loopHorizontal: false,
			slidesNavigation: true,
			paddingTop:'20px',
        	paddingBottom: '0px',
			resize : true,
        	keyboardScrolling: true,
			scrollOverflow: true,
        	scrollingSpeed: 600,
			easing: 'easeInQuart',
			afterLoad: function(anchorLink, index){
				//--slide nav
					$('.fp-slidesNav').removeClass('bottom');
					Meteor.myFunctions.fullPageExpandArrows(index);
				//--hide menu if mobile and open and scrolling
					if($('.menu_wrap').hasClass('menu_visible')){
						Meteor.myFunctions.toggleMobileMenu();
					}
				//--about page
					var sectionAnchor = anchors[index-1];
					if(sectionAnchor == 'web'){
						var delay = 2000;
						$('.skill-box').each(function(){
							$(this).animate({
								left:'0'
							},delay);
							delay = delay+500;
						});
					}
			},
			onLeave: function(index, nextIndex, direction){
				$('.header-text').hide();
				Meteor.myFunctions.fullPageCollapseArrows(index);
			},
		});
		//--add tooltip to anchor span
		$('#fp-nav span').each(function(index){
			$(this).html(tooltips[index]);
		});
	},
	destroyFullpage: function(){
		if(Meteor.myFunctions.isFullpage()){
			$.fn.fullpage.destroy('all');
			$('.container').addClass('landscape');
		}
	},
}