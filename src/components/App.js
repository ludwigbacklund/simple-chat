import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';

import Messages from './Messages';
import Message from './Message';
import Input from './Input';
import UserList from './UserList';
import User from './User';

import { MessageShape } from '../features/chat/reducers';
import { addMessageAndNotifySocket } from '../features/chat/actions';
import { UserShape } from '../features/users/reducers';
import Header from './styled/Header';

const MainWrapper = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
`;

const AppWrapper = styled.div`
	display: flex;
	height: 100vh;
	width: 100%;

	@media (max-width: 900px) {
		width: 100%;
		margin: 5px;
	}

	@media (min-width: 900px) {
		width: 60%;
	}
`;

const ChatWrapper = styled.div`
	display: flex;
	flex-direction: column;
	flex: 6;
	overflow-x: hidden;
`;

const MessagesWrapper = styled.div`
	display: flex;
	flex: 1;
	flex-direction: column;
	margin: 10px;
`;

class App extends Component {
	render() {
		const { messages, users, addMessageAndNotifySocket } = this.props;

		return (
			<MainWrapper>
				<AppWrapper>
					<UserList>
						{Object.entries(users).map(user => (
							<User key={user[0]} name={user[1].name} />
						))}
					</UserList>
					<ChatWrapper>
						<Header>Blocket Chat</Header>
						<MessagesWrapper>
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
						</MessagesWrapper>
					</ChatWrapper>
				</AppWrapper>
			</MainWrapper>
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
