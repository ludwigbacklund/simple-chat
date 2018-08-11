import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Message from './Message';

const Wrapper = styled.div`
	flex: 10;
	background-color: #f9f7f6;
	box-shadow: rgba(0, 0, 0, 0.14) -1px 1px 2px 1px;
	border-radius: 5px;
	overflow-y: scroll;
`;

class Messages extends Component {
	constructor(props) {
		super(props);
		this.listRef = React.createRef();
	}

	getSnapshotBeforeUpdate(prevProps) {
		if (prevProps.children.length < this.props.children.length) {
			const list = this.listRef.current;
			return list.scrollHeight - list.scrollTop;
		}
		return null;
	}

	componentDidUpdate(prevProps, prevState, snapshot) {
		if (snapshot !== null) {
			const list = this.listRef.current;
			list.scrollTop = list.scrollHeight - snapshot;
		}
	}

	render() {
		const { children } = this.props;
		return <Wrapper innerRef={this.listRef}>{children}</Wrapper>;
	}
}

Messages.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(Message),
		PropTypes.objectOf(Message)
	])
};

export default Messages;
