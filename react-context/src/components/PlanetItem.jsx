import { useContext } from "react";
import context from "../context/context";

const PlanetItem = () => {
    const { filteredPlanets } = useContext(context);

  return (
    <>
      {/* Map through the `planets` data and render details for each planet */}
      {filteredPlanets.map(
        ({
          id,
          name,
          weight,
          size,
          distanceFromSun,
          material,
          image,
          existenceYears,
        }) => (
          <li key={id}>
            <img src={image} alt={name} width={160} />
            <div>
              <h3>{name}</h3>
              <p>
                Weight: <span>{weight}</span>
              </p>
              <p>
                Size: <span>{size}</span>
              </p>
              <p>
                Distance from Sun:{" "}
                <span>{distanceFromSun}</span>
              </p>
              <p>
                Material: <span>{material}</span>
              </p>
              <p>
                Old: <span>{existenceYears}</span>
              </p>
            </div>
          </li>
        )
      )}
    </>
  );
};


export default PlanetItem;