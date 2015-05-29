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
			title: 'About | Jessica Lawshe',
			meta: {
			  'description': 'About Jessica Lawshe, a freelance designer & developer based in Austin, Texas.',
			  'keywords': 'Jessica Lawshe, Lawshe, designer, developer, Austin, Texas, MongoDB, Meteor, PHP, jQuery, HTML, CSS'
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
			title: 'Work | by JL',
			meta: {
			  'description': 'Selected work by Jessica Lawshe'
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
			title: 'The Bipolar Bears | by JL',
			meta: {
			  'description':  Session.get('pageDescription') + ' created by Jessica Lawshe',
			  'keywords': Session.get('pageKeywords')
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
			title: 'Landes Bioscience | by JL',
			meta: {
			  'description':  Session.get('pageDescription') + ' created by Jessica Lawshe',
			  'keywords': Session.get('pageKeywords')
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
			title: 'BIM Cubed | by JL',
			meta: {
			  'description':  Session.get('pageDescription') + ' created by Jessica Lawshe',
			  'keywords': Session.get('pageKeywords')
			}
		  });
		}
	});
	this.route('cherrywood', {
		path: 'work/cherrywood',
		onAfterAction: function() {
		  if (!Meteor.isClient) {
			return;
		  }
		  SEO.set({
			title: 'Cherrywood Studios | by JL',
			meta: {
			  'description':  Session.get('pageDescription') + ' created by Jessica Lawshe',
			  'keywords': Session.get('pageKeywords')
			}
		  });
		}
	});
	this.route('notFound', {
		path: '/(.*)',
		template: 'notFound'
	});
});

