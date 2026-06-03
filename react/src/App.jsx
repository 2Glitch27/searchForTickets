import { useState, useEffect} from 'react'
import './App.css'
import Header from './component/Header'
import Main from './component/Main'



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
      {isLoading && (
        <div className="text-center py-20 text-gray-500 text-lg animate-pulse">
          Заргузка...
        </div>
      )}
      {error && (
        <div className="max-w-6xl mx-auto px-5 py-10 text-center text-red-500 bg-red-50 rounded-lg border border-red-200 my-5">
          Ошибка: {error}.
        </div>
      )}
       {!isLoading && !error && (
        <Main items={trips} searchQuery={searchQuery} />
      )}
    </>
  )
}

export default App
