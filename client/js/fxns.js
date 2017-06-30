if (Meteor.isClient){
	Meteor.ga = {
		sendEvent: function(eventCategory, eventLabel, eventValue){
			ga('send', 'event', eventCategory, eventLabel, eventValue);
		},
	};
}
Meteor.fxns = {
	adiosSpam: function(){
		var me = 'moc [ dot ] ehswalj [ at ] acissej',
			txt = me.replace(' [ at ] ', '\u0040').replace(' [ dot ] ', '\u002E').split('').reverse().join('');
		$('.email').html('<span><i class="fa fa-envelope-o" alt="email"></i><br>' + txt + '</span>');
		$('.email').attr('href', 'mailto:%22Jessica%20Lawshe%22%3c' + txt );

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
	allPageBefore: function(){
		Meteor.fxns.imagesSize();
	},
	allPages: function(){
		Meteor.fxns.checkMenu();
		Meteor.fullpage.create();
		Meteor.fxns.adiosSpam();
		Meteor.fxns.bounce();
		Meteor.fxns.imagesLoading();
		Meteor.fxns.orientationListener();
	},
	orientationListener: function(){
		window.addEventListener('orientationchange', function() {
			Meteor.fxns.checkMenu();
		}, {passive: true});
	},
	bounce: function(){
		setTimeout(function() {
			$('.section:nth-child(1)').find('.scroll-to').addClass('bounce');
		}, 1800);
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
	imagesSize: function(){
		var windowWidth = $(window).width();
		if(windowWidth > 1000){
			Session.set('imgSize', 'lg');
		} else if (windowWidth > 700){
			Session.set('imgSize', 'md');
		} else {
			Session.set('imgSize', 'sm');
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
		var imgSize = ex.image.oneSize ? 'one_size' : Session.get('imgSize');
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
	scrollBtn: function(){
		$('html, body').animate({
			scrollTop: $('#fullpage .section:nth-child(2)').offset().top
		},700);
	},
	scrollTo: function(e){
		var anchorId = e.target.getAttribute('data-menuanchor');
		if (anchorId && $('.section[data-anchor="' + anchorId + '"]')) {
			$('html, body').animate({
				scrollTop: $('.section[data-anchor="' + anchorId + '"]').offset().top
			},700);
		}
	},
	scrollToTop: function(){
		$('html, body').animate({
			scrollTop: 0
		},700);
	}
};

Meteor.fullpage = {
	create: function(){
		var sections = Meteor.fullpage.pageSections(),
			anchors = sections.anchors,
			titles = sections.titles;
		var page = Router.current().route.getName();

		$('#fullpage').fullpage({
			anchors: anchors,
			menu: '#menu',
			autoScrolling: false,
			paddingTop: '6rem',
    	paddingBottom: '3.6rem',
			resize : true,
      keyboardScrolling: true,
      fitToSection: false,
			easing: 'easeInQuart',
			recordHistory: true,
			animateAnchor: true,
			scrollOverflow: false,
			afterLoad: function(anchorLink, index){
				var sectionAnchor = anchors[index-1];
				//--hide menu if mobile and open and scrolling
				if ($('body').hasClass('menu-open')){
					Meteor.fxns.toggleMobileMenu();
				}

				if(page === 'home'){
					if (sectionAnchor === 'intro'){
						Meteor.svg.draw('svg-me');
					} else if (sectionAnchor === 'about') {
						Meteor.effects.toggleMany('emph', 'emphasize', 250, 50);
					} else if (sectionAnchor === 'skills') {
						Meteor.effects.toggleMany('skills-link', 'emphasize', 250, 20);
					} else if (sectionAnchor === 'work') {
						Meteor.effects.toggle('work-ex', 'visible');
					}
				} else if(page === 'work'){
					if (sectionAnchor === 'work'){
						Meteor.svg.draw('svg-work');
					}
				} else if(page === 'puppy') {
					console.log('sectionAnchor',sectionAnchor);
					if (sectionAnchor === 'muffit') {
						Meteor.svg.draw('svg-muffit');
					}
				}
			}
		});

		//--section navigation
		$('#menu').html('');
		$(anchors).each(function(i,v){
			if (titles[i]) {
				$('#menu').append('<li data-menuanchor="'+v+'"><a href="#'+v+'" class="menu-item"><span data-menuanchor="'+v+'">'+titles[i]+'</span></a></li>');
			}
		});
	},
	destroy: function(){
		$.fn.fullpage.destroy('all');
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
		$('.' + targetClass).each(function(){
			var item = $(this);
			item.toggleClass(toggleClass);
		});
	},
	toggleMany: function(targetClass, toggleClass, mainTimeout, timeout){
		mainTimeout = mainTimeout ? mainTimeout : 500;
		timeout = timeout ? timeout : 100;
		setTimeout(function() {
			$('.' + targetClass).each(function(i){
				var idx = i+1;
				var item = $(this);
				setTimeout(function(){
					item.addClass(toggleClass);
				}, timeout*idx);
				setTimeout(function(){
					item.removeClass(toggleClass);
				}, timeout*idx*2);
			});
		}, mainTimeout);
	}
};

Meteor.svg = {
	draw: function(svgId){
		var elem = document.getElementById(svgId);
		var length = elem && elem.getTotalLength ? elem.getTotalLength() : null;

		elem.style.transition = elem.style.WebkitTransition = 'none';

		elem.style.strokeDasharray = length + ' ' + length;
		elem.style.strokeDashoffset = length ;
		elem.getBoundingClientRect();

		elem.style.transition = elem.style.WebkitTransition = 'stroke-dashoffset 5s ease-in-out';
		// Below line triggers the Animation
		elem.style.strokeDashoffset = '0';
	}
};
