
Router.configure({
	layoutTemplate: 'layout',
	loadingTemplate: 'loading'
});

Router.map(function() {
	this.route('home', {
		path: '/'
	});
	this.route('about', {
		path: 'about',
	});
	this.route('work', {
		path: 'work'
	});
	this.route('bpb', {
		path: 'bpb'
	});
	this.route('landes', {
		path: 'landes'
	});
});

