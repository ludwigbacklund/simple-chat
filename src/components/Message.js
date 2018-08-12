import React, { PureComponent } from 'react';
import styled from 'styled-components';

import { MessageShape } from '../features/chat/reducers';

const Wrapper = styled.div`
	display: flex;

	margin: 10px 10px 0px 10px;
	font-family: 'Open Sans', Verdana, Helvetica, sans-serif;
`;

const Name = styled.span`
	margin-right: 10px;
	color: rgb(237, 66, 83);
`;

const Content = styled.span`
	word-break: break-all;
`;

class Message extends PureComponent {
	render() {
		const { user, content } = this.props;

		return (
			<Wrapper>
				<Name>{user}:</Name>
				<Content>{content}</Content>
			</Wrapper>
		);
	}
}

Message.propTypes = MessageShape;

export default Message;
