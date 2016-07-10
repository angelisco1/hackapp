Meteor.methods({
  addHackathon: function(name, description, place, initDate, finishDate, hashtag, urlYoutube, urlFlickr, bases, organizations, cost, isPublic, numWinners, prizes, meetupEventId, teams){
    Hackathons.insert({
      name: name,
      description: description,
      place: place,
      initDate: initDate,
      finishDate: finishDate,
      hashtag: hashtag,
      urlYoutube: urlYoutube,
      urlFlickr: urlFlickr,
      bases: bases,
      organizations: organizations,
      cost: cost,
      isPublic: isPublic,
      numWinners: numWinners,
      prizes: prizes,
      meetupEventId: meetupEventId,
      teams: teams,
      created_at: new Date()
    });
  },
  deleteHackathon: function(hackathonId){
    Hackathons.remove(hackathonId);
  },
  editHackathon: function(hackathonId){
    Hackathons.update(hackathonId);
  }
});
