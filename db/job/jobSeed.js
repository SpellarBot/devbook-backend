const Job = require("../../Models/JobModel");
const seeds = require("./jobSeedData.json");

Job.remove({}).then(_ => {
    console.log("Dropped the DB");
    Job.collection
        .insert(seeds)
        .then(newJob => {
            console.log(seeds);
            process.exit()
        })
        .catch(err => {
            console.log(err);
        });
});
