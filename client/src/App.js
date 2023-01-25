import 'bootstrap/dist/css/bootstrap.min.css'
import React, { useEffect, useState } from 'react'
import { Route, Routes } from "react-router-dom";
import NftContainer from './components/NftContainer'
import NftDetails from './components/NftDetails'
import NavBar from './components/NavBar'
import ProfilePage from './components/ProfilePage'
import LoginPage from './components/LoginPage';
import SignUpPage from './components/SignUpPage';
import CreateListing from './components/CreateListing';
import NftEdit from './components/NftEdit';

// import NavBar from './components/NavBar'
// import { Route, Routes } from "react-router-dom";

function App() {

  const [nfts, setNfts] = useState([])
  const [user, setUser] = useState(null)
  const [reviews, setReviews] = useState([])
  const [loading, setLoading] = useState(true)
  const [errors, setErrors] = useState('')

  
  useEffect(() => {
    fetch("/auth").then((response) => {
      if (response.ok) {
        response.json().then((user) => {
          setUser(user)
          setLoading(false)
        });
      }
    });
  }, []);

  useEffect(() => {
    fetch("/nfts")
      .then((res) => {
        if (res.ok) {
          res.json().then(data => {
            setNfts(data);
            setLoading(false);
          })
        } else {
          res.json().then(data => setErrors(data.error))
        }
      })
  }, []);

  useEffect(() => {
    fetch("/reviews")
      .then((res) => {
        if (res.ok) {
          res.json().then(data => {
            setReviews(data);
            setLoading(false);
          })
        } else {
          res.json().then(data => setErrors(data.error))
        }
      })
  }, []);

  function addReview(newRev) {
    setReviews([...reviews, newRev])
  }

  function handleLogin(user){
    setUser(user)
  }

  function handleNftListing(newNft) {
    setNfts([...nfts, newNft])
  }

  function handleNftEdit(updatedNft) {
    const newNftArr = nfts.map((nft) => {
      if (nft.id === updatedNft.id) {
        return updatedNft;
      }
      return nft;
    });
    setNfts(newNftArr);
  }

  function handleUpdatedNft(updatedNft) {
    handleNftEdit(updatedNft);
  }

  function deleteNft(id) {
    const updatedNfts = nfts.filter((nft) => nft.id !== id);
    setNfts(updatedNfts);
  }

  if (loading) return <h1>Loading...</h1>

  return (
    <div className="App">
      <NavBar nfts={nfts} user={user} setUser={setUser}/>
      <Routes>
        <Route exact path='/' element={<LoginPage onLogin={handleLogin}/>} />
        <Route exact path='/create' element={<CreateListing user={user} handleNftListing={handleNftListing}/>} />
        <Route exact path='/signup' element={<SignUpPage />} />
        <Route exact path="/nfts" element={<NftContainer nfts={nfts} user={user} loading={loading}/>} />
        <Route exact path="nft/:id" element={<NftDetails addReview={addReview} user={user} nfts={nfts} reviews={reviews}/>} />
        <Route exact path="nft/:id/edit" element={<NftEdit handleUpdatedNft={handleUpdatedNft} deleteNft={deleteNft}/>} />
        <Route exact path="user/:id" element={<ProfilePage user={user} loading={loading}/>} />
      </Routes>
    </div>
  );
}

export default App;

// hello