Meteor.methods({
  createHackathon: function(data) {
    Hackathons.insert(data);
  },
  deleteHackathon: function(id) {
    Hackathons.remove({_id: id});
  },
  updateHackathon: function(id, data) {
    Hackathons.update(id, data);
  }
});
