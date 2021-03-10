import React, { useEffect, useState } from 'react';
import { Component } from 'react';
import { Container} from '../components/GeneralStyle';
import WineCard from '../components/WineCard';
import {wineList} from '../data';
import styled from 'styled-components';
import axios from 'axios';

  

const Catalog = () => {

    const [products, setProducts] = useState([]);
    
    useEffect(() => {
        axios.get("http://localhost:2222/products").then(resp => setProducts(resp.data))}, []);

    return(
        
        <Container>
            <Grid>
                {products.map(wine => (
                    <WineCard wine={wine}/>
                ))}
            </Grid>
        </Container>
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

export default Catalog;