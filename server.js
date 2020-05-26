const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 9000;

const passport = require("passport");
const users = require("./routes/api/users");

app.use(cors());
app.use(express.json());

const uri = process.env.DB_URI;

mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
})

const exercisesRouter = require('./routes/exercises');
const itemsRouter = require('./routes/items');
const videosRouter = require('./routes/videos');
const storeRouter = require('./routes/store-api');
const drRouter = require('./routes/dr-api');
const dbDataRouter = require('./routes/db-api');
const memberRouter = require('./routes/member');

app.use('/exercises', exercisesRouter);
app.use('/items', itemsRouter);
app.use('/youtube', videosRouter);
app.use('/store', storeRouter);
app.use('/dr', drRouter);
app.use('/db-video', dbDataRouter);
app.use('/member', memberRouter);

// Passport middleware
app.use(passport.initialize());
// Passport config
require("./config/passport")(passport);
// Routes
app.use("/api/users", users);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});