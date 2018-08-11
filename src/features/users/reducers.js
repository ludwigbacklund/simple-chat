import PropTypes from 'prop-types';

export const UserShape = {
	name: PropTypes.string.isRequired
};

const INITIAL_STATE = {
	users: {}
};

const users = (state = INITIAL_STATE, action) => {
	switch (action.type) {
	case 'UPDATE_USERS':
		return {
			...state,
			users: action.users
		};
	default:
		return state;
	}
};

export default users;
