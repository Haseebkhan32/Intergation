import {
  Avatar,
  Box,
  Container,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";

import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import PersonIcon from "@mui/icons-material/Person";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { deleteStudent, setStudents } from "../Redux/feature/allstudentslice";

const studentlist = () => {

  const dispatch = useDispatch();

  async function fetchStudents() {

    try {

      const response = await fetch(
        "http://localhost:3000/api/auth/all-studentlist"
      );

      const data = await response.json();

      dispatch(setStudents(data));



    } catch (err) {

      console.log(err);

    }
  }

  useEffect(() => {

    fetchStudents();

  }, []);

  const  handleDelete = async (id) => {
    try {

      const response = await fetch(
        `http://localhost:3000/api/auth/delete-student/${id}`,
        {
          method: "DELETE",
        }
      );

      const result = await response.json();

      if (result.success) {

        dispatch(deleteStudent(id));

      }

    } catch (err) {

      console.log(err);

    }
  };

  const handleEdit = (id) => {
    console.log("Edit Student:", id);
  };

  const { data } = useSelector((state) => state.allStudents.students);

  return (
    <Container maxWidth={false} sx={{ mt: 5 }}>
      <Paper
        elevation={5}
        sx={{
          borderRadius: 3,
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            bgcolor: "#1976d2",
            color: "#fff",
            p: 2,
          }}
        >
          <Typography variant="h5" fontWeight="bold">
            All Students
          </Typography>
        </Box>

        <List sx={{ width: "100%" }}>

          {/* Header */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              px: 2,
              py: 1,
              fontWeight: "bold",
              color: "gray",
            }}
          >
            <Box sx={{ width: "35%" }}>Name</Box>
            <Box sx={{ width: "25%" }}>Email</Box>
            <Box sx={{ width: "15%" }}>Class</Box>
            <Box sx={{ width: "15%" }}>Section</Box>
            <Box sx={{ width: "10%" }}>Action</Box>
          </Box>


          {data?.map((student) => (

            <ListItem
              key={student._id}
              sx={{
                display: "flex",
                alignItems: "center",
                py: 2,
                borderBottom: "1px solid #eee",
              }}
            >

              {/* Name */}
              <Box
                sx={{
                  width: "35%",
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                }}
              >

                <Avatar sx={{ bgcolor: "#1976d2" }}>
                  <PersonIcon />
                </Avatar>

                <Box>
                  <Typography fontWeight="bold">
                    {student.firstname}
                  </Typography>

                  <Typography variant="body2" color="gray">
                    Grade {student.studentclass}
                  </Typography>
                </Box>

              </Box>


              {/* Email */}
              <Box sx={{ width: "25%" }}>
                <Typography variant="body2">
                  {student.email}
                </Typography>
              </Box>


              {/* Class */}
              <Box sx={{ width: "15%" }}>
                <Typography>
                  {student.studentclass}
                </Typography>
              </Box>


              {/* Section */}
              <Box sx={{ width: "15%" }}>
                <Typography>
                  {student.section}
                </Typography>
              </Box>


              {/* Action */}
              <Box sx={{ width: "10%" }}>

                <IconButton
                  color="primary"
                  onClick={() => handleEdit(student._id)}
                >
                  <EditIcon />
                </IconButton>


                <IconButton
                  color="error"
                  onClick={() => handleDelete(student._id)}
                >
                  <DeleteIcon />
                </IconButton>

              </Box>


            </ListItem>

          ))}

        </List>
      </Paper>
    </Container>
  );

}

export default studentlist