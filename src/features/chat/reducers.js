import PropTypes from 'prop-types';

export const MessageShape = {
	id: PropTypes.number.isRequired,
	user: PropTypes.string.isRequired,
	content: PropTypes.string.isRequired
};

const INITIAL_STATE = {
	messages: [
		{ id: 0, user: 'John', content: 'Hello World' },
		{ id: 1, user: 'Becky', content: 'Testing 1 2 3' }
	]
};

const chat = (state = INITIAL_STATE, action) => {
	switch (action.type) {
	default:
		return state;
	}
};

export default chat;
