import React, { useEffect, useState } from 'react'
import NftContainer from './components/NftContainer'
// import NavBar from './components/NavBar'
// import { Route, Routes } from "react-router-dom";

function App() {

  const [nfts, setNfts] = useState([])

  useEffect(() => {
    fetch("/nfts")
      .then((res) => res.json())
      .then((data) => setNfts(data));
  }, []);




  return (
    <div className="App">
      <NftContainer nfts={nfts} />


    </div>
  );
}

export default App;

// hello