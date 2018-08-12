import { addMessage } from '../features/chat/actions';
import { updateUsers } from '../features/users/actions';

const IP = '127.0.0.1';

const initSocket = (dispatch, name) => {
	const socket = new WebSocket(`ws://${IP}:3001`);

	socket.onopen = () => {
		socket.send(
			JSON.stringify({
				type: 'ADD_USER',
				name: name
			})
		);
	};

	socket.onmessage = event => {
		const data = JSON.parse(event.data);
		switch (data.type) {
		case 'ADD_MESSAGE':
			dispatch(addMessage(data.user, data.content));
			break;
		case 'UPDATE_USERS':
			dispatch(updateUsers(data.users));
			break;
		default:
			break;
		}
	};

	return socket;
};

export default initSocket;
