

Router.configure({
	layoutTemplate: 'layout',
	loadingTemplate: 'loading',
    trackPageView: true
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
		path: 'work/bpb'
	});
	this.route('landes', {
		path: 'work/landes'
	});
	this.route('notfound', {
		path: '*'
	});
});

