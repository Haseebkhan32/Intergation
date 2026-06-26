import mongoose from "mongoose";

const addUserSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
  },
  fathername: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  age: {
    type: Number,
    required: true,
  },
  phonenumber: {
    type: Number,
    required: true,
  },
  studentclass: {
    type: String,
    required: true,
  },
  section: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
});

const userModel = mongoose.model("AddStudent", addUserSchema)

export default userModel;