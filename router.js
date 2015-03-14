Router.configure({
	layoutTemplate: 'layout',
	loadingTemplate: 'loading',
	trackPageView: true
});

Router.map(function() {
	this.route('about', {
		path: '/',
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
			this.redirect('/');
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
	this.route('bim', {
		path: 'work/coming_soon',
		onAfterAction: function() {
		  if (!Meteor.isClient) {
			return;
		  }
		  SEO.set({
			title: "Work: BIM Cubed | JL",
			meta: {
			  "description": "BIM Cubed website, development projects by Jessica Lawshe"
			}
		  });
		}
	});
	this.route('notFound', {
		path: '/(.*)',
		template: 'notFound'
	});
});

