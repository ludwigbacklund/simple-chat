import React from 'react';
import styled from 'styled-components';

import { MessageShape } from '../features/chat/reducers';

const Wrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	margin: 10px 10px 0px 10px;
	font-family: 'Open Sans', Verdana, Helvetica, sans-serif;
`;

const Name = styled.span`
	margin-right: 10px;
	color: rgb(237, 66, 83);
`;

const Message = props => {
	return (
		<Wrapper>
			<Name>{props.user}:</Name>
			<p>{props.content}</p>
		</Wrapper>
	);
};

Message.propTypes = MessageShape;

export default Message;
