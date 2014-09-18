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
	Template.notfound.rendered = function() {
		Meteor.myFunctions.pageReady();
	}

	//--EVENTS
	Template.menu.events = {
		'click .menu_item': function(){
		    Meteor.myFunctions.removeMenuClasses();
		    Meteor.myFunctions.leavingPage();
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
		    Meteor.myFunctions.leavingPage();
		}
	}
	Template.about.events = {
		'click .internal_link': function(){
		    Meteor.myFunctions.leavingPage();
		}
	}
	Template.work.events = {
		'click .link_internal': function(){
		    Meteor.myFunctions.leavingPage();
		}
	}
	Template.landes.events = {
		'click .link_internal': function(){
		    Meteor.myFunctions.leavingPage();
		}
	}
	Template.bpb.events = {
		'click .link_internal': function(){
		    Meteor.myFunctions.leavingPage();
		}
	}
}

if (Meteor.isServer) {
  Meteor.startup(function () {
  });
}
