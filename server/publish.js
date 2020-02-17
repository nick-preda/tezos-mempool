Meteor.publish('actualCycle', function () {
    return ActualCycle.find();
});

Meteor.publish('lastTransactions', function () {
    return Transactions.find({

    }, {
        sort: {
            level: -1,
        },
        limit: 1
    });
});