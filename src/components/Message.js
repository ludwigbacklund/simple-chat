import React from 'react';

import { MessageShape } from '../features/chat/reducers';

const Message = props => {
	return (
		<p>
			{props.user}: {props.content}
		</p>
	);
};

Message.propTypes = MessageShape;

export default Message;
