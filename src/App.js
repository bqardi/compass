import { useEffect, useState } from "react";
import Compass from './components/Compass';
import './App.scss';

function App() {
	const [direction, setDirection] = useState({absolute: false, alpha: 0});

	useEffect(() => {
		window.addEventListener("deviceorientation", handleOrientation, true);
		function handleOrientation(e){
      const {absolute, alpha} = e;
			setDirection({absolute, alpha});
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
