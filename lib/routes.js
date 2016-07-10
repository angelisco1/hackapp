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
  subscriptions: function(params){},
  action: function(params, queryParams){
    FlowLayout.render('hackapp', {main: 'home'});
  }
});

FlowRouter.route('/hackathon', {
  name: 'add_new_hackathon',
  subscriptions: function(params){},
  action: function(params, queryParams){
    FlowLayout.render('hackapp', {main: 'add_new_hackathon'});
  }
});

/*

FlowRouter.route('/hackathon/:id', {
  name: 'show_hackathon',
  subscriptions: function(params){},
  action: function(params, queryParams){
    FlowLayout.render('hackapp', {main: 'show_hackathon'});
  }
});

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

FlowRouter.route('/hackathon/:id', {
  name: 'edit_hackathon',
  action: function(params, queryParams){
    FlowLayout.render('hackapp', {main: 'edit_hackathon'});
  }
});

*/
