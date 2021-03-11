import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import axios from "axios";
import { Redirect, useHistory } from 'react-router';
import { useDispatch } from 'react-redux';
import { signUp } from '../redux/actions/usersActions';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    background: '#212121'
  },
}));

export default function SignUp() {
  const classes = useStyles();
  const [firstNameInput, setFirstNameInput] = useState('');
  const [lastNameInput, setLastNameInput] = useState('');
  const [usernameInput, setUsernameInput] = useState('');
  const [emailInput, setEmailInput] = useState('');
  
  const [flag, setflag] = useState(false);
  const [passwordInput, setPasswordInput] = useState('');
  const dispatch = useDispatch();
  const history = useHistory();





  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(
      signUp(
        firstNameInput,
        lastNameInput,
        usernameInput,
        emailInput,
        passwordInput,
        history
      )
    );
  }
       
       
     

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign Up
        </Typography>
        <form className={classes.form} noValidate onSubmit={onSubmit}>
        <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="UserName"
            label="User Name"
            name="UserName"
            autoComplete="userName"
            autoFocus
            onChange={(event)=>{setUsernameInput(event.target.value);}}
          />
        <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="FirstName"
            label="First Name"
            name="FirstName"
            autoComplete="FirstName"
            autoFocus
            onChange={(event)=>{setFirstNameInput(event.target.value);}}
          />
        <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="LastName"
            label="Last Name"
            name="LastName"
            autoComplete="LastName"
            autoFocus
            onChange={(event)=>{setLastNameInput(event.target.value);}}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={(event)=>{setEmailInput(event.target.value);}}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={(event)=>{setPasswordInput(event.target.value);}}
          />
    
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}