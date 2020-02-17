// FlowRouter.route('/', {
//   subscriptions: function() {
//     // this.register('tweets', Meteor.subscribe("tweets.allreversed"))
//   },
//   action() {
//     BlazeLayout.render('home', {
//       main: 'home'
//     });
//   },
// });
//
// FlowRouter.route('/delegate/:address', {
//   subscriptions: function() {
//     // this.register('tweets', Meteor.subscribe("tweets.allreversed"))
//   },
//   action(params) {
//     BlazeLayout.render('delegated', {
//       main: 'delegated'
//     });
//     Session.set("delegatedAddress", params.address)
//     // console.log(params);
//   },
// });

FlowRouter.route('/tezos/administration', {
  subscriptions: function() {
    // this.register('tweets', Meteor.subscribe("tweets.allreversed"))
  },
  action() {
    BlazeLayout.render('admin', {
      main: 'admin'
    });
  },
});

FlowRouter.route('/', {
  subscriptions: function() {
    // this.register('tweets', Meteor.subscribe("tweets.allreversed"))
  },
  action() {
    BlazeLayout.render('home', {
      main: 'home'
    });
  },
});

FlowRouter.route('/d/:address', {
  subscriptions: function() {
    // this.register('tweets', Meteor.subscribe("tweets.allreversed"))
  },
  action(params) {
    BlazeLayout.render('wordpressDelegated', {
      main: 'wordpressDelegated'
    });
    Session.set("delegatedAddress", params.address)
    // console.log(params);
  },
});

// the App_notFound template is used for unknown routes and missing lists
FlowRouter.notFound = {
  action() {
    BlazeLayout.render('notFound', {
      main: 'notFound'
    });
  }
};

FlowRouter.route('/tst', {
  subscriptions: function() {
    // this.register('tweets', Meteor.subscribe("tweets.allreversed"))
  },
  action() {
    BlazeLayout.render('rpc', {
      main: 'rpc'
    });
  },
});


FlowRouter.route('/tst/:address', {
  subscriptions: function() {
    // this.register('tweets', Meteor.subscribe("tweets.allreversed"))
  },
  action(params) {
    BlazeLayout.render('tstdelegator', {
      main: 'tstdelegator'
    });
    Session.set("delegatedtstAddress", params.address)
    // console.log(params);
  },
});

FlowRouter.route('/r/:address', {
  subscriptions: function() {
    // this.register('tweets', Meteor.subscribe("tweets.allreversed"))
  },
  action(params) {
    BlazeLayout.render('reward', {
      main: 'reward'
    });
    Session.set("rewardAddress", params.address)
    // console.log(params);
  },
});
