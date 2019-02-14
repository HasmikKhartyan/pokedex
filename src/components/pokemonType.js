import React from "react";
const PokemonType = ({border, colSize, pokemonType}) => {
	function uppercaser(str) {
		return str.replace(str[0], str[0].toUpperCase());
	}
	return (
		<div  style ={{border: border}} className={`${colSize} pokemon-type ${pokemonType}`}>
			<p >{uppercaser(pokemonType)}</p>
		</div>
	);
};
export default PokemonType;