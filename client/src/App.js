import 'bootstrap/dist/css/bootstrap.min.css'
import React, { useEffect, useState } from 'react'
import { Route, Routes } from "react-router-dom";
import NftContainer from './components/NftContainer'
import NftDetails from './components/NftDetails'
import NavBar from './components/NavBar'
import ProfilePage from './components/ProfilePage'
import LoginPage from './components/LoginPage';

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
      <NavBar nfts={nfts}/>
      <Routes>
        <Route exact path='/' element={<LoginPage />} />
        <Route exact path="/nfts" element={<NftContainer nfts={nfts} />} />
        <Route exact path="nft/:id" element={<NftDetails />} />
        <Route exact path="user/:id" element={<ProfilePage />} />
      </Routes>
    </div>
  );
}

export default App;

// hello