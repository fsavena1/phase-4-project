import 'bootstrap/dist/css/bootstrap.min.css'
import React, { useEffect, useState } from 'react'
import { Route, Routes } from "react-router-dom";
import NftContainer from './components/NftContainer'
import NftDetails from './components/NftDetails'
import NavBar from './components/NavBar'
import ProfilePage from './components/ProfilePage'
import LoginPage from './components/LoginPage';
import SignUpPage from './components/SignUpPage';

// import NavBar from './components/NavBar'
// import { Route, Routes } from "react-router-dom";

function App() {

  const [nfts, setNfts] = useState([])
  const [user, setUser] = useState(null)
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

  console.log(user)

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

  console.log(errors)

  function handleLogin(user){
    setUser(user)
  }

  if (loading) return <h1>Loading...</h1>

  return (
    <div className="App">
      <NavBar nfts={nfts} user={user}/>
      <Routes>
        <Route exact path='/' element={<LoginPage onLogin={handleLogin}/>} />
        <Route exact path='/signup' element={<SignUpPage />} />
        <Route exact path="/nfts" element={<NftContainer nfts={nfts} user={user} loading={loading}/>} />
        <Route exact path="nft/:id" element={<NftDetails />} />
        <Route exact path="user/:id" element={<ProfilePage />} />
      </Routes>
    </div>
  );
}

export default App;

// hello