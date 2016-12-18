Meteor.publish('hackathons', function(){
  return Hackathons.find();
});
