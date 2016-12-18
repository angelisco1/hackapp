/*
EXAMPLE:

FlowRouter.route('<path>', {
  name: '<name_page>',
  action: function(<params>, <queryParams>){
    FlowLayout.render('<layout_name>', {main: '<template_name>'});
  }
});

*/

FlowRouter.route('/', {
  name: 'home',
  action: function(params, queryParams){
    console.log('You are in the home page');
    FlowLayout.render('hackapp', {main: 'home'});
  }
});

FlowRouter.route('/newHackathon', {
  name: 'newHackathon',
  action: function(params, queryParams){
    console.log('You are in the new hackathon page');
    FlowLayout.render('hackapp', {main: 'hackathonForm'});
  }
});

FlowRouter.route('/editHackathon/:id', {
  name: 'editHackathon',
  action: function(params, queryParams){
    console.log('You are in the edit hackathon page with id: ' + params.id);
    console.log(queryParams);
    FlowLayout.render('hackapp', {main: 'hackathonForm'});
  }
});

FlowRouter.route('/hackathon/:id', {
  name: 'showHackathon',
  action: function(params, queryParams){
    console.log('You are in the hackathon page with id: ' + params.id);
    FlowLayout.render('hackapp', {main: 'showHackathon'});
  }
});

/*

FlowRouter.route('/my_profile', {
  name: 'my_profile',
  action: function(params, queryParams){
    FlowLayout.render('hackapp', {main: 'my_profile'});
  }
});

FlowRouter.route('/contact', {
  name: 'contact',
  action: function(params, queryParams){
    FlowLayout.render('hackapp', {main: 'contact'});
  }
});


*/
