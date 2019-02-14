import React from "react";
import r from "uuid/v4";
const PokemonCharacteristics = ({className, abilities =[], height, weight})=>{
	var classes = ["col-xs-6", className ].join(" ");
	const abilitiesArr = [];
	abilities.forEach(function (item) {
		abilitiesArr.push(
			<div className="panel-body" key={r()}>
				<p >{item.ability.name}</p>
			</div>);
	});
	return (
		<div  className="col-xs-12 well">
			<div className={classes}>
				<h4 >Height</h4>
				<p >{height}</p>
			</div>
			<div className={classes} >
				<h4 >Weight</h4>
				<p >{weight}</p>
			</div>
			<div className={classes} >
				<h4 >Abilities</h4>
				<div className="ability-list">
					{abilitiesArr}
				</div>
			</div>
		</div>
	);
};

export default PokemonCharacteristics;