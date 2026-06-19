import { useState, useEffect} from 'react'
import './App.css'
import Header from './component/Header'
import Main from './component/Main'
import Loader from './component/Loader';
import ErrorMessage from './component/ErrorMessage';



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
        <Main items={trips} searchQuery={searchQuery} />
      )}
    </>
  )
}

export default App
