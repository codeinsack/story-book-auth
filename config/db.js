const mongoose = require('mongoose');

const connectDB = async () => {
  const connect = await mongoose.connect(`mongodb+srv://admin:admin@like-a-native.oqdhp.mongodb.net/storybook`, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  });

  console.log(`MongoDB connected: ${connect.connection.host}`);
};

module.exports = connectDB;