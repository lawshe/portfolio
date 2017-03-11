Meteor.fxns = {
	adiosSpam: function(){
		var me = 'moc [ dot ] ehswalj [ at ] acissej',
			txt = me.replace(' [ at ] ', '\u0040').replace(' [ dot ] ', '\u002E').split('').reverse().join('');
		$('.email').html('<span><i class="fa fa-envelope-o"></i><br>' + txt + '</span>');
		$('.email').attr('href', 'mailto:' + txt );

		$('.email-project').attr('href', 'mailto:' + txt + '?subject=Project Inquiry');
	},
	checkMenu: function(){
		if($('body').hasClass('menu-open')){
			Meteor.fxns.toggleMobileMenu();
		}
	},
	imagesReady: function(){
		$('#fullpage').removeClass('hidden');
	},
	allPages: function(){
		Meteor.fxns.imagesSize();
		Meteor.fxns.checkMenu();
		Meteor.fullpage.create();
		Meteor.fxns.adiosSpam();
		Meteor.fxns.imagesPopup();
		Meteor.fxns.bounce();
		Meteor.fxns.imagesLoading();
		Meteor.fxns.orientationListener();
	},
	orientationListener: function(){
		window.addEventListener('orientationchange', function() {
			Meteor.fxns.checkMenu();
		}, false);
	},
	bounce: function(){
		setTimeout(function() {
			$('.section:nth-child(1)').find('.scroll-to').addClass('bounce');
		}, 1800);
	},
	imagesSize: function(){
		var windowWidth = $(window).width();
		if(windowWidth > 1000){
			Session.set('imgSize', 'lg');
			Meteor.fxns.imagesHeight(windowWidth,2);
		}else if (windowWidth > 700){
			Session.set('imgSize', 'md');
			Meteor.fxns.imagesHeight(windowWidth,2);
		}else{
			Session.set('imgSize', 'sm');
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
				},
				beforeClose: function() {
				}
			}
		});
	},
	imagesLoading: function(){
		var imagesCount = 0,
			imagesLoaded = 0,
			pageVis = false,
			images = $('body').find('img');
		if(images.length > 0){
			$(images).each(function(){
				if($(this).attr('src') !== '/img/loading.gif'){
					imagesCount+= 1;
					$(this).load(function(){
						imagesLoaded+= 1;
						if(imagesLoaded === imagesCount && !pageVis){
							Meteor.fxns.imagesReady();
						}else if(imagesCount > 7 && imagesLoaded > 7 && !pageVis){
							pageVis = true;
							Meteor.fxns.imagesReady();
						}
					});
				}
			});
		}else{
			Meteor.fxns.imagesReady();
		}
	},
	toggleMobileMenu: function() {
		$('.section').toggleClass('opaque');
		$('body').toggleClass('menu-open');
	},
	currentSection: function(){
		var result = [];

		result.anchor  = $('#fullpage').find('.section.active').attr('section');
		result.index  = $('#fullpage').find('.section.active').index();
		return result;
	},
	processExs: function(examples){
		examples.forEach(function(ex){
			ex = Meteor.fxns.processEx(ex);
		});
		return examples;
	},
	processEx: function(ex){
		var imgSize = Session.get('imgSize');
		ex.image.imagePath =  '/img/work/' + ex.client + '/' + imgSize + '/' + ex.image.file;
		return ex;
	},
	processClient: function(client){
		// console.log('client',client);
		var imgSize = Session.get('imgSize');
		client.headerOne = client.name;
		client.imagePath = '/img/work/' + client.slug + '/' + imgSize + '/' + client.image;
		client.imageTitle = client.name;
		$(client.projects).each(function(i,v){
			$(v.sections).each(function(index,value){
				if(value.images){
					$(value.images).each(function(ind,val){
						val.imagePath = '/img/work/' + client.slug + '/' + imgSize + '/' + val.image;
					});
				}
			});
		});
		//for seo
		Session.set('pageDescription',client.description);
		Session.set('pageKeywords',client.keywords);
		return client;
	},
	findClient: function(client,clients){
		var res = '';
		$(clients).each(function(i,v){
			if(v.slug === client){
				res = Meteor.fxns.processClient(clients[i]);
			}
		});
		return res;
	},
	msIE: function(){
		var ua = window.navigator.userAgent;
		var msie = ua.indexOf('MSIE ');
		if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)){
			Session.set('ie',true);
			$('<link/>', {
				rel: 'stylesheet',
				type: 'text/css',
				href: '/ie.css'
			}).appendTo('head');
		}else{
			Session.set('ie',false);
		}
		return false;
	},
	scrollBtn: function(e){
		var y = e.clientY,
				windowH = window.innerHeight;
			var clickPosition = y / windowH;

			if(clickPosition < 0.50){
				Meteor.fullpage.nextSection(true);
			}else{
				Meteor.fullpage.nextSection(false);
			}
	}
};

Meteor.fullpage = {
	create: function(){
		var sections = Meteor.fullpage.pageSections(),
			anchors = sections.anchors,
			titles = sections.titles,
			page = Session.get('page');

		$('#fullpage').fullpage({
			menu: '#sub-menu',
			autoScrolling: false,
			paddingTop:'6rem',
    	paddingBottom: '3.6rem',
			resize : true,
      keyboardScrolling: true,
      fitToSection: false,
			easing: 'easeInQuart',
			recordHistory: false,
			animateAnchor: true,
			scrollOverflow: false,
			afterLoad: function(anchorLink, index){
				var sectionAnchor = anchors[index-1];
				//--hide menu if mobile and open and scrolling
				if ($('body').hasClass('menu-open')){
					Meteor.fxns.toggleMobileMenu();
				}

				if(Session.get('page') === 'about'){
					if (sectionAnchor === 'intro'){
						Meteor.about.drawMe();
					} else if (sectionAnchor === 'about') {
						Meteor.effects.toggleTimeout('skill-span', 'emphasize', 500, 100, 350);
					} else if (sectionAnchor === 'skills') {
						Meteor.effects.toggleTimeout('skills-link', 'emphasize', 500, 100, 150);
					} else if (sectionAnchor === 'work') {
						Meteor.effects.toggle('work-ex', 'visible');
					}
				}
			},
			onLeave: function(index, nextIndex, direction){
				var sectionAnchor = anchors[index-1];
				if (Session.get('page') === 'about'){
					if (sectionAnchor === 'work') {
						Meteor.effects.toggle('work-ex', 'visible');
					}
				}
			}
		});

		//--section navigation
		$(anchors).each(function(i,v){
			if (titles[i]) {
				$('#sub-menu').append('<li class="section-nav" data-menuanchor="'+v+'"><a href="#'+v+'" class="menu-item"><span>'+titles[i]+'</span></a></li>');
			}
		});
	},
	destroy: function(){
		$.fn.fullpage.destroy('all');
		$('.section-nav').remove();
	},
	pageSections:function() {
		var result = [],
			anchors = [],
			titles = [];
		$('.section').each(function() {
			var anchor = $(this).attr('data-anchor'),
				title = $(this).attr('data-title');
			anchors.push(anchor);
			titles.push(title);
		});
		result.anchors= anchors;
		result.titles = titles;
		return result;
	},
	nextSection: function(alreadyCurrent){
		var current = $('.section.active').index();
			current = current+1;
		if(alreadyCurrent){
			$('html, body').animate({
				scrollTop: $('.section.active').offset().top
			},700);
		}else{
			$.fn.fullpage.moveTo(current+1);
		}
	}
};

Meteor.effects = {
	toggle: function(targetClass, toggleClass){
		$('.' + targetClass).each(function(i){
			var item = $(this);
			item.toggleClass(toggleClass);
		});
	},
	toggleTimeout: function(targetClass, toggleClass, mainTimeout, firstTimeout, secondTimeout){
		var	mainTimeout = mainTimeout ? mainTimeout : 500;
		var firstTimeout = firstTimeout ? firstTimeout : 100;
		var secondTimeout = secondTimeout ? secondTimeout : 200;

		setTimeout(function() {
			$('.' + targetClass).each(function(i){
				var item = $(this);
				setTimeout(function(){
					item.addClass(toggleClass);
				}, firstTimeout*i);
				setTimeout(function(){
					item.removeClass(toggleClass);
				}, secondTimeout*i);
			});
		}, mainTimeout);
	}
}

Meteor.about = {
	draw: function(path){
		var length = path.getTotalLength();

		path.style.transition = path.style.WebkitTransition = 'none';

		path.style.strokeDasharray = length + ' ' + length;
		path.style.strokeDashoffset = length ;
		path.getBoundingClientRect();

		path.style.transition = path.style.WebkitTransition = 'stroke-dashoffset 5s ease-in-out';
		// Below line triggers the Animation
		path.style.strokeDashoffset = '0';
	},
	drawMe: function(){
		var path = document.getElementById('svg-me');
		Meteor.about.draw(path);
	},
};
