import { Route, Routes } from 'react-router-dom';
import PeoplePage from '../PeoplePage/PeoplePage';
import './App.css'
import HomePage from '../HomePage/HomePage';
import Header from '../../components/Header/Header';
import NotFoundPage from '../NotFoundPage/NotFoundPage';
import PersonPage from '../PersonPage/PersonPage';
import FavoritePage from '../FavoritePage/FavoritePage';

function App() {

  return (
    <div className="wrapper">
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/people' element={<PeoplePage />} />
        <Route path='/person/:id' element={<PersonPage />} />
        <Route path='/favorite' element={<FavoritePage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
