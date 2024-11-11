import { useState, useEffect } from 'react'
import './App.css'
import context from './context/context'
import ChildComponent from './components/ChildComponent'
import Filter from './components/Filter'
import PlanetList from './components/PlanetList'
import planetData from './data/planetData'

const App = () => {
  // Initialize `planets` state using the `useState` hook
  const [planets, setPlanets] = useState([]);

  // Use `useEffect` to set the `planets` state with data from the `data` module
  useEffect(() => {
    setPlanets(planetData);
  }, []);

  // Create an object `appData` that contains the `planets` data
  const appData = { planets };

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
