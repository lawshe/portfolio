Meteor.fxns = {
	adiosSpam: function(){
		var me = 'moc [ dot ] ehswalj [ at ] acissej',
			txt = me.replace(' [ at ] ', '\u0040').replace(' [ dot ] ', '\u002E').split('').reverse().join('');

		$('.email').html('<span><i class="fa fa-envelope-o"></i><br>' + txt + '</span>');
		$('.email').attr('href','mailto:' + txt );

		$('.email-project').attr('href','mailto:' + txt + '?subject=Project Inquiry');
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
	resizePage: function(){
		var section = Meteor.fxns.currentSection(),
			sectionIndex = section.index;
		//--image sizes
			Meteor.fxns.imageHeight();
		//--hide mobile menu
			$('body').removeClass('menu-open');
	},
	resizeHeights: function(){
		var section = Meteor.fxns.currentSection(),
			sectionIndex = section.index,
			windowHeight = window.innerHeight,
			top = sectionIndex*windowHeight;
		top = '-'+top+'px';
		$('#fullpage').css('top',top);
		$('.fp-tableCell').each(function() {
			$(this).css('height',windowHeight+'px');
		});
		$('.section').each(function() {
			$(this).css('height',windowHeight+'px');
		});
	},
	processClient: function(client){
		var imgSize = Session.get('imgSize');
		client['headerOne'] = client['name'];
		client['imagePath'] = '/img/work/' + client['slug'] + '/' + imgSize + '/' + client['image'];
		client['imageTitle'] = client['name']; 
		$(client['projects']).each(function(i,v){
			$(v['sections']).each(function(index,value){
				if(value['images']){
					$(value['images']).each(function(ind,val){
						val['imagePath'] = '/img/work/' + client['slug'] + '/' + imgSize + '/' + val['image'];
					});
				}
			});
		});
		//for seo
		Session.set('pageDescription',client['description']);
		Session.set('pageKeywords',client['keywords']);
		return client;
	},
	findClient: function(client,clients){
		var clent = '';
		$(clients).each(function(i,v){
			if(v['slug'] === client){
				client = Meteor.fxns.processClient(clients[i]);
			}
		});
		return client;
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
				//--hide menu if mobile and open and scrolling
					if($('body').hasClass('menu-open')){
						Meteor.fxns.toggleMobileMenu();
					}
				var sectionAnchor = anchors[index-1];
				if(Session.get('page') === 'about'){
					if(sectionAnchor === 'about-intro'){
						Meteor.about.drawMe();
					}
					if(sectionAnchor === 'api' || sectionAnchor === 'experience' ){
						Meteor.about.flipBoxes(sectionAnchor);
					}
				}
				//$('.section:nth-child('+index+')').find('.section-header').addClass('vis');
			},
			onLeave: function(index, nextIndex, direction){
				var sectionAnchor = anchors[index-1];
				if(Session.get('page') === 'about'){
					if(sectionAnchor === 'api' || sectionAnchor === 'experience' ){
						Meteor.about.flipBoxes(sectionAnchor);
					}
				}
				//$('.section:nth-child('+index+')').find('.section-header').removeClass('vis');
			}
		});
		//--section navigation
			$(anchors).each(function(i,v){
				$('#sub-menu').append('<li class="section-nav" data-menuanchor="'+v+'"><a href="#'+v+'" class="menu-item-sub"><span>'+titles[i]+'</span></a></li>');
			});
			if(page === 'about' || page === 'work'){
				$('.section-nav:nth-child(1)').hide();
			}else{
				//use this instead, .fp-viewing-#
				var active = $('.section.active').attr('data-anchor');
				if(jQuery.inArray(active,anchors) === 0){
					$('#sub-menu').find('li').first().addClass('active');
				}					
			}
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
	nextSection: function(){
		var current = $('.section.active').index(),
			moveTo = current+1;
		$.fn.fullpage.moveTo(moveTo+1);
	},
}
var scrollDirection = '';

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
	drawTx: function(){
		var path = document.getElementById('svg-tx');
		Meteor.about.draw(path);
	},
	getFlips: function(section){
		return $('#flips-'+section).find('.flip');
	},
	unflipBoxes: function(section){
		var flips = Meteor.about.getFlips(section);
		setTimeout(function() {
			$(flips).each(function(i){
				$(this).attr('class','flip');
			});
		},  300);
	},
	flipBoxes: function(section){
		var flipClass = 'flip-forward',
			flips = Meteor.about.getFlips(section);
		setTimeout(function() {
			$(flips).each(function(i){
				var flip = $(this);
				setTimeout(function(){
					flip.toggleClass(flipClass);
				}, 100*i);
			});
		},  300);

	},
}
