Template.home.onCreated(function () {
    // $(window).scrollTop(0);
    var self = this;
    self.autorun(function () {
        // self.subscribe('myOrganizations', Meteor.userId());
        self.subscribe('actualCycle');
        self.subscribe('lastTransactions');
    });
});

Template.home.helpers({
    getInfo: function () {
        return ActualCycle.findOne()
    },
    nextCycle: function () {
        actual = ActualCycle.findOne();

        if (actual) {
            block = actual.level;
            cycle = actual.cycle;

            remaining = 4096 - (parseInt(block) % 4096);
            // console.log(rest);
            return moment().add(remaining, 'm')
        }
    },
    cycleProgress: function () {
        actual = ActualCycle.findOne();

        if (actual) {
            block = actual.level;
            cycle = actual.cycle;

            remaining = parseInt(block) % 4096;
            // console.log(rest);

            percentage = 100 * remaining / 4096;
            // console.log(remaining);
            return percentage
        }
    },
    lastBlock: function () {
        block = ActualCycle.findOne();
        if (block) {
            return parseInt(block.level) - 1
        }
    },
    getTransactions: function () {
        return Transactions.find({}, {
        });
    },
    numberOfEndorsements: function () {
        txs = Transactions.find().fetch();
        result = 0
        if (txs && txs[0]) {
            applied = txs[0].applied
            if (applied) {

                for (let index = 0; index < applied.length; index++) {
                    if (applied[index].contents[0].kind == "endorsement") {
                        result++
                    }
                }
            }
        };

        return result;
    },
    numberOfApplied: function () {
        txs = Transactions.find().fetch()
        if (txs && txs[0]) {
            return txs[0].applied.length
        }
    },
    numberOfRefused: function () {
        txs = Transactions.find().fetch()
        if (txs && txs[0]) {
            return txs[0].refused.length
        }

    },
    numberOfBranchRefused: function () {
        txs = Transactions.find().fetch()
        if (txs && txs[0]) {
            return txs[0].branch_refused.length
        }

    },
    numberOfBranchDelayed: function () {
        txs = Transactions.find().fetch()
        if (txs && txs[0]) {
            return txs[0].branch_delayed.length
        }

    },
    numberOfUnprocessed: function () {
        txs = Transactions.find().fetch()
        if (txs && txs[0]) {
            return txs[0].unprocessed.length
        }

    },
});

Template.txtemplate.helpers({
    isTransaction: function (type) {
        if (type && type === "transaction") {
            return true
        }
    },
    isEndorsement: function (type) {
        if (type && type === "endorsement") {
            return true
        }
    },
    isReveal: function (type) {
        if (type && type === "reveal") {
            return true
        }
    },
    isDelegation: function (type) {
        if (type && type === "delegation") {
            return true
        }
    },
    divideBy: function (amount) {
        if (amount) {
            amount = parseFloat(amount);
            return amount / 1000000
        }
    }
});

Template.txWithoutEndorsementstemplate.helpers({
    isTransaction: function (type) {
        if (type && type === "transaction") {
            return true
        }
    },
    isEndorsement: function (type) {
        if (type && type === "endorsement") {
            return true
        }
    },
    isReveal: function (type) {
        if (type && type === "reveal") {
            return true
        }
    },
    isDelegation: function (type) {
        if (type && type === "delegation") {
            return true
        }
    },
    divideBy: function (amount) {
        if (amount) {
            amount = parseFloat(amount);
            return amount / 1000000
        }
    }
})