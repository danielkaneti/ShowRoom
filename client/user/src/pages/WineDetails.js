import React, { useEffect, useState } from 'react';
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
import { useLocation } from 'react-router';
import axios from 'axios';
import { getWineURL, productsURL } from '../api/wine';

const useStyles = makeStyles((theme) => ({
  root: {
    width: 750,
    height: 900,

    
  },
  media: {
    height: 0,
    paddingTop: '100%', // 16:9
    objectFit: 'cover'
  },
}));

const styles = 
{

media: {
  height: 0,
  paddingTop: '100%', // 16:9,
  marginTop:'0'
}
  };

const WineDetails = () => {

   const [wineDetails, setWineDetails] = useState({
     image_url: '',
     title: 'loading',
     genre: '',
     year: 0,
     description: ''
   });



    const classes = useStyles();

    const location = useLocation();
    const wineId = decodeURI(location.pathname.split("/")[2]);
  
    console.log(wineId);

    useEffect(() => {
      async function doSomething() {
        const wine = await axios.get(getWineURL(wineId));
        setWineDetails(wine.data);
      }

      doSomething();
    }, []);

  return (
      
    <Card className={classes.root}>
      <CardHeader
        title={wineDetails.title}
        subheader={wineDetails.genre}

      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {wineDetails.description}
        </Typography>
      </CardContent>
      <CardMedia
        className={classes.media}
        image={wineDetails.image_url}
      />
    </Card>

    
  );
}

export default WineDetails;