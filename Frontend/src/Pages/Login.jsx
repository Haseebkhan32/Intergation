import React, { useState } from 'react'
import { Container, Box, TextField, Button, Typography, FormControl } from '@mui/material';
import { flex, height } from '@mui/system';
import { Link } from 'react-router-dom';


const Login = () => {

    const [loginform, setloginform] = useState({
        email: '',
        password: '',
    })


    const onhandleinput = (event, stateName) => {
        setloginform((pervstate) => ({ ...pervstate, [stateName]: event.target.value }))

    }

    const onFormSumbit = async (event) => {
        event.preventDefault();

        try {
            const resp = await fetch('http://localhost:3000/api/auth/login-Account', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: loginform.email,
                    password: loginform.password
                })
            });

            const data = await resp.json();
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <Container

            sx={{
                height: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",

            }}
        >
            <></>
            <Box
                sx={{
                    width: 400,
                    bgcolor: "#fff",
                    p: 4,
                    borderRadius: 3,
                    boxShadow: "0px 8px 30px rgba(0,0,0,0.15)",
                    display: "flex",
                    flexDirection: "column",
                    gap: 3,
                }}
            >
                <Typography
                    variant="h4"
                    fontWeight="bold"
                    color="primary"

                >
                    Login
                </Typography>

                <form onSubmit={onFormSumbit}>
                    <FormControl
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            gap: 3,
                        }}>

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
                            Login
                        </Button>

                    </FormControl>
                </form>



                <Typography variant="body2" >
                    Don't have an account?{""}
                    <Link
                        to="/"
                        style={{
                            color: "#1976d2",
                            textDecoration: "none",
                            fontWeight: "bold",
                        }}
                    >
                        Sign Up
                    </Link>

                </Typography>
            </Box>
        </Container>
    )
}

export default Login

