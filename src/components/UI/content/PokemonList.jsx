import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Card from "./Card";
import { fetchPokemonData, fetchPokemonDetails } from "../../../API/fetching";
import MyBtn from "../materials/MyBtn";

const ListOfCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

const LeftSideBlock = styled.div`
  width: 60%;
`

const PokemonList = ({setBigCardData}) => {
  const [pokemonList, setPokemonList] = useState([]);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    (async () => {
        const newPokemonList = await fetchPokemonData(offset);
        const promises = newPokemonList.map(async (pokemon) => {
        const pokemonData = await fetchPokemonDetails(pokemon.url);
        const pokemonName = pokemonData.name.charAt(0).toUpperCase() + pokemonData.name.slice(1);
        return (
          <Card
          key={pokemonData.id}
          imageSrc={pokemonData.sprites.other.home.front_default} 
          pokemonName={pokemonName} 
          gameIndex={pokemonData.id}
          types={pokemonData.types}
          stats={pokemonData.stats}
          weight={pokemonData.weight}
          moves={pokemonData.moves.length}
          openPokemonStats={setBigCardData}
          className="pokemon-card"/>
        );
      });
      const cards = await Promise.all(promises);
      setPokemonList((prevList) => [...prevList, ...cards]);
    })().catch((err) => console.log(err));
  },[offset]);

  return (
    <LeftSideBlock className="left-side">
      <ListOfCards className="list-of-cards">
        {pokemonList.length > 0 && <>{pokemonList}</>}
      </ListOfCards>
      <MyBtn setOffset={setOffset}/>
    </LeftSideBlock>
  );
};

export default React.memo(PokemonList);
