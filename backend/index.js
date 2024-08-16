const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");
const bodyParser = require("body-parser");
const userRoutes = require("./routes/userRoutes");
const eventRoutes = require("./routes/eventRoutes");
const projectRoutes = require("./routes/projectRoutes");
const facilitiesRoutes = require("./routes/facilitiesRoutes");
const publicationRoutes = require("./routes/publicationRoutes");
const peopleRoutes = require("./routes/peopleRoutes");
const homeRoutes = require("./routes/homeRoutes");
const contactRoutes = require("./routes/contactRoutes");
const galleryRoutes = require("./routes/galleryRoutes");
const certificateRoutes = require("./routes/certificateRoutes");

const app = express();
const PORT = 10000;

const connectToDb = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to DB");
  } catch (error) {
    console.log(error);
  }
};
connectToDb();

app.use(express.json());
express.json();
app.use(cors());

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
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
