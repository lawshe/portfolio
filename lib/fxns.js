Meteor.fxns = {
	isFullpage: function(){
		//console.log('--isFullpage');
		if($('#fp-nav').hasClass('left')){
			return true;
		}else{
			return false;
		}
	},
	adiosSpam: function(){
		//console.log('--adiosSpam');
		var txt = $('.email').text().replace(' [ at ] ', '\u0040').replace(' [ dot ] ', '\u002E').split('').reverse().join('');

		$('.email').html('<i class="fa fa-envelope-o"></i>' + txt);
		$('.email').attr('href',"mailto:" + txt );
	},
	checkMenu: function(){
		//console.log('--checkMenu');
		if($('.menu_wrap').hasClass('menu_visible')){
			Meteor.fxns.toggleMobileMenu();
		}
	},
	imagesReady: function(){
		//console.log('--imagesReady');
		$('.loading').addClass('hidden');
		$('#fullpage').removeClass('hidden');
		$('.container').show();
	},
	allPages: function(){
		//console.log('--allPages');
		Meteor.fxns.imagesSize();
		Meteor.fxns.checkMenu();
		Meteor.fullpage.create();
		Meteor.fxns.adiosSpam();
		Meteor.fxns.imagesPopup();
		Meteor.fxns.bounce();
	},
	bounce: function(){
		setTimeout(function() {
			$('.section:nth-child(1)').find('.scroll-to').addClass('bounce');
		}, 1800);
		
	},
	imagesSize: function(){
		//console.log('--imagesSize');
		var windowWidth = $(window).width();
		if(windowWidth > 1000){
			Session.set('imgSize','lg');
			Meteor.fxns.imagesHeight(windowWidth,2);
		}else if (windowWidth > 700){
			Session.set('imgSize','md');
			Meteor.fxns.imagesHeight(windowWidth,2);
		}else{
			Session.set('imgSize','sm');
			Meteor.fxns.imagesHeight(windowWidth,3);
		}
	},
	imagesHeight: function(windowHeight,divideBy){
		var imgHeight = parseInt(window.innerHeight,10) /parseInt(divideBy,10);
		$('img').css('max-height', imgHeight+'px');
		return;
	},
	imagesPopup: function(){
		$('.imagepop').magnificPopup({
			type:'image',
			gallery:{enabled:true},
			image: {
				titleSrc: 'data-title'
			},
			callbacks: {
			beforeOpen: function() {
				if(Meteor.fxns.isFullpage){
					$.fn.fullpage.setKeyboardScrolling(false);
					$.fn.fullpage.setAllowScrolling(false);
				}
			},
			beforeClose: function() {
				if(Meteor.fxns.isFullpage){
					$.fn.fullpage.setKeyboardScrolling(true);
					$.fn.fullpage.setAllowScrolling(true);
				}
			  }
			}
		});
	},
	imagesLoading: function(){
		var imagesCount = 0,
			imagesLoaded = 0,
			pageVis = false;
		$('img').each(function(){
			if($(this).attr('src') !== '/img/loading.gif'){
				imagesCount+= 1;
				$(this).load(function(){
					imagesLoaded+= 1;
					if(imagesLoaded === imagesCount && !pageVis){
						$('.container').hide();
						Meteor.fxns.imagesReady();
					}else if(imagesCount > 7 && imagesLoaded > 7 && !pageVis){
						pageVis = true;
						Meteor.fxns.imagesReady();
					}
				});
			}
		});
	},
	toggleMobileMenu: function() {
		//console.log('--toggleMobileMenu');
		$('.menu_wrap').toggleClass('menu_visible');
		$('#fp-nav').toggleClass('page_menu_visible');
		$('.section').toggleClass('opaque');
		$('#main_menu > li').removeClass('hover_bg');
		$('#fullpage').toggleClass('fullpage_covered');

		if($('.menu_wrap').attr('class') === 'menu_visible'){
			$.fn.fullpage.setAllowScrolling(false);
		}else{
			$.fn.fullpage.setAllowScrolling(true);
		}
	},
	removeMenuClasses: function(){
		//console.log('--removeMenuClasses');
		//--mobile menu
			$('.menu_wrap').removeClass('menu_visible');
			$('#fullpage').removeClass('fullpage_covered');
			$('#fp-nav').removeClass('page_menu_visible');
	},
	currentSection: function(){
		//console.log('--currentSection');
		var result = [];

		result.anchor  = $('#fullpage').find('.section.active').attr('section');
		result.index  = $('#fullpage').find('.section.active').index();
		//console.log(result);
		return result;
	},
	resizePage: function(){
		//console.log('--resizePage');
		var section = Meteor.fxns.currentSection(),
			sectionIndex = section.index;
		//--image sizes
			Meteor.fxns.imageHeight();
		//--mobile menu
			Meteor.fxns.removeMenuClasses();
		//--slide arrows
			Meteor.fxns.expandArrows(sectionIndex);
	},
	resizeHeights: function(){
		//console.log('--resizeHeights');
		var section = Meteor.fxns.currentSection(),
			sectionIndex = section.index,
			windowHeight = window.innerHeight,
			top = sectionIndex*windowHeight;
		top = '-'+top+'px';
		//console.log(top);
		$('#fullpage').css('top',top);
		$('.fp-tableCell').each(function() {
			$(this).css('height',windowHeight+'px');
		});
		$('.section').each(function() {
			$(this).css('height',windowHeight+'px');
		});
	},

};
Meteor.fullpage = {
	create: function(){
		//console.log('--createFullpage');
		var sections = Meteor.fullpage.pageSections(),
			aboutFlips = [2,3],
			anchors = sections.anchors,
			titles = sections.titles,
			aboutFlips = ['api','experience','server','lib'];
		$('#fullpage').fullpage({
			css3: false,
			autoScrolling: true,
			navigation: true,
			navigationPosition: 'left',
			navigationTooltips:titles,
			animateAnchor: false,
			loopHorizontal: false,
			slidesNavigation: true,
			paddingTop:'0px',
        	paddingBottom: '0px',
			resize : true,
        	keyboardScrolling: true,
			scrollOverflow: true,
			recordHistory: false,
        	scrollingSpeed: 600,
			easing: 'easeInQuart',
			afterLoad: function(anchorLink, index){
				Meteor.fullpage.expandArrows(index);
				//--hide menu if mobile and open and scrolling
					if($('.menu_wrap').hasClass('menu_visible')){
						Meteor.fxns.toggleMobileMenu();
					}
				var sectionAnchor = anchors[index-1];
				if(Session.get('page') === 'about'){
					if(sectionAnchor === 'languages'){
						Meteor.about.typeString()
					}
					var sectionFlip = $.inArray(sectionAnchor,aboutFlips);
					if(sectionFlip >= 0){
						Meteor.about.flipSprites(sectionAnchor,sectionFlip);
					}
				}
				$('.section:nth-child('+index+')').find('.section-header').addClass('vis');
			},
			onLeave: function(index, nextIndex, direction){
				var sectionAnchor = anchors[index-1];
				Meteor.fullpage.collapseArrows(index);
				if(Session.get('page') === 'about'){
					var sectionFlip = $.inArray(sectionAnchor,aboutFlips);
					if(sectionFlip >= 0){
						Meteor.about.flipSprites(sectionAnchor,sectionFlip);
					}
				}
				$('.section:nth-child('+index+')').find('.section-header').removeClass('vis');
			}
		});
		//--section navigation
		$('#fp-nav span').each(function(index){
			$(this).html(titles[index]);
		});
	},
	destroy: function(){
		//console.log('--destroyFullpage');
		$.fn.fullpage.destroy('all');
	},
	pageSections:function() {
		//console.log('--pageSections');
		var result = [],
			anchors = [],
			titles = [];
		$('.section').each(function() {
			var anchor = $(this).attr('section'),
				title = $(this).attr('section-title');
			anchors.push(anchor);
			titles.push(title);
		});
		result.anchors= anchors;
		result.titles = titles;
		return result;
	},
	moveToSlide: function(e){
		var slide = $(e.target).data('index'),
			active = $('.section.active').index();
			active = active + 1;
		$.fn.fullpage.moveTo(active,slide);
	},
	expandArrows: function(index){
		//console.log('--expandArrows');
		index = index-1;
		var windowWidth = $( window ).width(),
			arrowWidth = '30px';
		$('.section:eq('+index+')').find('.fp-controlArrow').animate({ 'width' : arrowWidth});
	},
	collapseArrows: function(index){
		//console.log('--collapseArrows');
		index = index-1;
		var arrowWidth = '0px';
		$('.section:eq('+index+')').find('.fp-controlArrow').animate(
			{ 'width' : arrowWidth}
		);
	},	
	nextSection: function(){
		var current = $('.section.active').index(),
			moveTo = current+1;
		$.fn.fullpage.moveTo(moveTo+1);
	},
	addSlideIndex: function(sections){
		$(sections).each(function(i,v){
			v['index'] = i;
			if(v['slides']){
				var slides = v['slides'],
					slidesLength = slides.length;
				$(slides).each(function(index,value){
					value['index'] = index+1;
					if(index+1 === slidesLength){
						value['last'] = true;
					}
				});
			}
		});
		return sections;
	},
}
Meteor.about = {
	me: function(){
		$('.container').addClass('intro-bg');
		setTimeout(function() {
			$('.intro').addClass('overlaid');
		}, 1100);
	},
	getSprites: function(section,index){
		//console.log('--getSprites');
		var flipClasses = ['flip-back','flip-forward','flip-forward-twice','flip-back-twice'],
			result = [];
		result.flips = $('#flips-'+section).find('.flip');
		result.flipClass = flipClasses[index];
		return result;
	},
	flipSprites: function(section,index){
		//console.log('--flipSprites');
		var result = Meteor.about.getSprites(section,index),
			flips = result.flips,
			flipClass = result.flipClass;

		$(flips).each(function(i){
			var flip = $(this);
			setTimeout(function(){ 
				flip.toggleClass(flipClass); 
			}, 100*i);
		});
	},
	typeString: function() {
		$('.web-languages').teletype( {
            text: [
				'JS\\n PHP\\n HTML\\n CSS\\n LESS\\n XML',
				'^2000 Spanish'
			],
            preserve: true,
            loop: 1,
            prefix: ''
        } );
	},		
}
