const authRoutes = require("./routes/auth.route");
const adminRoutes = require("./routes/admin.route");
const portfolioRoutes = require("./routes/portfolio.route");
const cookieParser = require("cookie-parser");
const connectDB = require("./db/connectDB");
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

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
app.use("/api/admin", adminRoutes);
app.use("/api/portfolio", portfolioRoutes);

app.listen(PORT, () => {
  connectDB();
  console.log("Server running on port ", PORT);
});
