import { GET_POKEMON_DETAIL_STARTED, GET_POKEMON_DETAIL_SUCCESS, GET_POKEMON_DETAIL_FAILURE } from "./types";
import axios from "axios";
export const getPokemonDetail = (pokemonId) => {
	return dispatch => {
		dispatch(getPokemonDetailStarted(pokemonId));
		axios.get("http://pokeapi.co/api/v2/pokemon/" + pokemonId)
			.then(res => {
				var pokemon = {
					name: res.data.name,
					type: res.data.types,
					id: res.data.id,
					imgUrl: res.data.sprites.front_default,
					height: res.data.height,
					weight: res.data.weight,
					stats: res.data.stats,
					abilities:res.data.abilities
				};
				axios.get(res.data.types[0].type.url)
					.then(function (data3) {
						pokemon.weaknesses = data3.data.damage_relations;
						dispatch(getPokemonDetailSuccess(pokemon));
					});

			})
			.catch(err => {
				dispatch(getPokemonDetailFailure(err.message));
			});

	};

};

const getPokemonDetailSuccess = pokemon => ({
	type: GET_POKEMON_DETAIL_SUCCESS,
	payload: {
		...pokemon,

	}
});

const getPokemonDetailStarted = (pokemonId) => ({
	type: GET_POKEMON_DETAIL_STARTED,
	payload: {
		id: pokemonId,
	}
});

const getPokemonDetailFailure = error => ({
	type: GET_POKEMON_DETAIL_FAILURE,
	payload: {
		error
	}
});