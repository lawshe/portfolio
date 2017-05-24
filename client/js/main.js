Meteor.startup(function() {
	$('html').attr('lang', 'en-us').addClass('loaded');
	Meteor.fxns.msIE();
});

/*
	Layout
*/
Template.layout.hooks({
	created: function() {
		Meteor.fxns.allPageBefore();
	},
	rendered: function () {
		$('.container').show();
	}
});

/*
	Home
*/
Template.home.hooks({
	rendered: function () {
		Meteor.fxns.allPages();
		Meteor.svg.draw('svg-me');
	},
	destroyed: function () {
		Meteor.fullpage.destroy();
	}
});

/*
	Work
*/
Template.work.hooks({
	rendered: function () {
		Meteor.fxns.allPages();
	},
	destroyed: function () {
		Meteor.fullpage.destroy();
	}
});

/*
	Muffi
*/
Template.puppy.hooks({
	rendered: function () {
		Meteor.fxns.allPages();
	},
	destroyed: function () {
		Meteor.fullpage.destroy();
	}
});

/*
	404
*/
Template.notFound.hooks({
	rendered: function () {
		Meteor.fxns.allPages();
	},
	destroyed: function () {
		Meteor.fullpage.destroy();
	}
});

/*
	Partials
*/
Template.workExImg.hooks({
	rendered: function () {
		Meteor.fxns.imagesPopup();
	}
});
