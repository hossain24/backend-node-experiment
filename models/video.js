const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const VideoSchema = new Schema(
    {
        id: String,
        kind: String,
        etag: String
    },
    {
        timestamps: true
    });

module.exports = mongoose.model("Video", VideoSchema, "dr-api");