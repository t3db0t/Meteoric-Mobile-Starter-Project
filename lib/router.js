Router.configure({
  layoutTemplate: 'tabsLayout'
});

Router.map(function() {
  // this.route('index', {path: '/'});
  this.route('home', {path: '/'});
  this.route('star', {path: '/star'});
  this.route('heart', {path: '/heart'});
  this.route('gear', {path: '/gear'});
  this.route('star.detail', {path:'/star/:_id'});
});