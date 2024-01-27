import React from 'react';
import styled from 'styled-components';
import colorByType from '../../../constants';

const StyledCard = styled.div`
    width: 18rem;
    height: 26rem;
    border: 3px solid black;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const StyledImage = styled.img`
    width: 13rem;
    margin-top: 1rem;
    border: 1px solid black;
    background-color: lightgray;
`;

const PokemonTypesDiv = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 20px;
    padding: 0 1rem;
`
const SingleTypeDiv = styled.div`
    width: 7rem;
    height: 3rem;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
`
const Card = (props) => {
    const {openPokemonStats, ...restProps} = props;
    return (
        <StyledCard onClick={() => openPokemonStats(restProps)}>
            <StyledImage
              src={props.imageSrc}
              alt={props.pokemonName}
              />
            <h3 style={{marginTop: "1rem"}}>{props.pokemonName}</h3>
            <PokemonTypesDiv>
                {
                props.types.map((el, index) => 
                    <SingleTypeDiv key={index} style={{backgroundColor: colorByType[el.type.name]}}>{el.type.name.charAt(0).toUpperCase() + el.type.name.slice(1)}</SingleTypeDiv>
                )
                }
            </PokemonTypesDiv>
        </StyledCard>
    );
};

export default Card;