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

/*
	Layout
*/
Template.layout.hooks({
	rendered: function () {
		$('.container').show();
	}
});

/*
	About
*/
Template.about.hooks({
	rendered: function () {
		Session.set('page','about');
		Meteor.fxns.allPages();
		Meteor.about.drawMe();
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
		Session.set('page','work');
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
