import React from 'react';
import { Component } from 'react';
import { Container} from '../components/GeneralStyle';
import WineCard from '../components/WineCard';
import {wineList} from '../data';
import styled from 'styled-components';

const Catalog = () => {

    return(
        <Container>
            <Grid>
                {wineList.map(wine => (
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