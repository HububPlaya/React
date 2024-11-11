import { useEffect, useContext } from "react";
import PlanetItem from "./PlanetItem";

const PlanetList = () => {
    return (
        <ul>
          {/* Render the `PlanetItem` component within an unordered list */}
          <PlanetItem />
        </ul>
      );
    };

export default PlanetList;