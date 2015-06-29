// var layout;
// if(Meteor.Device.isPhone()){
	// console.log(Meteor.Device);
	// layout = 'tabsLayout';
// } else {
// 	layout = 'largeLayout';
// }

Router.configure({
	//layoutTemplate: 'tabsLayout'
	layoutTemplate: 'layout'
});

Router.map(function() {
  // this.route('index', {path: '/'});
  this.route('home', {path: '/'});
  this.route('star', {path: '/star'});
  this.route('heart', {path: '/heart'});
  this.route('gear', {path: '/gear'});
  this.route('star.detail', {path:'/star/:_id'});
});