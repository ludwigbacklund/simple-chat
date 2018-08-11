import { name, socket } from '../../index';

const addMessage = (user, content) => ({
	type: 'ADD_MESSAGE',
	user,
	content
});

const addMessageAndNotifySocket = (user, content) => dispatch => {
	dispatch(addMessage(user, content));
	socket.send(JSON.stringify(addMessage(name, content)));
};

export { addMessage, addMessageAndNotifySocket };
