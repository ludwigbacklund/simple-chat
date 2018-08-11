import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
	constructor(props) {
		super(props);

		this.state = { text: '' };
	}

	render() {
		const { text } = this.state;
		const { onSubmit } = this.props;

		return (
			<input
				type="text"
				placeholder="Write here..."
				onChange={e => this.setState({ text: e.target.value })}
				onKeyPress={e => {
					if (e.key === 'Enter') {
						onSubmit('John', text);
						this.setState({ text: '' });
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
