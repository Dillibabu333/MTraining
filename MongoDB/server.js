
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();

// Use the 'cors' middleware to enable CORS for all routes
app.use(cors());
app.use(express.json()); 

// MongoDB setup using Mongoose
mongoose.connect('mongodb://localhost:27017/Dilli', { //mongodb://localhost:27017- mongodb connection string /Sujit database name 
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', (err) => {
  console.error('MongoDB connection error:', err);
});

db.once('open', () => {
  console.log('Connected to MongoDB');
});

const loginSchema = new mongoose.Schema({
  loginName: String,
  loginPassword: String,
});

const Login = mongoose.model('Login', loginSchema);// here Login- is a collection  if it the mentioned collection is present in a db means it will be accessed or it will be create a mentioned  collecton with suffix 's'. 

app.post('/insert', async (req, res) => {  // /insert- this route it will use to connect the client using API- 
  const { loginName, loginPassword } = req.body;

  try {
    const login = new Login({
      loginName, // Use the correct key from req.body
      loginPassword, // Use the correct key from req.body
    });

    await login.save();
    console.log('Successfully logged in', login._id);

    res.status(201).json({ message: 'Login successfully.' });
  } catch (error) {
    console.error('Not logged in', error);
    res.status(500).json({ error: 'Failed to login' });
  }
});


app.get('/getAll', async (req, res) => {  // /get- this route it will use to connect the client using API- 

  try {
  const allUser= await Login.find({});
  res.status({status:"ok", data :allUser});
  } catch (error) {
    console.log(error);
  }
});

app.listen(5000, () => {
  console.log('Backend server is running on http://localhost:5000');
});
