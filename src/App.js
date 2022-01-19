import { useEffect, useState } from "react";
import Compass from './components/Compass';
import './App.scss';
import { compassHeading } from "./helper";

function App() {
	const [direction, setDirection] = useState({absolute: false, alpha: 0});

	useEffect(() => {
		window.addEventListener("deviceorientation", handleOrientation, true);
		function handleOrientation(e){
      const {absolute, alpha, beta, gamma} = e;
      const heading = compassHeading(alpha, beta, gamma);
      console.log(heading);
			setDirection({absolute, alpha: heading});
		}
		return () => window.removeEventListener("deviceorientation", handleOrientation, true);
	}, []);

  return (
    <>
      <Compass direction={direction.alpha} />
      {direction.absolute ? "Hello" : "Not"}
    </>
  );
}

export default App;
