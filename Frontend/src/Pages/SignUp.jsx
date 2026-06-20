
import { Box, Container, FormControl, Typography, TextField, Button } from '@mui/material'
import React, { useState } from 'react'
import Login from './Login'
import { useNavigate } from 'react-router-dom'

const SignUp = () => {

  const [signUp, setsignUp] = useState({
    username: "",
    email: "",
    password: "",
  })

  const navigate = useNavigate();

  const onhandleinput = (event, stateName) => {
    setsignUp((pervstate) => ({ ...pervstate, [stateName]: event.target.value }));

  }
  const onFormSumbit = async (e) => {
    e.preventDefault();
    try {
      const resp = await fetch("http://localhost:3000/api/auth/Sign-Account",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(signUp),
        }
      )
      const testing = await resp.json()
      console.log(testing);

      if (resp.ok) {
        console.log("Success:", testing);
        navigate("/login");

      }

    } catch (error) {

    }


  };

  return (
    <Container sx={{
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }}>
      <Box sx={{
        width: 400,
        bgcolor: "#fff",
        p: 4,
        borderRadius: 3,
        display: "flex",
        boxShadow: "0px 8px 30px rgba(0,0,0,0.15)",
        flexDirection: "column",
        gap: 3

      }}>

        <Typography variant='h4' color='primary' fontWeight="bold" align='center' >Sign up</Typography>

        <form action="" method="post" onSubmit={onFormSumbit}>
          <FormControl
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 3,
            }}>

            <TextField onChange={(event) => { onhandleinput(event, 'username') }}
              label="Username"
              type="text"
              fullWidth
              variant="outlined"
            />
            <TextField onChange={(event) => { onhandleinput(event, 'email') }}
              label="Email"
              type="email"
              fullWidth
              variant="outlined"
            />

            <TextField onChange={(event) => { onhandleinput(event, 'password') }}
              label="Password"
              type="password"
              fullWidth
              variant="outlined"
            />
            <Button type='submit'
              variant="contained"
              size="large"
              sx={{
                py: 1.5,
                borderRadius: 2,
                fontWeight: "bold",
              }}
            >
              Sign up
            </Button>

          </FormControl>
        </form>

      </Box>
    </Container>
  )
}

export default SignUp