import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ChatInput = styled.textarea`
	align-self: flex-end;
	flex: 1;
	width: 100%;
	margin-top: 5px;
	resize: none;
	box-shadow: rgba(0, 0, 0, 0.14) -1px 1px 2px 1px;
	border: none;
`;

class Input extends Component {
	constructor(props) {
		super(props);

		this.state = { text: '' };
	}

	render() {
		const { text } = this.state;
		const { onSubmit } = this.props;

		return (
			<ChatInput
				type="text"
				placeholder="Write here..."
				onChange={e => this.setState({ text: e.target.value })}
				onKeyPress={e => {
					if (e.key === 'Enter') {
						e.preventDefault();

						if (text !== '') {
							onSubmit('ME', text);
							this.setState({ text: '' });
						}
					}
				}}
				value={text}
			/>
		);
	}
}

Input.propTypes = {
	onSubmit: PropTypes.func.isRequired
};

export default Input;
