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
    $or: [{ firstname }, { email }],
  });

  if (isUserAlreadyExists) {
    return res.status(400).json({
      message: "Student Already exists",
    });
  }



  const userAdd = await userModel.create({
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
      id: userAdd._id,
      firstname: userAdd.firstname,
      email: userAdd.email,
    },
  });
}
async function allstudentlist(req, res) {
  try {
    const allstudent = await userModel.find();

    if (allstudent.length <= 0) {
      return res.status(404).json({
        success: false,
        message: "No Students Found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "All Students Fetched Successfully",
      totalStudents: allstudent.length,
      data: allstudent,
    });


  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error.message,
    });

  }
}
async function deleteStudent(req, res) {


  try {

    const { id } = req.params;

    const student = await userModel.findByIdAndDelete(id);

    if (!student) {
      return res.status(404).json({
        success: false,
        message: "Student Not Found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Student Deleted Successfully",
      id,
    });

  } catch (error) {

      res.status(500).json({
      success: false,
      message: err.message,
    });
  }

}

export default { addStudent, allstudentlist , deleteStudent };
