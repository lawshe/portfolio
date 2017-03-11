Router.configure({
	layoutTemplate: 'layout',
	loadingTemplate: 'loading',
	trackPageView: true
});

/*
	Meta tag data
*/
var metaKeywords = 'Jessica Lawshe, Lawshe, designer, developer, software engineer, Austin, Texas';
if(webSkills){
	webSkills.forEach(function(skill){
		metaKeywords += ', ' + skill.what;
	});
	metaKeywords = metaKeywords.slice(0, metaKeywords.length -1);
}

/*
	Router
*/
Router.map(function() {
	this.route('about', {
		path: '/',
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

	this.route('notFound', {
		path: '/(.*)',
		template: 'notFound'
	});
});
