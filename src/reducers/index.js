import {
	GET_POKEDEX_STARTED, GET_POKEDEX_SUCCESS, GET_POKEDEX_FAILURE, GET_POKEMON_SUCCESS
} from "../actions/types";

const initialState = {
	loading: false,
	data: [],
	pokemons: {},
	search:[],
	error: null
};

export default function pokedexReducer(state = initialState, action) {
	const payload = action.payload;
	switch (action.type) {

	case GET_POKEDEX_STARTED:
		return {
			...state,
			loading: true
		};
	case GET_POKEDEX_SUCCESS:
		const obj = !payload.param ?
			{data: [...state.data, ...payload.pokemon ]} :
			{search: [...state.search, ...payload.pokemon ]};
		return {
			...state,
			// data: [...state.data, ...action.payload.pokemon ],
			...obj,
			loading: false
		};
	case GET_POKEDEX_FAILURE:
		return {
			...state,
			error: action.payload.error,
			loading: false
		};
	case GET_POKEMON_SUCCESS:
		return {
			...state,
			pokemons: {...state.pokemons,[action.payload.id]: action.payload }
		};
	default:
		return state;
	}
}
