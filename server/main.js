import {
    Meteor
} from 'meteor/meteor';

import eztz from 'eztz-lib'


Meteor.startup(() => {

    import '../server/publish.js'
    // import '../server/methods.js'
    import '../lib/collections.js'

    Meteor.setInterval(function () {

        var response = HTTP.get('https://mainnet.tezrpc.me/chains/main/mempool/pending_operations');
        // console.log(response);;

        levelToDelete = 0;

        eztz.rpc.getHead().then(function (res) {
            // console.log(res.header.level);
            cycle = parseInt(parseInt(res.header.level) / 4096);
            // console.log(parseInt(block));            
            // console.log("baker: " + res.metadata.baker);

            // 
            actual = ActualCycle.findOne({});

            levelToUpdate = res.header.level;

            ActualCycle.update({
                _id: actual._id
            }, {
                level: res.header.level,
                cycle: cycle,
                baker: res.metadata.baker,
                hash: res.hash
            });

            if (response.data) {

                if (levelToUpdate != 0) {

                    tx = Transactions.findOne({
                        level: levelToUpdate
                    });

                    if (tx) {
                        Transactions.update({
                            _id: tx._id
                        }, {
                            applied: response.data.applied,
                            refused: response.data.refused,
                            branch_refused: response.data.branch_refused,
                            branch_delayed: response.data.branch_delayed,
                            unprocessed: response.data.unprocessed,
                            createdAt: new Date()
                        });
                    } else {
                        Transactions.insert({
                            level: levelToUpdate,
                            cycle: parseInt(levelToUpdate / 4096),
                            applied: response.data.applied,
                            refused: response.data.refused,
                            branch_refused: response.data.branch_refused,
                            branch_delayed: response.data.branch_delayed,
                            unprocessed: response.data.unprocessed,
                            createdAt: new Date()
                        });
                    }
                }

                // console.log(moment().toISOString());
                // console.log("applied: " + response.data.applied.length);
                // console.log("refused: " + response.data.refused.length);
                // console.log("branch_refused:" + response.data.branch_refused.length);
                // console.log("branch_delayed:" + response.data.branch_delayed.length);
                // console.log("unprocessed:" + response.data.unprocessed.length);
            }

        }).catch(function (e) {});

    }, 3000)
});