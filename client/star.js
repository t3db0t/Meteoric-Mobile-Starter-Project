// 'Universal' Star Functions

function created(){
	this.autorun(function () {
    	this.subscription = Meteor.subscribe('listItems');
  	}.bind(this));	
}

function listItems(){
	return List.find();
}

// Mobile

Template.starMobile.created = created;

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
  listItems:listItems
});

// Large

Template.starLarge.created = created;

Template.starLarge.rendered = function () {
  this.autorun(function () {
    if (!this.subscription.ready()) {
      // show non-Ionic loading
    } else {
      // hide non-Ionic loading
    }
  }.bind(this));
};

Template.starLarge.helpers({
  listItems:listItems
});