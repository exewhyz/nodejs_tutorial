import http from "http";
import mongoose from "mongoose";

mongoose.connect("mongodb://localhost:27017/users");

const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
});

const userModel = mongoose.model("users", userSchema);

const contactSchema = new mongoose.Schema({
  contactNumber: Number,
  email: String,
});
const contactModel = mongoose.model("contact", contactSchema);

const server = http.createServer(async function (req, res) {
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");

  //READ Operation

  //   db.collectionName.find({}); in Mongoosh Shell
  const findUsersResponse = await userModel.find();

  //CREATE Operation

    const constactResponse = await contactModel.insertMany([{"contactNumber": 1234567890, "email": "test@example.com"}, {"contactNumber": 1234567898,"email": "test@example2.com"},{"contactNumber": 1234567895, "email": "test@example3.com"}]);

  //UPDATE Operation

    const updateUsersResponse = await userModel.updateOne(
      { name: "Abc" },
      { $set: { age: "50" } }
    );

  //DELETE Operation

    const removeContactDetailsResponse = await contactModel.deleteMany({});

  res.end(JSON.stringify({ findUsersResponse }));
});

server.listen(5000, () => {
  console.log("Server running at http://localhost:5000/");
});
