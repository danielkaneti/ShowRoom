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
    fontSize: '16px'
  },
  media: {
    height: 280,
    paddingTop: '100%', // 16:9
    objectFit: 'contain'
  },
}));

export default function WineCard({wine, onWatchClick}) {
  const classes = useStyles();

  const handleWatchClick = (e) => {
    e.preventDefault();
    onWatchClick(wine);
  }

  const {title, genre, image_url} = wine;

  return (
    <Card className={classes.root}>
      <CardHeader

        title={title}
        subheader={genre}
      />
      <CardMedia
        className={classes.media}
        image={image_url}
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