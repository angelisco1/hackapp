Template.hackathon.helpers({
  getRoute: function() {
    var hackathon = this;
    var params = {id: hackathon._id};
    var queryParams = {};
    return FlowRouter.path('show_hackathon', params, queryParams);
  }
});
