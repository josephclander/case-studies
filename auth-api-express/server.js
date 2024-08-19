require('dotenv').config();
const mongoose = require('mongoose');
const app = require('./app');
const PORT = process.env.PORT || 3000;

mongoose.set('strictQuery', false);
const mongoDbURL =
  process.env.MONGODB_URL || 'mongodb://localhost:27017/auth_userDB';

mongoose
  .connect(mongoDbURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log(`MongoDB Connected`));

app.listen(PORT, () => {
  console.log(`App listening on port:${PORT}`);
});
