import React from "react";
import PokemonType from "./pokemonType";
import r from "uuid/v4";

const TypesAndWeaknesses = ({pokemonType, imgUrl,weaknesses:{double_damage_from={},half_damage_from={}}={}}) => {
	if (!pokemonType) return null;

	var types = [];
	var weaknesses = [];
	pokemonType.forEach(function (item) {
		types.push(<PokemonType key={r()} pokemonType={item.type.name} colSize="col-sm-4" border="3px solid #EEE" />);
	});
	double_damage_from.forEach(function (item) {
		weaknesses.push(<PokemonType key={r()} pokemonType={item.name} colSize="col-sm-4" border="3px solid #EEE" />);
	});
	half_damage_from.forEach(function (item) {
		weaknesses.push(<PokemonType key={r()} pokemonType={item.name} colSize="col-sm-4" border="3px solid #EEE" />);
	});

	return (
		<div className="col-sm-6">
			<div className="col-xs-12">
				<img  src={imgUrl} alt="pokemon" className="img-responsive"/>
			</div>
			<br/>
			<div className="col-xs-12">
				<h4>Type</h4>
				<div className="col-xs-12 pokemon_type">
					{types}
				</div>
				<br/>
			</div>
			<div  className="col-xs-12">
				<h4>Weaknesses</h4>
				<br/>
				<div className="col-xs-12 pokemon_type">
					{weaknesses}
				</div>
				<br/>
			</div>
		</div>
	);

};
export default TypesAndWeaknesses;