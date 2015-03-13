Session.setDefault('section', '');
Session.setDefault('page','');
Session.setDefault('imgSize','sm');
if (Meteor.isClient) {
	Template.layout.hooks({
		created: function () {
		},
		rendered: function () {
			$('.container').show();
		},
		destroyed: function () {
		}
	});
	Template.home.hooks({
		created: function () {
		},
		rendered: function () {
			Meteor.fxns.allPages();

			Session.set('page','home');
		},
		destroyed: function () {
			Meteor.fullpage.destroy();
		}
	});
	Template.about.hooks({
		created: function () {
		},
		rendered: function () {
			Meteor.fxns.allPages();
			Meteor.about.me();
			Session.set('page','about');
		},
		destroyed: function () {
			Meteor.fullpage.destroy();
		}
	});
	Template.work.hooks({
		created: function () {
		},
		rendered: function () {
			Meteor.fxns.allPages();
			Session.set('page','work');
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
			Meteor.fxns.allPages();
			Session.set('page','abolandesut');
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
			Meteor.fxns.allPages();
			Session.set('page','bim');
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
		'click .mobile_menu_toggle': function(){
		    Meteor.fxns.toggleMobileMenu();
		},
		'click .menu-item.active': function(){
			var menuId = $('.menu-item.active').attr('id');
			if(menuId === 'menu-item-work'){
				window.location ='/work';
			}else{
				location.reload();
			}
		}
	};
	Template.fullpage.events = {
		'click .fullpage_covered': function(){
			Meteor.fxns.checkMenu();
		}
	};
	Template.home.events = {
		'click .scroll-btn': function(e){
			e.preventDefault();
			Meteor.fullpage.nextSection();
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
	Template.landes.events = {
		'click .scroll-btn': function(e){
			e.preventDefault();
			Meteor.fullpage.nextSection();
		},
		'click .toSlide': function(e,t){
			e.preventDefault();
			Meteor.fxns.moveToSlide(e);
		}
	};
	Template.bpb.events = {
		'click .scroll-btn': function(e){
			e.preventDefault();
			Meteor.fullpage.nextSection();
		},
		'click .toSlide': function(e,t){
			e.preventDefault();
			Meteor.fxns.moveToSlide(e);
		}
	};
	Template.bim.events = {
		'click .scroll-btn': function(e){
			e.preventDefault();
			Meteor.fullpage.nextSection();
		},
		'click .toSlide': function(e,t){
			e.preventDefault();
			Meteor.fullpage.moveToSlide(e);
		}
	};
}