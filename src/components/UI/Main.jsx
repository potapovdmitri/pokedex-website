import React, { useState } from 'react';
import PokemonList from './content/PokemonList';
import styled from 'styled-components';
import BigCard from './content/BigCard';

const MainSection = styled.main`
  padding: 0 2rem;
  display: flex;
  margin-top: 2rem;
`

const Main = () => {
    const [bigCardData, setBigCardData] = useState({})
    return (
        <MainSection>
            <PokemonList setBigCardData={setBigCardData}/>
            <BigCard details={bigCardData}/>
        </MainSection>
    );
};

export default Main;