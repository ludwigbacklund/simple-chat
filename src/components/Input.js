import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
	constructor(props) {
		super(props);

		this.state = { text: '' };
	}

	render() {
		let { text } = this.state;
		return (
			<input
				type="text"
				placeholder="Write here..."
				onChange={e => this.setState({ text: e.target.value })}
				value={text}
			/>
		);
	}
}

Input.propTypes = {
	onSubmit: PropTypes.func
};

export default Input;
