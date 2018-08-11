const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 3001 });
let users = {};

// Remove the socket information from every user before sending as it cannot be stringified due to circular structure
const getUsersWithoutSocket = users => {
	return Object.entries(users).reduce((accumulator, user) => {
		accumulator[user[0]] = { name: user[1].name };
		return accumulator;
	}, {});
};

// Broadcast to every open socket except my own
const broadcast = (data, ws) => {
	wss.clients.forEach(client => {
		if (client.readyState === WebSocket.OPEN && client !== ws) {
			client.send(JSON.stringify(data));
		}
	});
};

wss.on('connection', ws => {
	let i = 0;

	ws.on('message', message => {
		const data = JSON.parse(message);

		switch (data.type) {
		case 'ADD_USER': {
			i = Object.keys(users).reduce(function(a, b) {
				return Math.max(a, b);
			}, 0);

			users = { ...users, [i + 1]: { name: data.name, ws: ws } };
			const usersWithoutSocket = getUsersWithoutSocket(users);

			const updateUserAction = {
				type: 'UPDATE_USERS',
				users: usersWithoutSocket
			};

			ws.send(JSON.stringify(updateUserAction));
			broadcast(updateUserAction, ws);
			break;
		}
		case 'ADD_MESSAGE':
			broadcast(
				{
					type: 'ADD_MESSAGE',
					user: data.user,
					content: data.content
				},
				ws
			);
			break;
		default:
			break;
		}
	});

	ws.on('close', () => {
		// Find the user who belongs to the now closed socket
		const userToRemove = Object.entries(users).filter(
			user => user[1].ws === ws
		);
		const removeIndex = userToRemove ? userToRemove[0][0] : null;

		if (removeIndex) delete users[removeIndex];

		const usersWithoutSocket = getUsersWithoutSocket(users);
		broadcast(
			{
				type: 'UPDATE_USERS',
				users: usersWithoutSocket
			},
			ws
		);
	});
});
