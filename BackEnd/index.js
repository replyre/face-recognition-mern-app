const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const UserModel = require("./model");
const dotenv = require("dotenv");
dotenv.config({
  path: ".env", //give .env file location
});

const port = process.env.PORT; // Use the PORT environment variable
const app = express();
app.use(express.json());
const allowedOrigins = ['https://localhost', 'https://face-recognition-mern-app.vercel.app'];
app.use(cors({
  origin: function(origin, callback) {
    // Check if the origin is in the allowed origins list
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
}));
mongoose.connect(process.env.MONGO_URL);

app.post("/register", (req, res) => {
  UserModel.create(req.body)
    .then((e) => res.json(e))
    .catch((e) => res.json(e));
});
app.get("/getUsers", async (req, res) => {
  try {
    // Query the database to get all data
    const allData = await UserModel.find();
    // Send the response with the fetched data
    res.json(allData);
  } catch (err) {
    // If there's an error, send an error response
    res.status(500).json({ message: err.message });
  }
});
app.listen(port, () => {
  console.log(`server is running ${port}`);
});
