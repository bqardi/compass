import { useEffect, useState } from "react";
import "./Compass.scss";

const rosePoints = [
	"N", "•", "•", "•", "•", "•",
	"E", "•", "•", "•", "•", "•",
	"S", "•", "•", "•", "•", "•",
	"W", "•", "•", "•", "•", "•"
];

function Compass({direction, needleRotate}){
	return (
		<div className="Compass">
			<div className="Compass__content">
				<Needle direction={needleRotate ? -direction : null} />
				<Degrees direction={-direction} />
				<Rose direction={needleRotate ? null : -direction} />
			</div>
		</div>
	);
}

function Needle({direction}){
	return (
		<div className="Needle" style={direction ? {transform: `rotate(${direction}deg)`} : null}>
			<div className="Needle__circle" />
		</div>
	);
}

function Degrees({direction}){
	const [dir, setDir] = useState({deg: 0, text: "N"});

	useEffect(() => {
		let text = "";
		let deg = -direction;
		if (deg < 68 || deg > 292) {
			text += "N";
		} else if (deg > 112 && deg < 248) {
			text += "S";
		}

		if (deg > 22 && deg < 158) {
			text += "E";
		} else if (deg > 202 && deg < 338) {
			text += "W";
		}
		setDir({deg, text});
	}, [direction]);
	
	return (
		<div className="Degrees">
			<span className="Degrees__direction">{dir.text}</span>
			<span className="Degrees__number">{dir.deg.toFixed(1)}&deg;</span>
		</div>
	);
}

function Rose({direction}){
	return (
		<div className="Rose" style={direction ? {transform: `rotate(${direction}deg)`} : null}>
			{rosePoints.map((point, index) => (
				<div key={index} className="Rose__point" style={{transform: `rotate(${index * 15}deg)`}}>
					<div className="Rose__translate">
						{point === "•" ? point : <span className="Rose__letter">{point}</span>}
					</div>
				</div>
			))}
		</div>
	);
}

export default Compass;