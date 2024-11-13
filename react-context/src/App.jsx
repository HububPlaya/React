import { useState, useEffect, useMemo } from 'react'
import './App.css'
import context from './context/context'
import ChildComponent from './components/ChildComponent'
import Filter from './components/Filter'
import PlanetList from './components/PlanetList'
import planetData from './data/planetData'

const App = () => {
  // Initialize `planets` state using the `useState` hook
  const [planets, setPlanets] = useState([]);
  const [input, setInput] = useState("");

  // Use `useEffect` to set the `planets` state with data from the `data` module
  // useEffect(() => {
  //   if(input === "") {
  //     setPlanets(planetData);
  //   } else {
  //     const filteredPlanets = planetData.filter((planet) => (
  //       planet.name.toLowerCase().includes(input)
  //     ))
  //     setPlanets(filteredPlanets);
  //   }
  // }, [input]);
  const filteredPlanets = useMemo(() => {
    if(input === "") {
      return planetData;
    }
    return planetData.filter((planet) => 
            planet.name.toLowerCase().includes(input)
          )
  }, [input])

  const handleInputChange = (e) => {
    const value = e.target.value.toLowerCase().trim();
    setInput(value);
  }

  // Create an object `appData` that contains the `planets` data
  const appData = { filteredPlanets, handleInputChange, input};

  return (
    // Wrap the child components with `Context.Provider` and provide `appData` as the value
    <context.Provider value={appData}>
      <div>
        {/* Render the `Filter` component */}
        <Filter />

        {/* Render the `PlanetList` component */}
        <PlanetList />
      </div>
    </context.Provider>
  );
};

export default App
