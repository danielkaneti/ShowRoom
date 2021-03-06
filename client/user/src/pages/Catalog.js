import React, { useEffect, useState } from 'react';
import { Component } from 'react';
import { Container} from '../components/GeneralStyle';
import WineCard from '../components/WineCard';
import {wineList} from '../data';
import styled from 'styled-components';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';

import {Link} from 'react-router-dom';
import {productsURL, searchedProductURL} from '../api/wine';
import SearchInput from '../components/SearchInput';
import { loadSearchedProduct } from '../redux/actions/productActions';



const Catalog = () => {

    //const [products, setProducts] = useState([]);
    const [titleInput, setTitleInput] = useState("");
    const [genreInput, setGenreInput] = useState("");
    const [yearInput, setYearInput] = useState("");
    const dispatch = useDispatch();
    const searchedProducts = useSelector(state => state.product.searchedProducts);
    const handleTitleInput = (e) => {
        setTitleInput(e.target.value)
      };
    
      const handleGenreInput = (e) => {
        setGenreInput(e.target.value)
      };
    
      const handleYearInput = (e) => {
        setYearInput(e.target.value)
      };
    // useEffect(() => {
    //     axios.get(productsURL())
    //     .then(resp => setProducts(resp.data))
    // }, []);
    
   
    useEffect(() => {
        dispatch(loadSearchedProduct(titleInput, genreInput, yearInput));
      }, [titleInput, genreInput, yearInput])

    return(

        
        <Backgroung>
            <StyledSearchDiv>
                <SearchInput placeholder="Title" onChange={handleTitleInput} />
                <SearchInput placeholder="Grape type" onChange={handleGenreInput} />
                <SearchInput placeholder="Year" onChange={handleYearInput} />
            </StyledSearchDiv>
            <Container>
                <Grid>
                
                    {searchedProducts.map(wine => (
                        <NavLink to={`/catalog/${wine._id}`}>
                            <WineCard wine={wine}/>
                        </NavLink>
                    ))}
                </Grid>
            </Container>
        </Backgroung>
   
    );
}


const Grid = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  margin-left: 110px;
  grid-column-gap: 20px;
  grid-row-gap: 20px;
`;

const Backgroung = styled.div`
    background: #d9d9d9;
`;

const NavLink = styled(Link)`
    text-decoration: none;
`;


const StyledSearchDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #d9d9d9;
  padding: 3rem;
  margin-bottom: 2rem;
`;

export default Catalog;
