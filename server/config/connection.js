const mongoose = require('mongoose')

await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/Clean-App-v2', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  
});

module.exports = mongoose.connection;