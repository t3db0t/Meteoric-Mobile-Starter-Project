var numItems = 20;

Meteor.startup(function () {
	if (List.find({}).count() != numItems) {
	  	_(numItems).times(function(n){
	  		List.insert({
		      title: Fake.sentence(3),
		      body: Fake.paragraph(2),
		      published: true
		    });
	  	});
	}
});