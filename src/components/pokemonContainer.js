import React, { Component } from "react";
import PokemonType from "./pokemonType";
import { Link } from "react-router-dom";
import { getPekemon } from "../actions/index";
import { connect } from "react-redux";
import r from "uuid/v4";


class PokemonContainer extends Component{
	componentDidMount () {
		const { pokemonUrl, onGetPekemon } = this.props;
		onGetPekemon(pokemonUrl);
	}

	formatId (id) {
		if (id.length === 1) {
			return "#00" + id;
		} else if (id.length === 2) {
			return "#0" + id;
		} else {
			return "#" + id;
		}
	}

	render (){
		const {pokemonId, pokemons = []} = this.props;
		const pekamon = pokemons[pokemonId] || [];
		var types = [];
		const {type = [],name, imgUrl, detailsUrl = "" } = pekamon;
		type.forEach(function (item) {
			types.push(<PokemonType pokemonType={item.type.name} key={r()} colSize="col-xs-6 col-md-5" border="3px solid #FFF"/>);
		});

		return (
			<div  className="col-sm-3 col-xs-12 block_container">
				<Link to={detailsUrl} className="thumbnail">
					<img src={imgUrl} alt="pokemon"/>
				</Link>
				<div  className="caption">
					<p className="pokemon_id"  >{this.formatId(pokemonId)}</p>
					<h3>{name}</h3>
					<div className="col-xs-12 pokemon_type">
						{types}
					</div>
				</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	const { pokedex: {pokemons=[]} = {} } = state;
	return {
		pokemons
	};
}
const mapDispatchToProps = dispatch => {
	return {
		onGetPekemon: (url) => {
			dispatch(getPekemon(url));
		}
	};
};

export default  connect(mapStateToProps , mapDispatchToProps,undefined, { pure: false })(PokemonContainer);
// export default PokemonContainer;