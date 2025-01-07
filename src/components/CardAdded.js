import React, { useEffect, useState } from "react";
import "./CardAdded.css";

const CardAdded = ({ catchList, onDelete }) => {

  const pokemonArray = Object.values(catchList);
  console.log(pokemonArray)

  const [catchItem, setCatchItem] = useState([]);

  useEffect(() => {
    if (pokemonArray.length >= 0) {
      localStorage.setItem("catchList", JSON.stringify(pokemonArray));
      setCatchItem(pokemonArray);
    } else {
      const savedPokemon = localStorage.getItem("catchList");
      if (savedPokemon) {
        setCatchItem(JSON.parse(savedPokemon));
      }
    }
  }, [pokemonArray.length]);

  return (
    <>
      <div
        className="card-items"
        style={{
          backgroundImage: `url("https://wallpapercave.com/wp/c2s0SHH.jpg")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h1 className="heading">Added Pokémon</h1>
        <div className="card-container">
          {
            catchItem.length === 0 ? (
            <p className="p1">No Pokémon added yet!</p>
          ) : (
            catchItem.map((pokemon) => (
              <div className="card-item" key={pokemon.id}>
                <img
                  src={
                    pokemon.sprites?.other.dream_world.front_default ||
                    "https://via.placeholder.com/150"
                  }
                  alt={pokemon.name}
                />
                <div className="paragraph">
                  <p><b>POKEMON NAME:</b> {pokemon.name}</p>
                  <p><b>Base Experience:</b> {pokemon.base_experience}</p>
                  <p><b>Ability:</b> {pokemon.abilities[0].ability.name}</p>
                  <p><b>Version:</b> {pokemon.game_indices[0].version.name}</p>
                  <p><b>Moves:</b> {pokemon.moves[0].move.name}</p>
                  <p><b>Types:</b> {pokemon.types[0].type.name}</p>
                  <p><b>Pokemon Height:</b> {pokemon.height}</p>
                  <p><b>Pokemon Weight:</b> {pokemon.weight}</p>
                </div>
                <button onClick={() => onDelete(pokemon.id)}>Delete</button>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default CardAdded;


