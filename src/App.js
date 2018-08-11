import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Messages from './components/Messages';
import Input from './components/Input';
import Message from './components/Message';

import { MessageShape } from './features/chat/reducers';
import { addMessage } from './features/chat/actions';

class App extends Component {
	render() {
		const { messages, addMessage } = this.props;

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
				<Input onSubmit={addMessage} />
			</div>
		);
	}
}

App.propTypes = {
	messages: PropTypes.arrayOf(PropTypes.shape(MessageShape)),
	addMessage: PropTypes.func.isRequired
};

const mapState = state => ({
	messages: state.chat.messages
});

const mapActions = { addMessage };

export default connect(
	mapState,
	mapActions
)(App);
