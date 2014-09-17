if (Meteor.isClient) {
	//---RENDERED
	Template.home.rendered = function() {
		Meteor.myFunctions.pageReady();
	}
	Template.about.rendered = function() {
		Meteor.myFunctions.pageReady();
	}
	Template.work.rendered = function() {
		Meteor.myFunctions.pageReady();
	}
	Template.landes.rendered = function() {
		Meteor.myFunctions.pageReady();
	}
	Template.bpb.rendered = function() {
		Meteor.myFunctions.pageReady();
	}

	//--EVENTS
	Template.menu.events = {
		'click .menu_item': function(){
		    $.fn.fullpage.destroy('all');
		    Meteor.myFunctions.removeMenuClasses();
		},
		'click .mobile_menu_toggle': function(){
		    Meteor.myFunctions.toggleMobileMenu();
		},
		'click .menu_item.active': function(){
    		location.reload();
		},
	}
	Template.fullpage.events = {
		'click .fullpage_covered': function(){
			Meteor.myFunctions.checkMenu();
		}
	}
	Template.home.events = {
		'click .internal_link': function(){
		    $.fn.fullpage.destroy('all');
		}
	}
	Template.about.events = {
		'click .internal_link': function(){
		    $.fn.fullpage.destroy('all');
		}
	}
	Template.work.events = {
		'click .link_internal': function(){
		    $.fn.fullpage.destroy('all');
		}
	}
	Template.landes.events = {
		'click .link_internal': function(){
		    $.fn.fullpage.destroy('all');
		}
	}
	Template.bpb.events = {
		'click .link_internal': function(){
		    $.fn.fullpage.destroy('all');
		}
	}
}

if (Meteor.isServer) {
  Meteor.startup(function () {
  });
}
