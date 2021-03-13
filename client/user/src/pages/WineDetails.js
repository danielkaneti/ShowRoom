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
import { reviewsURL } from '../api/reviews';
import { getWineURL, productsURL } from '../api/wine';
import Review from '../components/Review';
import { TextField } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, useHistory } from 'react-router';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: '100%',
    borderRadius: '0',
    paddingTop :'0%'
  },
  media: {
    height: 0,
    paddingTop: '100%', // 16:9
    objectFit: 'contain'
  },

}));

const WineDetails = () => {

  const classes = useStyles();

  const [reviewInput, setReviewInput] = useState('');
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:2222/reviews").then(resp => setReviews(resp.data))}, []);

  const userLogged = useSelector(state => state.user.user);

  const location = useLocation();
  const wineId = decodeURI(location.pathname.split("/")[2]);

  const [wineDetails, setWineDetails] = useState({
     image_url: '',
     title: 'loading',
     genre: '',
     year: 0,
     description: ''
  });

    useEffect(() => {
      async function doSomething() {
        const wine = await axios.get(getWineURL(wineId));
        setWineDetails(wine.data);
      }

      doSomething();
    }, []);


     
      const onSubmit = (e) => {

        e.preventDefault();
       
        axios.post(
          reviewsURL(),
          {
            reviewContent: reviewInput,
            products: { _id: wineId },
            users: { _id: userLogged._id },
          })
          .then((response) => {
           
            return response.data
            

          })
          console.log(reviewInput)
          this.forceUpdate();
          setReviewInput("");
        
     
       
      }
         
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
      <form className={classes.form} noValidate onSubmit={onSubmit}>
      <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="Reviews"
            label="Leave a review.."
            name="Review"
            autoFocus
            onChange={(event)=>{setReviewInput(event.target.value);}}
            value={reviewInput}
          />
        <Button>Submit</Button>
         
      </form>
      <div>
      {reviews.map(review => (
        <Review review={review}/>
       ))}
      </div>
              

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

const TextArea = styled.textarea`
  width: 98%;
  height: 100px;
  border-radius: 10px;
  margin-top: 10px;
  padding-left: 10px;
  padding-top: 10px;
  font-size: 17px;
  background-color: transparent;
  border: 1px solid black;
  outline: none;
  color: black;
  letter-spacing: 1px;
  line-height: 20px;
  ::placeholder {
    color: black;
  }
`;

const Button = styled.button`
  background-color: black;
  width: 100%;
  border: none;
  height: 50px;
  border-radius: 10px;
  color: white;
  font-size: 17px;
`;

const Form = styled.form`
  width: 400px;
`;

export default WineDetails;
