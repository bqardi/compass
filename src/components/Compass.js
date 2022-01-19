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
			<Needle direction={needleRotate ? direction : null} />
			<Degrees direction={direction} />
			<Rose direction={needleRotate ? null : direction} />
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
	return (
		<div className="Degrees">
			<span className="Degrees__direction">N</span>
			<span className="Degrees__number">{(-direction).toFixed(1)}&deg;</span>
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