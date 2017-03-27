if (Meteor.isClient) {
	Template.home.helpers({
		skills: function(){
			return webSkills;
		},
		ie: function(){
			return Session.get('ie');
		},
		examples: function(){
			return Meteor.fxns.processExs(workExs);
		}
	});
	Template.work.helpers({
		years: function(){
			var years = workExMore.slice(0);
			years.forEach(function(year){
				year.id = year.year;
				year.examples = Meteor.fxns.processExs(year.examples);
			});
			return years;
		}
	});
}
