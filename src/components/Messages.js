import React from 'react';
import PropTypes from 'prop-types';

import Message from './Message';

const Messages = ({ children }) => {
	return <div>{children}</div>;
};

Messages.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(Message),
		PropTypes.objectOf(Message)
	])
};

export default Messages;
