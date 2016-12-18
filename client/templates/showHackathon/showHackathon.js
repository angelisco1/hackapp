Template.showHackathon.helpers({
  getHackathon: function(){
    var id = FlowRouter.getParam('id');
    return Hackathons.findOne({"_id": id});
  }
});

Template.showHackathon.events({
  "click .edit-hackathon-button": function(event) {
    params = {
      id: FlowRouter.getParam('id')
    };
    FlowRouter.go('editHackathon', params, {});
  }
});
