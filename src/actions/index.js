import {GET_POKEMON_SUCCESS, GET_POKEDEX_STARTED, GET_POKEDEX_SUCCESS, GET_POKEDEX_FAILURE} from "./types";
import axios from "axios";

const getPokedex = (start, end = 12, param = false ) => {
	return dispatch => {
		dispatch(getPokedexStarted(param));
		axios
			.get(`https://pokeapi.co/api/v2/pokemon/?offset=${start}&limit=${end}`)
			.then(res => {
				dispatch(getPokedexSuccess(res.data.results, param));
			})
			.catch(err => {
				dispatch(getPokedexFailure(err.message, param));
			});
	};
};

const getPekemon = (url) => {

	return dispatch => {
		axios
			.get(url)
			.then(res => {
				var pokemon = {
					name: res.data.name,
					type: res.data.types,
					id: res.data.id,
					imgUrl: res.data.sprites.front_default,
					detailsUrl: "/pokemons/" + res.data.id
				};
				dispatch(getPekemonSuccess(pokemon));
			});

	};
};
const getPekemonSuccess = pokemon => ({
	type: GET_POKEMON_SUCCESS,
	payload: {
		...pokemon,

	}
});

const getPokedexSuccess = (pokemon, param) => ({
	type: GET_POKEDEX_SUCCESS,
	payload: {pokemon,param}
});

const getPokedexStarted = (param) => ({
	type: GET_POKEDEX_STARTED,
	payload: param
});

const getPokedexFailure = (error,param) => ({
	type: GET_POKEDEX_FAILURE,
	payload: {
		error,
		param

	}
});
export {getPokedex , getPekemon};
