import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import styled from 'styled-components';
import { Divider, Grid, Paper } from "@material-ui/core";
import { positions } from '@material-ui/system';

const useStyles = makeStyles((theme) => ({
  root: {
    width: 250,
    height: 450,
    opacity: 0.7,
    '&:hover' : {
      cursor: 'pointer',
      opacity: 1,
    }
  },
  media: {
    height: 280,
    padding: '10px 0',
    objectFit: 'cover'
  },
}));

export default function Review({wine, onWatchClick}) {
  const classes = useStyles();

  const handleWatchClick = (e) => {
    e.preventDefault();
    onWatchClick(wine);
  }



  return (
    <Paper style={{ padding: "40px 20px", marginTop: 10, position: 'right' }}>
        <Grid container wrap="nowrap" spacing={2}>

          <Grid justifyContent="left" item xs zeroMinWidth>
            <h4 style={{ margin: 0, textAlign: "left" }}>Michel Michel</h4>
            <p style={{ textAlign: "left" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              luctus ut est sed faucibus. Duis bibendum ac ex vehicula laoreet.
              Suspendisse congue vulputate lobortis. Pellentesque at interdum
              tortor. Quisque arcu quam, malesuada vel mauris et, posuere
              sagittis ipsum. Aliquam ultricies a ligula nec faucibus. In elit
              metus, efficitur lobortis nisi quis, molestie porttitor metus.
              Pellentesque et neque risus. Aliquam vulputate, mauris vitae
              tincidunt interdum, mauris mi vehicula urna, nec feugiat quam
              lectus vitae ex.{" "}
            </p>
     
          </Grid>
        </Grid>
      </Paper>
  );
}