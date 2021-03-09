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

const useStyles = makeStyles((theme) => ({
  root: {
    width: 250,
    height: 350,
  },
  media: {
    height: 0,
    paddingTop: '100%', // 16:9
  },
  avatar: {
    backgroundColor: red[500],
    color: 'black',
  },
}));

export default function WineCard({wine, onWatchClick}) {
  const classes = useStyles();

  const handleWatchClick = (e) => {
    e.preventDefault();
    onWatchClick(wine);
  }

  const {title, type, image} = wine;

  return (
    <Card className={classes.root}>
      <CardHeader

        title={title}
        subheader={type}
      />
      <CardMedia
        className={classes.media}
        image={image}
        title="Paella dish"
      />
      {/* <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          This is a template
        </Typography>
      </CardContent> */}

        <div size="small" color="inherit" onClick={handleWatchClick}>
          Detailes
        </div>

      <CardActions disableSpacing>

      </CardActions>
    </Card>
  );
}