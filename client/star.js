Template.starMobile.created = function () {
  this.autorun(function () {
    this.subscription = Meteor.subscribe('listItems');
  }.bind(this));
};

Template.starMobile.rendered = function () {
  this.autorun(function () {
    if (!this.subscription.ready()) {
      IonLoading.show();
    } else {
      IonLoading.hide();
    }
  }.bind(this));
};

Template.starMobile.helpers({
  listItems:function(){
    return List.find();
  }
});