Router.configure({
	layoutTemplate: 'layout',
	loadingTemplate: 'loading',
	trackPageView: true
});

/*
	Meta tag data
*/
var metaKeywords = 'Jessica Lawshe, designer, developer, software engineer, Austin, Texas';
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
		trackPageView: true,
		onAfterAction: function() {
		  if (!Meteor.isClient) {
				return;
		  }
		  SEO.set({
				title: 'Jessica Lawshe',
				meta: {
				  'description': 'About Jessica Lawshe, a freelance software engineer based in Austin, Texas.',
				  'keywords': metaKeywords
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
			  	'description': 'Selected Work by Jessica Lawshe'
				}
		  });
		}
	});

	this.route('puppy', {
		path: 'puppy',
		onAfterAction: function() {
		  if (!Meteor.isClient) {
				return;
		  }

		  SEO.set({
				title: 'Muffit',
				meta: {
					'description': 'Muffit the dog.'
				}
		  });
		}
	});


	this.route('notFound', {
		path: '/(.*)',
		template: 'notFound'
	});
});
