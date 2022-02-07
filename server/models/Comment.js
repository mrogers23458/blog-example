const { Schema } = require('mongoose')

const commentSchema = new Schema({
    commentId: String,
    title: String,
    comment: {
        type: String,
        required: true
    },
    commentor: String,
})

module.exports = commentSchema