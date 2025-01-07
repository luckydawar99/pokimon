import React, { useEffect, useState } from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";
import { GrFormNextLink } from "react-icons/gr";
import { GrFormPreviousLink } from "react-icons/gr";

const Home = ({ setSelectedPokemon }) => {
  const navigate = useNavigate();
  const [cardData, setCardData] = useState([]);
  const [totalCards, setTotalCards] = useState(0);
  
  const [currentPage, setCurrentPage] = useState(() => {
    const savedPage = localStorage.getItem("currentPage");
    return savedPage ? JSON.parse(savedPage) : 1;
  });

  const [cardsPerPage] = useState(5);
  const [pagesToShow] = useState(10);

  console.log("current page", currentPage);

  const fetchPokemonData = async (pokemonUrl) => {
    try {
      const response = await fetch(pokemonUrl);
      const data = await response.json();
      setSelectedPokemon(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const fetchPageData = async (page) => {
    const offset = (page - 1) * cardsPerPage;
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${cardsPerPage}`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      setCardData(data.results || []);
      setTotalCards(data.count);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchPageData(currentPage);
  }, [currentPage]);

  useEffect(() => {
    localStorage.setItem("currentPage", JSON.stringify(currentPage));
  }, [currentPage]);

  const handleCardClick = async (pokemon) => {
    await fetchPokemonData(pokemon.url);
    navigate("/details");
  };

  const totalPages = Math.ceil(totalCards / cardsPerPage);

  const startPage = Math.floor((currentPage - 1) / pagesToShow) * pagesToShow + 1;
  const endPage = Math.min(startPage + pagesToShow - 1, totalPages);

  const pageNumbers = [];
  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }

  return (
    <div
      className="home"
      style={{
        backgroundImage: `url("https://img.freepik.com/free-vector/realistic-samurai-illustrated-background_52683-69457.jpg?size=626&ext=jpg&ga=GA1.1.1614866781.1715597261&semt=ais_hybrid")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    > 
      <div className="cardcontainer">
        {cardData.map((pokemon, index) => (
          <div
            className="card-body"
            key={pokemon.name}
            onClick={() => handleCardClick(pokemon, index)}
          >
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
                index + 1 + (currentPage - 1) * cardsPerPage
              }.svg`}
              alt={pokemon.name}
            />
            <h2>
              {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
            </h2>
          </div>
        ))}
      </div>
      <div className="pagination">
        {currentPage > 1 && (
          <button
            className="page-number"
            onClick={() => setCurrentPage(currentPage - 1)}
          >
            <GrFormPreviousLink />
          </button>
        )}
        {pageNumbers.map((number) => (
          <button
            key={number}
            className={`page-number ${currentPage === number ? "active" : ""}`}
            onClick={() => setCurrentPage(number)}
          >
            {number}
          </button>
        ))}
        {currentPage < totalPages && (
          <button
            className="page-number"
            onClick={() => setCurrentPage(currentPage + 1)}
          >
            <GrFormNextLink />
          </button>
        )}
      </div>
    </div>
  );
};

export default Home;
