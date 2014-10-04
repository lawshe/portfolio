
Router.configure({
	layoutTemplate: 'layout',
	loadingTemplate: 'loading',
	trackPageView: true
});

Router.onBeforeAction("loading");

Router.map(function() {
	this.route('home', {
		path: '/',
		onAfterAction: function() {
		  if (!Meteor.isClient) {
			return;
		  }
		  SEO.set({
			title: "Jessica Lawshe",
			meta: {
			  "description": "Jessica Lawshe is a full stack developer based in Austin, Texas",
			  "keywords": "Jessica Lawshe, Lawshe, designer, developer, Austin, Texas, MongoDB, Meteor"
			}
		  });
		}
	});
	this.route('about', {
		path: 'about',
		onAfterAction: function() {
		  if (!Meteor.isClient) {
			return;
		  }
		  SEO.set({
			title: "About | JL",
			meta: {
			  "description": "About Jessica Lawshe, a full stack developer based in Austin, Texas.",
			  "keywords": "Jessica Lawshe, Lawshe, designer, developer, Austin, Texas, MongoDB, Meteor, PHP, jQuery, HTML, CSS"
			}
		  });
		}
	});
	this.route('about.html', {
		onBeforeAction: function() {
			this.redirect('/about');
		}
	});
	this.route('work', {
		path: 'work',
		onAfterAction: function() {
		  if (!Meteor.isClient) {
			return;
		  }
		  SEO.set({
			title: "Work | JL",
			meta: {
			  "description": "Selected work by Jessica Lawshe"
			}
		  });
		}
	});
	this.route('work.html', {
		onBeforeAction: function() {
			this.redirect('/work');
		}
	});
	this.route('bpb', {
		path: 'work/bpb',
		onAfterAction: function() {
		  if (!Meteor.isClient) {
			return;
		  }
		  SEO.set({
			title: "Work: The Bipolar Bears | JL",
			meta: {
			  "description": "The Bipolar Bears website, created by Jessica Lawshe"
			}
		  });
		}
	});
	this.route('bpb.html', {
		onBeforeAction: function() {
			this.redirect('/work/bpb');
		}
	});
	this.route('landes', {
		path: 'work/landes',
		onAfterAction: function() {
		  if (!Meteor.isClient) {
			return;
		  }
		  SEO.set({
			title: "Work: Landes Bioscience | JL",
			meta: {
			  "description": "Landes Bioscience website, development projects by Jessica Lawshe"
			}
		  });
		}
	});
	this.route('landes.html', {
		onBeforeAction: function() {
			this.redirect('/work/landes');
		}
	});
	this.route('notfound', {
		path: '*'
	});
});

