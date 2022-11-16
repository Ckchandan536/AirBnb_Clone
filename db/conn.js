//server connection
const mongoose = require("mongoose");
//defined in config file
// const DB = process.env.DATABASE;

// mongoose
//   .connect("mongodb://localhost:27017/airbnb", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => {
//     console.log("Connected to database");
//   })
//   .catch((err) => {
//     console.log("not connected to database");
//   });




  mongoose.connect("mongodb://localhost:27017/airbnb", {
  // .connect("mongodb+srv://fullstackdeveloperchandan:chandan536@cluster0.35zfuqi.mongodb.net/AirbnbClone", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to database");
  })
  .catch((err) => {
    console.log("not connected to database");
  });

// "mongodb+srv://fullstackdeveloperchandan:chandan536@cluster0.35zfuqi.mongodb.net/AirbnbClone"
// mongosh "mongodb+srv://cluster0.35zfuqi.mongodb.net/myFirstDatabase" --apiVersion 1 --username fullstackdeveloperchandan

// user name => fullstackdeveloperchandan
