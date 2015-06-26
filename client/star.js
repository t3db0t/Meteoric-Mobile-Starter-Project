Template.star.created = function () {
  this.autorun(function () {
    this.subscription = Meteor.subscribe('listItems');
  }.bind(this));
};

Template.star.rendered = function () {
  this.autorun(function () {
    if (!this.subscription.ready()) {
      IonLoading.show();
    } else {
      IonLoading.hide();
    }
  }.bind(this));
};

Template.star.helpers({
  listItems:function(){
    return List.find();
  }
});