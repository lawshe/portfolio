Session.setDefault('section', '');
Session.setDefault('page','');
Session.setDefault('imgSize','sm');
Session.setDefault('ie',false);
Meteor.startup(function() {
	Meteor.fxns.msIE();
	return SEO.config({
			title: 'Jessica Lawshe',
			meta: {
				'description': 'Freelance designer & developer based in Austin, Texas.'
			},
			og: {
				'title': 'Jessica Lawshe',
				'description': 'Freelance designer & developer based in Austin, Texas.'
			},
		    auto: {
		      twitter: false,
		      og: true,
		      set: ['description', 'url', 'title']
		    }
      });		
});
//if (Meteor.isClient) {
	Template.layout.hooks({
		created: function () {
		},
		rendered: function () {
			$('.container').show();
		},
		destroyed: function () {
		}
	});
	Template.about.hooks({
		created: function () {
		},
		rendered: function () {
			Session.set('page','about');
			Meteor.fxns.allPages();

			//svg
			Meteor.about.drawMe();
		},
		destroyed: function () {
			Meteor.fullpage.destroy();
		}
	});
	Template.work.hooks({
		created: function () {
		},
		rendered: function () {
			Session.set('page','work');
			Meteor.fxns.allPages();
		},
		destroyed: function () {
			Meteor.fullpage.destroy();
		}
	});
	//landes
	Template.landes.hooks({
		created: function () {
		},
		rendered: function () {
			Session.set('page','landes');
			Meteor.fxns.allPages();
		},
		destroyed: function () {
			Meteor.fullpage.destroy();
		}
	});
	//bpp
	Template.bpb.hooks({
		created: function () {
		},
		rendered: function () {
			Meteor.fxns.allPages();
			Session.set('page','bpb');
		},
		destroyed: function () {
			Meteor.fullpage.destroy();
		}
	});
	//bim
	Template.bim.hooks({
		created: function () {
		},
		rendered: function () {
			Session.set('page','bim_cubed');
			Meteor.fxns.allPages();
		},
		destroyed: function () {
			Meteor.fullpage.destroy();
		}
	});
	Template.notFound.hooks({
		created: function () {
		},
		rendered: function () {
			Meteor.fxns.allPages();
		},
		destroyed: function () {
			Meteor.fullpage.destroy();
		}
	});

	//--EVENTS
	Template.menu.events = {
		'click .mobile-menu-toggle': function(){
		    Meteor.fxns.toggleMobileMenu();
		},
		'click .menu-item.active': function(){
			var menuId = $('.menu-item.active').attr('id');
			if(menuId === 'menu-item-work'){
				window.location ='/work';
			}else{
				location.reload();
			}
		},
		'click .menu-item-sub': function(e,t){
			e.preventDefault();
			var anchor = $(e.currentTarget).attr('href').replace('#', '');
			$.fn.fullpage.moveTo(anchor);
		}
	};
	Template.fullpage.events = {
		'click #fullpage': function(){
			Meteor.fxns.checkMenu();
		}
	};
	Template.about.events = {
		'click .scroll-btn': function(e){
			e.preventDefault();
			Meteor.fullpage.nextSection();
		},
		'click .toSlide': function(e,t){
			e.preventDefault();
			Meteor.fxns.moveToSlide(e);
		}
	};
	Template.work.events = {
		'click .scroll-btn': function(e){
			e.preventDefault();
			Meteor.fullpage.nextSection();
		}
	};
	Template.clientPage.events = {
		'click .scroll-btn': function(e){
			e.preventDefault();
			Meteor.fullpage.nextSection();
		},
		'click .toSlide': function(e,t){
			e.preventDefault();
			Meteor.fullpage.moveToSlide(e);
		}
	};
//}