import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

function App() {
  return (
    <div>
      <Navbar brand="Morioh Manga"/>
      <ItemListContainer greeting={"Bienvenidos a mi tienda!"}/>
    </div>
  );
}

export default App;
