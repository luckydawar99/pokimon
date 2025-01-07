import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./DetailsComponent.css";
import { MdOutlineAddShoppingCart } from "react-icons/md";

const DetailsComponent = ({ selectedPokemon, addCard }) => {
  const [selet, setSelect] = useState({});

  useEffect(() => {
    if (selectedPokemon) {
      localStorage.setItem("selectedPokemon", JSON.stringify(selectedPokemon));
      setSelect(selectedPokemon);
    } else {
      const savedPokemon = localStorage.getItem("selectedPokemon");
      if (savedPokemon) {
        setSelect(JSON.parse(savedPokemon));
      }
    }
  }, [selectedPokemon]);

  return (
    <>
      <h1 key={selet?.base_experience} className="heading1">
        {selet?.name}
      </h1>
      <div className="container">
        {
      selet ? (
          <div className="items" key={selet?.id}>
            <div className="content">
              <div className="images-contener">
                <div className="firstimage-container">
                  <img
                    className="imgf"
                    src={
                      selet?.sprites?.other?.dream_world?.front_default ||
                      "https://via.placeholder.com/150"
                    }
                    alt={selet?.name}
                  />

                  <img
                    className="imgf"
                    src={
                      selet?.sprites?.other?.home?.front_default ||
                      "https://via.placeholder.com/150"
                    }
                    alt={selet?.name}
                  />

                  <img
                    className="imgf"
                    src={
                      selet?.sprites?.other?.home?.front_shiny ||
                      "https://via.placeholder.com/150"
                    }
                    alt={selet?.name}
                  />
                </div>
                <div className="secondImage__container">
                  <img
                    className="imgs"
                    src={
                      selet?.sprites?.other?.showdown?.front_default ||
                      "https://via.placeholder.com/150"
                    }
                    alt={selet?.name}
                  />
                  <div className="card-buttons">
                    <Link className="linkback" to={"/"}>
                      BACK
                    </Link>
                    <button className="btn" onClick={() => addCard(selet)}>
                      Add <MdOutlineAddShoppingCart />
                    </button>
                  </div>
                </div>
              </div>
              <div className="card-details">
                <div className="cd1">
                  <p>
                    <b>POKEMON NAME:</b> {selet?.name}
                  </p>
                  <p>
                    <b>Base Experience: </b>
                    {selet?.base_experience}
                  </p>
                  <p>
                    <b>Moves:</b> {selet?.moves?.[0]?.move?.name}
                  </p>
                  <p>
                    <b>Moves1:</b> {selet?.moves?.[1]?.move?.name}
                  </p>
                  <p>
                    <b>Moves2:</b>{" "}
                    {
                      selet?.moves?.[1]?.version_group_details?.[1]
                        ?.version_group?.name
                    }
                  </p>
                  <p>
                    <b>Moves3:</b> {selet?.moves?.[2]?.move?.name}
                  </p>
                  <p>
                    <b>Moves4:</b> {selet?.moves?.[3]?.move?.name}
                  </p>
                  <p>
                    <b>Pokemon Height:</b> {selet?.height}
                  </p>
                   <p>
                    <b>Pokemon Weight:</b> {selet?.weight}
                  </p>
                </div>

                <div className="cd2">
                 
                  <p>
                    <b>Ability:</b> {selet?.abilities?.[0]?.ability?.name}
                  </p>
                  <p>
                    <b>Ability:</b> {selet?.abilities?.[1]?.ability?.name}
                  </p>
                  <p>
                    <b>Version: </b> {selet?.game_indices?.[0]?.version?.name}
                  </p>
                  <p>
                    <b>Types: </b> {selet?.types?.[0]?.type?.name}
                  </p>
                  <p>
                    <b>Types1: </b> {selet?.types?.[1]?.type?.name}
                  </p>
                  <p>
                    <b>Stats: </b> {selet?.stats?.[0]?.stat?.name}
                  </p>
                  <p>
                    <b>Stats: </b> {selet?.stats?.[1]?.stat?.name}
                  </p>
                  <p>
                    <b>Stats: </b> {selet?.stats?.[2]?.stat?.name}
                  </p>
                  <p>
                    <b>Stats: </b> {selet?.stats?.[3]?.stat?.name}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <p className="p2">No Pokémon selected!</p>
        )
          }
      </div>
    </>
  );
};

export default DetailsComponent;
