import { Box, Button, TextField, Link, Typography } from '@mui/material';
import React from 'react';
import Background from "../icons/background.jpg";
import Logo from "../icons/logo.svg";
import { useFormik } from 'formik';
import { string, object } from 'yup';
import { LoginError } from '../components';

const Login = () => {
  const {values, handleChange, handleSubmit, handleBlur, errors, isSubmitting, touched} = useFormik({
    initialValues:{
      Username:'',
      Password:'',
    },
    onSubmit:(values,bag)=>{
      console.log(values);
      bag.resetForm();
    },
    validationSchema: object({
      Password: string().min(8)
    }),
  });

  return (
    <Box 
        className="login-form-container" 
        sx={{
            display:'flex',
            flexDirection:'row',
            height:'100vh',
        }}
    >
      <Box 
        className='login-leftside' 
        sx={{
          position:'relative',
          width:'100%',
          height:'100%',
        }}
      >
        <img src={Background} alt="Oxford Center"
          style={{
            position:'absolute',
            right:0,
            width:'100%',
            height:'100%',
          }}
        />
      </Box>
      <Box 
        className="login-rightside" 
        sx={{
            display:'flex',
            flexDirection:'column',
            width:'100%',
        }}
      >
        <Box 
          className="form-container"
          sx={{
            display:'flex',
            flexDirection:'column',
            m:'auto',
        }}
        >
        <form style={{
          display:'flex',
          flexDirection:'column',
        }}
        onSubmit={handleSubmit}>
          <Box 
            className="login-logo-container"
            sx={{
              mb:'30px',
            }}
            >
            <img src={Logo} alt="Oxford Logo" width="100%"/>
          </Box>
          <TextField 
            label="Username" id="Username" name="Username" sx={{mb:'20px',}}
            value={values.Username}
            onChange={handleChange("Username")}
            disabled={isSubmitting}
            required
          ></TextField>
          <TextField 
            type="password" label="Password" id="Password" name="Password" sx={{mb:'20px',}}
            value={values.Password}
            onChange={handleChange("Password")}
            onBlur={handleBlur("Password")}
            disabled={isSubmitting}
            required
          ></TextField>
          {errors.Password && touched.Password ? <LoginError error={errors.Password}/>:null}
          <Box
            className="login-button-group" 
            sx={{
              display:'flex',
              justifyContent:'space-between',
              alignItems:'center',
            }}>
            <Button variant='contained' color="success" sx={{width:'30px'}} type="submit">Login</Button>
            <Link to="#" sx={{cursor:'pointer',}}>Forgotten your password?</Link>
          </Box>
          <Typography sx={{mt:'20px',}}>Don't have an Oxford ID? <span style={{color:'blue',}}>Register</span> for an account</Typography>
        </form>
        </Box>
      </Box>
    </Box>
  )
}

export default Login;