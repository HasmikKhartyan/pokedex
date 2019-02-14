import React from "react";
const PokemonNameId = ({pokemonId,pokemonName}) =>{
	function formatId (id) {
		if (id.length === 1) {
			return "#00" + id;
		} else if (id.length === 2) {
			return "#0" + id;
		} else {
			return "#" + id;
		}
	}
	if (!pokemonId) return null;

	var headerStyle = {
		textAlign: "center",
		fontWeight: 700,
		opacity: 0.8
	};

	var idStyle = {
		opacity: 0.5
	};

	var divStyle = {
		paddingBottom: 70,
		marginTop:30
	};

	return (
		<div style={divStyle} className="col-xs-12">
			<h1 style={headerStyle}>{pokemonName} <span style={idStyle}> {formatId(pokemonId.toString())}</span></h1>
		</div>
	);


};
export default PokemonNameId;