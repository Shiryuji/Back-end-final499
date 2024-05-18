const { Timestamp } = require('mongodb');
const mongoose = require('mongoose');

const postsSchema = mongoose.Schema(
    {
        title: {
            type: String,
            require: [true, "Please enter post"],
            default: 0
        },
        img: {
            type: String,
            require: true,
            default: 0
        },
        content: {
            type: String,
            require: false
        },
    },
    {
        Timestamp: true
    }
);

const Post = mongoose.model("Post", postsSchema);

module.exports = Post ;