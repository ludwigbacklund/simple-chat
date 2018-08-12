import React, { PureComponent } from 'react';
import styled from 'styled-components';

import { MessageShape } from '../features/chat/reducers';

const Wrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	margin: 10px 10px 0px 10px;

	@media (max-width: 900px) {
		font-size: 0.8em;
	}
`;

const Name = styled.span`
	color: rgb(237, 66, 83);
	margin-right: 5px;
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
