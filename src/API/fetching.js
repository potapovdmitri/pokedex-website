import axios from "axios";

const fetchPokemonData = async (offset) => {
  try {
    const response = await axios.get(
      `https://pokeapi.co/api/v2/pokemon?offset=${offset}?types="fire"&limit=12`
    );
    return response.data.results;
  } catch (error) {
    console.error("Error fetching Pokemon data:", error);
    return [];
  }
};

const fetchPokemonDetails = async (url) => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error("Error fetching Pokemon details:", error);
    return null;
  }
};

export { fetchPokemonData, fetchPokemonDetails };
