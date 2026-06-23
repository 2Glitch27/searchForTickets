import { useState, useEffect} from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './component/Header'
import TripPage from './pages/TripPage'
import FavoritesPage from './pages/FavoritesPage'
import Main from './component/Main'
import Loader from './component/Loader';
import ErrorMessage from './component/ErrorMessage';
import NotFoundPage from './pages/NotFoundPage'



function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [trips, setTrips] = useState([]);          
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null); 
   useEffect(() => {
    fetch('/mock/trips.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Не удалось загрузить данные');
        }
        return response.json();
      })
      .then((data) => {
        setTimeout(() => {
          setTrips(data.flights || []);     
          setIsLoading(false); 
        }, 1500);
      })
      .catch((err) => {
        setError(err.message); 
        setIsLoading(false); 
      });
  }, []);
  return (
    <>
      <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      {isLoading && <Loader/>}
      {error && <ErrorMessage error={error}/>}
       {!isLoading && !error && (
          <Routes>
          <Route path="/" element={<Main items={trips} searchQuery={searchQuery} />} />
          <Route path="/trip/:id" element={<TripPage trips={trips} />} />
          <Route path="/favorites" element={<FavoritesPage trips={trips} />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      )}
    </>
  )
}

export default App
