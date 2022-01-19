import { useEffect, useState } from "react";
import Compass from './components/Compass';
import './App.scss';

function App() {
	const [direction, setDirection] = useState(0);

	useEffect(() => {
		window.addEventListener("deviceorientation", handleOrientation, true);
		function handleOrientation(e){
			setDirection(e.alpha);
		}
		return () => window.removeEventListener("deviceorientation", handleOrientation, true);
	}, []);

  return (
    <>
      <Compass direction={direction} />
      {direction}
    </>
  );
}

export default App;
