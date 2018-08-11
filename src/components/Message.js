import React from 'react';
import PropTypes from 'prop-types';

const Message = props => {
	return (
		<p>
			{props.user}: {props.content}
		</p>
	);
};

Message.propTypes = {
	user: PropTypes.string.isRequired,
	content: PropTypes.string.isRequired
};

export default Message;
