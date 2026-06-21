import userModel from "../model/AddStudent.js";

async function addStudent(req, res) {
  const {
    firstname,
    age,
    email,
    phonenumber,
    address,
    fathername,
    section,
    studentclass,
  } = req.body;

  const isUserAlreadyExists = await userModel.findOne({
    $or: [{ username }, { email }],
  });

  if (isUserAlreadyExists) {
    return res.status(400).json({
      message: "Student Already exists",
    });
  }

 

  const userAdd = userModel.create({
    firstname,
    age,
    email,
    phonenumber,
    address,
    fathername,
    section,
    studentclass,
  });

   res.status(201).json({
    message: "User registered successfully",
    user: {
      id: user._id,
      username: user.username,
      email: user.email,
    },
  });
}

export default {addStudent};
