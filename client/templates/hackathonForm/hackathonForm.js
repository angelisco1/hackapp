Template.hackathonForm.helpers({
  hackathon: function() {

    var hackathonId = FlowRouter.getParam("id");
    var hackathon = Hackathons.findOne(hackathonId) || {};

    return hackathon;
  }
});


Template.hackathonForm.events({
  "submit #hackathonForm": function (event) {
    event.preventDefault();
    const data = {
      name: event.target.querySelector('#name').value,
      description: event.target.querySelector('#description').value,
      place: event.target.querySelector('#place').value,
      initDate: event.target.querySelector('#initDate').value,
      finishDate: event.target.querySelector('#finishDate').value,
      cost: event.target.querySelector('#cost').value,
      isPublic: event.target.querySelector('#isPublic').checked,
      bases: event.target.querySelector('#bases').value,
      hashtag: event.target.querySelector('#name').value,
      urlYoutube: event.target.querySelector('#urlYoutube').value,
      urlFlickr: event.target.querySelector('#urlFlickr').value
    };

    let hackathonId = FlowRouter.getParam("id");
    if(hackathonId) {
      Meteor.call('updateHackathon', hackathonId, data, function (error, result) {
        if(error) {
          // sAlert.error(error.reason);
        } else {
          sAlert.success('The hackathon has been updated!');
        }
      });
    } else {
      Meteor.call('createHackathon', data, function (error, result) {
        if(error) {
          // sAlert.error(error.reason);
        } else {
          sAlert.success('New hackathon created!');
        }
      });
    }

    FlowRouter.go('home');
  },
  "click .go-home": function (event) {
    FlowRouter.go('home');
  }
});
