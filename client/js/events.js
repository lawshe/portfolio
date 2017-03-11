/*
	Events
*/
Template.fullpage.events = {
	'click #fullpage': function(){
		Meteor.fxns.checkMenu();
	}
};

Template.layout.events = {
	'click .scroll-btn': function(e){
		e.preventDefault();
		Meteor.fxns.scrollBtn(e);
	}
};

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
	'click .menu-item': function(e){
		e.preventDefault();
		var anchor = $(e.currentTarget).attr('href').replace('#', '');
		$.fn.fullpage.moveTo(anchor);
	}
};
