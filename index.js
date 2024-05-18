const express = require('express')
const mongoose = require('mongoose');
const Post = require('./models/post.models.js');
const PostRoute = require('./routes/post.route.js');
const app = express();
const cors = require('cors');

app.use(cors({
    origin: ['https://front-end-final499.vercel.app/', 'http://localhost:3000', 'http://localhost:3001'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
}));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/posts", PostRoute);

app.get('/', (req, res) => {
    res.send('6401174 Chatchin Maingeon')
  })

mongoose.connect('mongodb+srv://admin:26042545@cluster0.t5367bs.mongodb.net/Project0?retryWrites=true&w=majority&appName=Cluster0')
    .then(() => {
        console.log("Connected to database!");
        app.listen(3000, () => {
            console.log('Server is running on port 3000');
        });
    })
    .catch(() => {
        console.log("Connection Filed!");
    });