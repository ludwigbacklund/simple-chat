const addMessage = (user, content) => ({
	type: 'ADD_MESSAGE',
	user,
	content
});

export { addMessage };
