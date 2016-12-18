Template.home.helpers({
  getHackathons: function(){
    var hackathons = Hackathons.find();
    return hackathons;
  }
});



Template.home.events({
  'click .add-new-hackathon': function (event) {
    params = {};
    queryParams = {};
    return FlowRouter.go('add_new_hackathon', params, queryParams);
  }
});