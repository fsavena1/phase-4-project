import 'bootstrap/dist/css/bootstrap.min.css'
import React, { useEffect, useState } from 'react'
import NftContainer from './components/NftContainer'
import { Route, Routes } from "react-router-dom";
import NftDetails from './components/NftDetails'
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
      <Routes>
        <Route exact path="/" element={<NftContainer nfts={nfts} />} />
        <Route exact path="nft/:id" element={<NftDetails />} />
      </Routes>
    </div>
  );
}

export default App;

// hello