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
import Review from '../components/Review';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: '100%',
    borderRadius: '0',
  },
  media: {
    height: 0,
    paddingTop: '100%', // 16:9
    objectFit: 'contain'
  },
}));

const WineDetails = () => {

  const classes = useStyles();
  const location = useLocation();
  const wineId = decodeURI(location.pathname.split("/")[2]);

  const [wineDetails, setWineDetails] = useState({
     image_url: '',
     title: 'loading',
     genre: '',
     year: 0,
     description: ''
  });
  
    console.log(wineId);

    useEffect(() => {
      async function doSomething() {
        const wine = await axios.get(getWineURL(wineId));
        setWineDetails(wine.data);
      }

      doSomething();
    }, []);

  return (
      
    <Container>
      <SplitLeft>
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
      </SplitLeft>
      <SplitRight>
        <Review />
        <Review />
        <Review />
        <Review />
      </SplitRight>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  display: flex;
`;

const SplitLeft = styled.div`
  width: 50%;
`;

const SplitRight = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align items: center;
  justify-content: center;
  padding: 1rem;
`;

export default WineDetails;
