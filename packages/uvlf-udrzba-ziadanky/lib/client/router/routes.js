Router.route('/ziadanky', {
  name: 'ziadanky',
  template: 'ziadanky',
  layoutTemplate: 'appLayout',
  waitOn: function(){
    var subs = [
      Meteor.subscribe('ziadanky'),
      Meteor.subscribe('nakupy')
    ]
    return subs;
  },
  onBeforeAction: function() {
    Session.set('currentRoute', 'ziadanky');
    this.next();
  }
});

Router.route('/ziadanky/:_id', {
  name: 'ziadanka',
  template: 'ziadanka',
  layoutTemplate: 'ziadankaTlac',
  waitOn: function(){
    var subs = [
      Meteor.subscribe('ziadanka', this.params._id)
    ]
    return subs;
  },
  data: function() {
    return Ziadanky.findOne(this.params._id);
  },
  onBeforeAction: function() {
    Session.set('currentRoute', 'ziadanka');
    this.next();
  }
});

Router.route('/ziadanky/:_id/edit', {
  name: 'ziadankaEdit',
  template: 'ziadankaEdit',
  layoutTemplate: 'appLayout',
  waitOn: function(){
    var subs = [
      Meteor.subscribe('ziadanka', this.params._id)
    ]
    return subs;
  },
  data: function() {
    return Ziadanky.findOne(this.params._id);
  },
  onBeforeAction: function() {
    Session.set('currentRoute', 'ziadanka-edit');
    this.next();
  }
});

Router.route('pridatPoziadavkuOprava', {
  path: '/pridat-poziadavku/oprava',
  template: 'poziadavkaOprava',
  layoutTemplate: 'appLayout',
  waitOn: function(){
    var subs = [
      Meteor.subscribe('pracovnici'),
      Meteor.subscribe('ziadanky')
    ]
    return subs;
  },
  onBeforeAction: function() {
    Session.set('currentRoute', 'pridat-poziadavku-oprava');
    this.next();
  }
});