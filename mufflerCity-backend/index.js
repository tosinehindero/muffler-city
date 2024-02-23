require("dotenv").config();

// Import express and other necessary libraries
const express = require("express");
const bodyParser = require("body-parser");

// Initialize express
const app = express();

app.use(express.json()); //Parse JSON bodies
const cors = require("cors");
//enables middleware
const corsOptions = {
   origin: "http://127.0.0.1:5173", // Or your frontend's origin
   credentials: true, // To allow cookies and authentication headers
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(
   bodyParser.urlencoded({
      extended: true,
   })
);

// Define a simple route for testing

app.get("/", (req, res) => {
   res.send("Hello World!...we are live...yes we are");
});

// Define CRUD routes here (as needed for your application)
const mufflerCityRoutes = require("./routes/MufflerRoutes");
app.use("/MufflerRoutes", mufflerCityRoutes);

//global error handling middleware
app.use((err, req, res, next) => {
   console.error(err.stack);
   res.status(500).send("Something broke!");
});

// Specify the port to listen on
const PORT = process.env.PORT || 3001; // Use the environment port or 3001 if not specified

// Start the server

app.listen(PORT, () => {
   console.log(`Server running on port ${PORT}`);
});
