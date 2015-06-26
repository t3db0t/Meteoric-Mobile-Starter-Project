Meteor.publish('listItems', function() {
  return List.find();
});

Meteor.publish('listItem', function(_id) {
  return List.find({_id: _id});
});