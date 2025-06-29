const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");
const bodyParser = require("body-parser");
const userRoutes = require("../routes/userRoutes");
const eventRoutes = require("../routes/eventRoutes");
const projectRoutes = require("../routes/projectRoutes");
const facilitiesRoutes = require("../routes/facilitiesRoutes");
const publicationRoutes = require("../routes/publicationRoutes");
const peopleRoutes = require("../routes/peopleRoutes");
const homeRoutes = require("../routes/homeRoutes");
const contactRoutes = require("../routes/contactRoutes");
const galleryRoutes = require("../routes/galleryRoutes");
const certificateRoutes = require("../routes/certificateRoutes");
const accomplishmentRoutes = require("../routes/accomplishmentRoutes");

const app = express();
const PORT = 8000;

const connectToDb = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to DB");
  } catch (error) {
    console.log(error);
  }
};
connectToDb();

const corsOptions = {
  origin: process.env.FRONTEND_URL || "http://localhost:3000",
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: [
    "Origin",
    "X-Requested-With",
    "Content-Type",
    "Accept",
    "Authorization",
  ],
  credentials: true,
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(express.json({ limit: '10mb' })); // Limit request size

// Security headers
app.use((req, res, next) => {
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'DENY');
  res.setHeader('X-XSS-Protection', '1; mode=block');
  next();
});

app.get("/", (req, res) => {
  res.send("Working!");
});

app.use(bodyParser.json());
app.use("/auth", userRoutes);
app.use("/projects", projectRoutes);
app.use("/events", eventRoutes);
app.use("/people", peopleRoutes);
app.use("/publications", publicationRoutes);
app.use("/facilities", facilitiesRoutes);
app.use("/home", homeRoutes);
app.use("/contact", contactRoutes);
app.use("/gallery", galleryRoutes);
app.use("/certificates", certificateRoutes);
app.use("/accomplishments", accomplishmentRoutes);
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

// To Fix:
// Middleware and JWT
// Clean up redundant code
// Use date instead of string in schemas and frontend input
// Abstract frontend to reuse components

module.exports = app;
