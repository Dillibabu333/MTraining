
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const mongoURI = 'mongodb://localhost:27017/contacttabledb';

mongoose.connect(mongoURI, { 
    useNewUrlParser: true,
    useUnifiedTopology: true,
}) 
.then(() => {
    console.log('Connected to MongoDB');
})
.catch((error) => {
    console.error('Error connecting to MongoDB:', error);
});

const contactSchema = new mongoose.Schema({
    fname:String,
    desg:String,
    email:String,
    phno : String,
    password:String,
  
});

const contacts = mongoose.model('contacts', contactSchema);



app.post('/contacts', async (req, res) => {
    const contacts = req.body;

    try {
        const contacts = new contacts(contacts);
        await contacts.save();
        res.status(201).json(contactSchema);
    } catch (error) {
        res.status(400).json({ error: 'Error adding contact service' });
    }
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

