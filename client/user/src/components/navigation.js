import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

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
          <NavLink to="/signin">
              <Button color="inherit">Sign In</Button>
          </NavLink>
        </Toolbar>
      </AppBar>
    </div>
  );
}

const NavLink = styled(Link)`
    text-decoration: inherit;
`;
