import { useEffect, useState } from "react";
import Compass from './components/Compass';
import './App.scss';

function App() {
  const [calibratedOffset, setCalibratedOffset] = useState(0);
	const [direction, setDirection] = useState({alpha: 0});

  function calibrate(){
    setCalibratedOffset(direction.alpha);
  }

  function calibrationHandler(){
    let alpha = direction.alpha - calibratedOffset;
    if (alpha < 0) alpha = alpha + 360;
    if (alpha > 360) alpha = alpha - 360;
    return alpha;
  }

	useEffect(() => {
    window.removeEventListener("deviceorientation", handleOrientation, true);
		window.addEventListener("deviceorientation", handleOrientation, true);
		function handleOrientation(e){
			setDirection({alpha: e.alpha});
		}
		return () => window.removeEventListener("deviceorientation", handleOrientation, true);
	}, [calibratedOffset]);

  return (
    <div className="App">
      <Compass direction={calibrationHandler()} />
      <p>Point your device towards north and press this button to calibrate:</p>
      <button className="App__button" onClick={calibrate}>Calibrate</button>
    </div>
  );
}

export default App;
