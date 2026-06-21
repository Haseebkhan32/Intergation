import mongoose from "mongoose";

const addUserSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phonenumber: {
    type: Number,
    required: true,
  },
  studentclass: {
    type: Number,
    required: true,
  },
  section: {
    type: String,
    required: true,
  },
  fathername: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
});

const userModel = mongoose.model("AddStudent", addUserSchema )

export default userModel;