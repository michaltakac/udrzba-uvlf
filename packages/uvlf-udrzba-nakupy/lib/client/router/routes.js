Router.route('/nakupy', {
  name: 'nakupy',
  template: 'nakupy',
  layoutTemplate: 'appLayout',
  waitOn: function(){
    var subs = [
      Meteor.subscribe('nakupy')
    ]
    return subs;
  },
  onBeforeAction: function() {
    Session.set('currentRoute', 'nakupy');
    this.next();
  }
});

Router.route('pridatPoziadavkuNakup', {
  path: '/ziadanky/:_id/nakup',
  template: 'poziadavkaNakup',
  layoutTemplate: 'appLayout',
  waitOn: function(){
    var subs = [
      Meteor.subscribe('pracovnici'),
      Meteor.subscribe('ziadanka', this.params._id),
      Meteor.subscribe('nakup', this.params._id)
    ]
    return subs;
  },
  onBeforeAction: function() {
    Session.set('currentRoute', 'pridat-poziadavku-nakup');
    this.next();
  }
});