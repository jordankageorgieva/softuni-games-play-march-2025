import { useState } from 'react';
import './App.css';

import CataloguePage from './components/catalogue-page/CataloguePage';
import CreatePage from './components/create-page/CreatePage';
import DetailsPage from './components/details-page/DetailsPage';
import GameEdit from './components/game-edit/GameEdit';
import Header from './components/header/Header';
import Home from './components/home/Home';
import LoginPage from './components/login-page/LoginPage';
import RegisterPage from './components/register-page/RegisterPage';
import { Routes, Route } from 'react-router';
import { UserContext } from './hookContext/userContext';

function App() {

  const [authData, setAuthData] = useState({});

  const putLoginActionData = (authData) => {
    setAuthData(authData);
  }

  return (
    <>
      <UserContext.Provider value={{...authData, putLoginActionData} }>
        <div id="box">
          <Header />

          {/* <!-- Main Content --> */}
          <main id="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<LoginPage onLogin={putLoginActionData} />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/games/create" element={<CreatePage />} />
              <Route path="/games" element={<CataloguePage />} />
              <Route path="/games/:gameId/game-edit" element={<GameEdit />} />
              <Route path="/games/:gameId/game-details" element={<DetailsPage email={authData.email} />} />
            </Routes>
          </main>
          {/* <GameEdit />
          <DetailsPage /> */}
        </div>
      </UserContext.Provider>
    </>
  )
}

export default App
