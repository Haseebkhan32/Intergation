import {
  Container,
  Grid,
  TextField,
  Button,
  Typography,
  Paper,
} from "@mui/material";
import { useState } from "react";

const StudentForm = () => {
  const [addStudent, setaddStudent] = useState();

  const onhandleinput = (event, stateName) => {
    console.log(addStudent);

    setaddStudent((pervstate) => ({
      ...pervstate,
      [stateName]: event.target.value,
    }));
  };

  const onFormSumbit = async (e) => {
    e.preventDefault();
    try {
      const resp = await fetch("http://localhost:3000/api/auth//add-student", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(addStudent),
      });
      const testing = await resp.json();
      console.log(testing);

      if (resp.ok) {
        console.log("Success:", testing);
        // navigate("/login");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h5" gutterBottom>
          Student Registration Form
        </Typography>
        <form onSubmit={onFormSumbit}>
          <Grid container spacing={2}>
            {/* Row 1 */}
            <Grid item xs={12} sm={6} md={3}>
              <TextField
                onChange={(event) => {
                  onhandleinput(event, "firstname");
                }}
                fullWidth
                label="First Name"
              />
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <TextField
                onChange={(event) => {
                  onhandleinput(event, "age");
                }}
                fullWidth
                label="Age"
                type="number"
              />
            </Grid>

            {/* Row 2 */}
            <Grid item xs={12} sm={6} md={3}>
              <TextField
                onChange={(event) => {
                  onhandleinput(event, "email");
                }}
                fullWidth
                label="Email"
              />
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <TextField
                onChange={(event) => {
                  onhandleinput(event, "phonenumber");
                }}
                fullWidth
                label="Phone Number"
              />
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <TextField
                onChange={(event) => {
                  onhandleinput(event, "studentclass");
                }}
                fullWidth
                label="studentclass"
              />
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <TextField
                onChange={(event) => {
                  onhandleinput(event, "section");
                }}
                fullWidth
                label="Section"
              />
            </Grid>

            {/* Row 3 */}
            <Grid item xs={12} sm={6} md={3}>
              <TextField
                onChange={(event) => {
                  onhandleinput(event, "fathername");
                }}
                fullWidth
                label="Father Name"
              />
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <TextField
                onChange={(event) => {
                  onhandleinput(event, "address");
                }}
                fullWidth
                label="Address"
              />
            </Grid>

            {/* Buttons */}
            <Grid item xs={12}>
              <Button variant="contained" color="primary" sx={{ mr: 2 }}>
                Submit
              </Button>

              <Button variant="outlined" color="secondary">
                Reset
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default StudentForm;
