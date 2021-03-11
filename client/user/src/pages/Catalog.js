import React, { useEffect, useState } from 'react';
import { Component } from 'react';
import { Container} from '../components/GeneralStyle';
import WineCard from '../components/WineCard';
import {wineList} from '../data';
import styled from 'styled-components';
import axios from 'axios';
import {Link} from 'react-router-dom';
import {productsURL} from '../api/wine';


const Catalog = () => {

    const [products, setProducts] = useState([]);
    
    useEffect(() => {
        axios.get(productsURL())
        .then(resp => setProducts(resp.data))
    }, []);

    return(
        <Backgroung>
            <Container>
                <Grid>
                    {products.map(wine => (
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

export default Catalog;