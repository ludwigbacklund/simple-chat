import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Messages from './components/Messages';
import Message from './components/Message';
import Input from './components/Input';
import UserList from './components/UserList';
import User from './components/User';

import { MessageShape } from './features/chat/reducers';
import { addMessageAndNotifySocket } from './features/chat/actions';
import { UserShape } from './features/users/reducers';

class App extends Component {
	render() {
		const { messages, users, addMessageAndNotifySocket } = this.props;

		return (
			<div>
				<Messages>
					{messages.map(message => (
						<Message
							key={message.id}
							id={message.id}
							user={message.user}
							content={message.content}
						/>
					))}
				</Messages>
				<Input onSubmit={addMessageAndNotifySocket} />
				<UserList>
					{Object.entries(users).map(user => (
						<User key={user[0]} name={user[1].name} />
					))}
				</UserList>
			</div>
		);
	}
}

App.propTypes = {
	messages: PropTypes.arrayOf(PropTypes.shape(MessageShape)),
	users: PropTypes.objectOf(PropTypes.shape(UserShape)),
	addMessageAndNotifySocket: PropTypes.func.isRequired
};

const mapState = state => ({
	messages: state.chat.messages,
	users: state.users.users
});

const mapActions = { addMessageAndNotifySocket };

export default connect(
	mapState,
	mapActions
)(App);
