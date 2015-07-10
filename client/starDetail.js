Template.starDetail.created = function () {
  this.autorun(function () {
    this.subscription = Meteor.subscribe('listItem', Router.current().params._id);
  }.bind(this));
};

Template.starDetail.helpers({
	item:function(){
		return List.findOne({_id: Router.current().params._id});
	}
});