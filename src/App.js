import { useEffect } from 'react';
import { useWeather } from './context/weather';
import Input from './components/input';
import Card from './components/card';
import Button from './components/button';
import './App.css';

function App() {
  const weather = useWeather();

  useEffect(() => {
    weather.fetchCurrentUserLocationData(); 
  }, []);
  

  return (
    <div className="App">
      <h1>Weather App</h1>
      <Input />
      <Button onClick={weather.fetchData} value="Search" />
      <Card />
     
    </div>
  );
}

export default App;
