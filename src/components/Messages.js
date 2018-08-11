import React from 'react';
import PropTypes from 'prop-types';

import Message from './Message';

const Messages = props => {
	return <div>{props.messages}</div>;
};

Messages.propTypes = {
	messages: PropTypes.arrayOf(Message)
};

Messages.defaultProps = {
	messages: [
		<Message key={1} user="John" content="Hello World" />,
		<Message key={2} user="Becky" content="Testing 1 2 3" />
	]
};

export default Messages;
