const express = require('express');
const cors = require('cors');
require('./database');  
const user = require('./user.model');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/api/v2/todos', async (req, res, next) => {
    try {
        console.log(req.body)
        const doc = await user.create(req.body);
        res.json(doc);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    }
});

app.get('/api/v2/todos/:id', async (req, res, next) => {
    try {
        const result = await user.findById(req.params.id);
        if (!result) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    }
});

app.get('/api/v2/todos', async (req, res, next) => {
    try {
        const results = await user.find({});
        res.json(results);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    }
});



app.put('/api/v2/todos/:id', async (req, res, next) => {
    try {
        const result = await user.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!result) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    }
});

app.delete('/api/v2/todos/:id', async (req, res, next) => {
    try {
        const result = await user.findByIdAndDelete(req.params.id);
        if (!result) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.json({ message: `${result.task}'s account has been removed` });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    }
});




app.listen(5000, () => {
    console.log('Server is running on port 5000');
});
