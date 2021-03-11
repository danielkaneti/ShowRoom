import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {Link, useHistory} from 'react-router-dom';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { signOut } from '../redux/actions/usersActions';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Navigation() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const isLogged = useSelector(state => state.user.isLogged);
  const user = useSelector(state => state.user.user);
  const [toggle, setToggle] = useState(false);
  const history = useHistory();

  console.log(isLogged);
  console.log(toggle);

  useEffect(() => {
    setToggle(isLogged);
  }, [isLogged])

  const signOutHandler = () => {
    if (isLogged) {
      dispatch(signOut());
      history.push("/");  
    }
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar style={{ background: '#212121' }}>
          <Typography variant="h6" className={classes.title}>
            SHOWROOM
          </Typography>
          <NavLink to="/">
              <Button color="inherit">Home</Button>
          </NavLink>
          <NavLink to="/catalog">
             <Button color="inherit">Catalog</Button>
          </NavLink>
          <NavLink to="/">
             <Button color="inherit">Chat With Us</Button>
          </NavLink>
          {toggle ?
            (
              <NavLink to="/">
                
                <Button color="inherit" onClick={signOutHandler}>Sign Out</Button>
    
                <h8>{`${user.username}`}</h8>
              </NavLink>
            ):(
              <NavLink to="/signin">
                <Button color="inherit">Sign In</Button>
              </NavLink>        
            )
          }
        </Toolbar>
      </AppBar>
    </div>
  );
}

const NavLink = styled(Link)`
    text-decoration: none;
`;
