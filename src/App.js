import React, { useState } from "react";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CardAdded from "./components/CardAdded";
import DetailsComponent from "./components/DetailsComponent";
import { Toaster ,toast} from "react-hot-toast";

const App = () => {
  const [catchList, setCatchList] = useState({});

  const [selectedPokemon, setSelectedPokemon] = useState();

  const handleAddtocard = (pokemon) => {
    const newCatchList = { ...catchList, [pokemon.id]: pokemon };
    setCatchList(newCatchList);
  toast.success("Card added successfully")
  };

  const handleDelete = (id) => {
    const newCatchList = { ...catchList };
    delete newCatchList[id];
    setCatchList(newCatchList);
    toast.success("Card deleted successfully")
  };
 

  return ( 
    <BrowserRouter>
    <Toaster/>
      <Navbar />
      <Routes> 
        <Route path="/" element={<Home  setSelectedPokemon={setSelectedPokemon} />} />
        <Route path="/details" element={<DetailsComponent selectedPokemon={selectedPokemon}  addCard={handleAddtocard} />} />
        <Route path="/cardadded" element={<CardAdded catchList={catchList} onDelete={handleDelete} />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;

