const { Schema, model } = require('mongoose');
const postSchema = require('./Post')

const adminSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    blogPosts:[postSchema]
})

