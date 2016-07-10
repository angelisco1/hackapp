Template.add_new_hackathon.events({
  "submit #new-hackathon-form": function (event) {
    event.preventDefault();
    var name = $(event.target).find('[name=name]').val();
    var description = $(event.target).find('[name=description]').val();
    var place = $(event.target).find('[name=place]').val();
    var initDate = $(event.target).find('[name=initDate]').val();
    var finishDate = $(event.target).find('[name=finishDate]').val();
    var hashtag = $(event.target).find('[name=hashtag]').val();
    var urlYoutube = $(event.target).find('[name=urlYoutube]').val();
    var urlFlickr = $(event.target).find('[name=urlFlickr]').val();
    var bases = $(event.target).find('[name=bases]').val();
    var organizations = $(event.target).find('[name=organizations]').val();
    var cost = $(event.target).find('[name=cost]').val();
    var isPublic = $(event.target).find('[name=isPublic]').val();
    var numWinners = $(event.target).find('[name=numWinners]').val();
    var prizes = $(event.target).find('[name=prizes]').val();
    var meetupEventId = $(event.target).find('[name=meetupEventId]').val();
    var teams = $(event.target).find('[name=teams]').val();
    Meteor.call('addHackathon', name, description, place, initDate, finishDate, hashtag, urlYoutube, urlFlickr, bases, organizations, cost, isPublic, numWinners, prizes, meetupEventId, teams, function (error, result) {});
    var params = {};
    var queryParams = {};
    return FlowRouter.go('home', params, queryParams);
  },
  "click .go-home": function (event) {
    var params = {};
    var queryParams = {};
    return FlowRouter.go('home', params, queryParams);
  }
});
