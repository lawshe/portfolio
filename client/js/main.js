
Meteor.startup(function() {
	$('html').attr('lang', 'en-us');
	$('.loading').addClass('hidden');
	Meteor.fxns.msIE();

	// Service Worker
	navigator.serviceWorker.register('sw.js').then().catch(error => console.log('ServiceWorker registration failed: ', error));
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
