if (Meteor.isClient) {
  Router.plugin('reywood:iron-router-ga');
}

Router.configure({
	layoutTemplate: 'layout',
	loadingTemplate: 'loading',
	trackPageView: true,
	link: {
		manifest: '/jl_manifest.json'
	}
});

/*
	Meta tag data
*/
var metaKeywords = 'Jessica Lawshe, developer, software engineer, designer, Austin, Texas';
if(webSkills){
	webSkills.forEach(function(skill){
		metaKeywords += ', ' + skill.what;
	});
}

/*
	Router
*/
Router.map(function() {
	this.route('home', {
		path: '/',
		title: 'Jessica Lawshe',
		meta: {
			keywords: metaKeywords,
			url: {
				property: 'og:url',
				itemprop: 'url',
				content: function() {
					return window.location.href;
				}
			}
		},
		link: {
			canonical: function() {
				return window.location.href;
			}
		},
		trackPageView: true,
		onAfterAction: function() {
		  if (!Meteor.isClient) {
				return;
		  }
		}
	});

	this.route('work', {
		path: 'work',
		title: 'Work by Jessica Lawshe',
		meta: {
			description: 'Selected Work by Jessica Lawshe',
			keywords: metaKeywords + ', selected work, portfolio',
			url: {
				property: 'og:url',
				itemprop: 'url',
				content: function() {
					return window.location.href;
				}
			}
		},
		link: {
			canonical: function() {
				return window.location.href;
			}
		},
		trackPageView: true,
		onAfterAction: function() {
		  if (!Meteor.isClient) {
				return;
		  }
		}
	});

	this.route('puppy', {
		path: 'puppy',
		title: 'Muffit and Jessica',
		meta: {
			description: 'Muffit and Jessica Lawshe',
			url: {
				property: 'og:url',
				itemprop: 'url',
				content: function() {
					return window.location.href;
				}
			}
		},
		link: {
			canonical: function() {
				return window.location.href;
			}
		},
		trackPageView: true,
		onAfterAction: function() {
		  if (!Meteor.isClient) {
				return;
		  }
		}
	});

	this.route('notFound', {
		path: '/(.*)',
		template: 'notFound'
	});
});
