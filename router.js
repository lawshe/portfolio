

Router.configure({
	layoutTemplate: 'layout',
	loadingTemplate: 'loading',
	trackPageView: true
});

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
			  "description": "Jessica Lawshe is a full stack developer based in Austin, Texas"
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
			title: "JL | About",
			meta: {
			  "description": "About Jessica Lawshe, a full stack developer based in Austin, Texas."
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
			title: "JL | Work",
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
			title: "JL | Work - The Bipolar Bears",
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
			title: "JL | Work - Landes Bioscience",
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

