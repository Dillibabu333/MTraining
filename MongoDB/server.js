
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();

// Use the 'cors' middleware to enable CORS for all routes
app.use(cors());
app.use(express.json()); 

// MongoDB setup using Mongoose
mongoose.connect('mongodb://localhost:27017/Demoapp', { //mongodb://localhost:27017- mongodb connection string /demoap database name 
  // useNewUrlParser: true,
  // useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', (err) => {
  console.error('MongoDB connection error:', err);
});

db.once('open', () => {
  console.log('Connected to MongoDB');
});

// User model
const UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phno: {
    type: String,
    required: true,
    unique: true,
  },
  gender: {
    type: String,
    enum: ['male', 'female','others'],
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const User = mongoose.model('registered_users', UserSchema);


// register routes
app.post('/register', async (req, res) => {
  try {
    // Check if the email already exists
    const existingUser = await User.findOne({ email: req.body.email });

    if (existingUser) {
      // If the email is already present, send an alert and return an error response
      return res.status(400).json({ error: 'User with this email already exists' });
    }

    // If the email is not present, create the new user
    const user = await User.create(req.body);
    res.status(201).json(user); // Use status 201 for resource creation
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Login route
app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (!user) {
    return res.status(401).json({ message: 'Invalid email' });
  }

  if (password !== user.password) {
    return res.status(401).json({ message: 'Invalid password' });
  }

  res.json({ success: true });
});

// Fetch all users route
app.get('/users', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(5000, () => {
  console.log('Backend server is running on http://localhost:5000');
});
