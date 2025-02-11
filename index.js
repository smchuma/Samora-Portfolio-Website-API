const express = require("express");
const dotenv = require("dotenv");
const authRoutes = require("./routes/auth.route");
const connectDB = require("./db/connectDB");
const cors = require("cors");
const cookieParser = require("cookie-parser");

dotenv.config();

const app = express();
PORT = process.env.PORT || 3000;

app.use(
  cors({
    origin: [process.env.DEVELOPMENT_URL, process.env.PRODUCTION_URL],
    credentials: true,
  })
);

app.use(express.json()); //parse json requests
app.use(cookieParser()); //parse cookies

// routes
app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
  connectDB();
  console.log("Server running on port ", PORT);
});
