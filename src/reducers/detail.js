import {GET_POKEMON_DETAIL_STARTED, GET_POKEMON_DETAIL_SUCCESS, GET_POKEMON_DETAIL_FAILURE } from "../actions/types";

const initialState = {
	loading: false,
	error: null
};

export default function pokemonDetail(state = initialState, action) {
	switch (action.type) {
	case GET_POKEMON_DETAIL_STARTED:
		return {
			[action.payload.id]:{state:{...state,loading: true}}
		};
	case GET_POKEMON_DETAIL_SUCCESS:

		return {
			[action.payload.id]: {...action.payload, state:{ ...state[action.payload.id].state , loading: false}}
		};
	case GET_POKEMON_DETAIL_FAILURE:
		return {
			[action.payload.id]: {state:{ ...state[action.payload.id].state,
				loading: false,
				error: action.payload.error}}

		};
	default:
		return state;
	}
}