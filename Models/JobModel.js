const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const Job = new Schema({
    content: String,
    position: String,
    company: String,
    location: String,
    companyLogo: String,
    createdAt: {
        Type: Date,
        // Default: Date.now()
    }
    // user:
    // userId: [Linked Model ]
    // userName: [Linked Model]
});

mongoose.model("JobModel", Job);

module.exports = mongoose;