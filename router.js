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
			  "description": "About Jessica Lawshe, a freelance designer & developer based in Austin, Texas.",
			  "keywords": "Jessica Lawshe, Lawshe, designer, developer, Austin, Texas, MongoDB, Meteor, PHP, jQuery, HTML, CSS"
			}
		  });
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
		path: 'work/bim_cubed',
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
	this.route('cherrywood', {
		path: 'work/cherrywood_studios',
		onAfterAction: function() {
		  if (!Meteor.isClient) {
			return;
		  }
		  SEO.set({
			title: "Work: Cherrywood Studios | JL",
			meta: {
			  "description": "Cherrywood Studios website, development projects by Jessica Lawshe"
			}
		  });
		}
	});
	this.route('notFound', {
		path: '/(.*)',
		template: 'notFound'
	});
});

