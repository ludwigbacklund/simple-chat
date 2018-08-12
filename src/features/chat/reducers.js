import PropTypes from 'prop-types';

export const MessageShape = {
	id: PropTypes.number.isRequired,
	user: PropTypes.string.isRequired,
	content: PropTypes.string.isRequired
};

const INITIAL_STATE = {
	messages: []
};

let id = 0;

const chat = (state = INITIAL_STATE, action) => {
	switch (action.type) {
	case 'ADD_MESSAGE':
		return {
			...state,
			messages: [
				...state.messages,
				{
					id: id++,
					user: action.user,
					content: action.content
				}
			]
		};
	default:
		return state;
	}
};

export default chat;
