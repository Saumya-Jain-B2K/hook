const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");

const app = express();
app.use(express.json());
app.use(cors());

dotenv.config();


const PORT = process.env.PORT || 3000;

//connection with mongodb database
connectDB(); 


//this runs successfully when the backend is started
app.get("/", (req, res) => {
    res.send("Welcome to HOOK API")
});

// API Routes

//first is userRoutes aka userRoutes
app.use("/api/users", userRoutes);


//it shows the path and the location on which our backend server is started
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})