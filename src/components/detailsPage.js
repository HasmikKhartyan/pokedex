import React, { Component } from "react";
import PokemonNameId from "./pokemonNameId";
import TypesAndWeaknesses from "./typesAndWeaknesses";
import PokemonCharacteristics from "./pokemonCharacteristics";
import PokemonStats from "./pokemonStates";
import { connect } from "react-redux";
import { getPokemonDetail } from "../actions/detail";

class DetailsPage extends Component{
	constructor(){
		super();
		this.state= {
			details: {}
		};
	}

	componentDidMount () {

		const { match: { params: {pokemonId = ""} = {}} = {}, onGetPokemonDetail, details } = this.props;
		if(!details[pokemonId]) {
			onGetPokemonDetail(pokemonId);
		}
	}

	render () {
		const { match: { params: {pokemonId = ""} = {}} = {}, details} = this.props;
		const pokemon =  details[pokemonId] || {};
		document.body.style.background = "#EEE";
		document.body.style.color = "#000";
		return (
			<div className="container">
				<PokemonNameId pokemonName={pokemon.name} pokemonId={pokemon.id} />
				<div className="row">
					<TypesAndWeaknesses
						imgUrl={pokemon.imgUrl}
						pokemonType={pokemon.type}
						weaknesses={pokemon.weaknesses}
					/>
					<div className="col-sm-6 characteristics">
						<PokemonCharacteristics
							weight={pokemon.weight}
							height={pokemon.height}
							category={pokemon.category}
							abilities={pokemon.abilities}
						/>
					</div>
				</div>
				<br/>
				<PokemonStats
					stats = {pokemon.stats}
				/>
			</div>
		);
	}
}

function mapStateToProps(state) {
	const { details = {} } = state;
	return {
		details
	};
}
const mapDispatchToProps = dispatch => {
	return {
		onGetPokemonDetail: (pokemonId) => {
			dispatch(getPokemonDetail(pokemonId));
		}
	};
};

export default  connect(mapStateToProps, mapDispatchToProps,undefined, { pure: false })(DetailsPage);