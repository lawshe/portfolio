/*
	Events
*/

Template.footer.events = {
	'click .btn-link': function(e){
		var btnId = e.target.getAttribute('id').replace('link-', '');
		Meteor.ga.sendEvent('button', 'link', 'button - ' + btnId);
	}
};

Template.fullpage.events = {
	'click #fullpage': function(){
		Meteor.fxns.checkMenu();
	}
};

Template.layout.events = {
	'click .scroll-btn': function(e){
		e.preventDefault();
		Meteor.fxns.scrollBtn(e);
	},
	'click .link': function(e){
		Meteor.ga.sendEvent('link', 'link', e.target.getAttribute('href'));
	}
};

Template.menu.events = {
	'click .home-link': function(e){
		e.preventDefault();
		if (Router.current().route.getName() === 'home') {
			$.fn.fullpage.silentMoveTo('intro');
		} else {
			Router.go('home');
		}
	},
	'click .menu-item:not(.home-link)': function(e){
		e.preventDefault();
		var sectionAnchor = e.target.getAttribute('data-menuanchor');
		if (sectionAnchor) {
			Meteor.ga.sendEvent('menu', 'link', 'menu - ' + sectionAnchor);
			$.fn.fullpage.moveTo(sectionAnchor);
			Meteor.fxns.checkMenu();
		}
	},
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
		Meteor.fxns.scrollTo(e);
	}
};

Template.workExImg.events = {
	'click .imagepop': function(e){
		if (e) {
			var currentPage = Router.current().route.getName();
			var imageTitle = $(e.target).attr('data-title');
			//arguments- eventCategory, eventLabel, eventValue
			Meteor.ga.sendEvent('image', currentPage + ' popup', imageTitle);
		}
	}
};
