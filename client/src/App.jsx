import './App.css';
import CataloguePage from './components/catalogue-page/CataloguePage';
import CreatePage from './components/create-page/CreatePage';
import DetailsPage from './components/details-page/DetailsPage';
import EditPage from './components/edit-page/EditPage';
import Header from './components/header/Header';
import Home from './components/home/Home';
import LoginPage from './components/login-page/LoginPage';
import RegisterPage from './components/register-page/RegisterPage';

function App() {

  return (
    <>
      <body>
        <div id="box"></div>

        <Header />

        {/* <!-- Main Content --> */}
        <main id="main-content">
        </main>
        <Home />
        <LoginPage />
        <RegisterPage />
        <CreatePage />
        <EditPage />
        <DetailsPage />
        <CataloguePage />

      </body>
    </>
  )
}

export default App
