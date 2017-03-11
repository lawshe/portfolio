if (Meteor.isClient) {
	Template.about.helpers({
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
	Template.menu.helpers({
		isAbout: function(){
			if(Session.get('page') === 'about'){
				return true;
			}else{
				return false;
			}
		}
	});
	Template.work.helpers({
		examples: function(){
			return Meteor.fxns.processExs(workExs);
		}
	});
}
