import React from "react";
import r from "uuid/v4";
const PokemonStats = ({stats=[]}) =>{
	var special = {
		marginTop: 13
	};

	var progressStyle = {
		position: "relative"
	};

	var spanStyle = {
		position: "absolute",
		display: "block",
		width: "100%",
		fontWeight: 700,
		color: "#000"
	};
	const statsArr = [];
	stats.forEach(function (item) {
		statsArr.push(
			<div className="col-sm-12" key={r()}>
				<div className="col-sm-2" >
					<p>{item.stat.name}</p>
				</div>
				<div className="col-sm-10">
					<div style={progressStyle} className="progress">
						<div className="progress-bar progress-bar-custom" role="progressbar" style={{width: item.base_stat + "%", background: "rgb(217, 83, 79)"}}>
							<span style={spanStyle}>{item.base_stat}</span>
						</div>
					</div>
				</div>
			</div>);
	});

	return (
		<div>
			{statsArr}
		</div>
	);

};
export default PokemonStats;