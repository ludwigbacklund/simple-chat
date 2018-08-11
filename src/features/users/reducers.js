import PropTypes from 'prop-types';

export const UserShape = {
	name: PropTypes.string.isRequired
};

const INITIAL_STATE = {
	users: { 1: { name: 'John' } }
};

let id = 0;

const users = (state = INITIAL_STATE, action) => {
	switch (action.type) {
	case 'ADD_USER':
		return {
			...state,
			users: { ...state.users, [id++]: { name: action.name } }
		};
	default:
		return state;
	}
};

export default users;
