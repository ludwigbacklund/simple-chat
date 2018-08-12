import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
	display: flex;
	margin-top: 10px;
	background-color: #f9f7f6;
	box-shadow: rgba(0, 0, 0, 0.14) -1px 1px 2px 1px;
	border-radius: 5px;
`;

const Name = styled.div`
	font-family: 'Open Sans', Verdana, Helvetica, sans-serif;
	margin: 10px;
	width: 100%;
	color: rgb(237, 66, 83);

	@media (max-width: 900px) {
		font-size: 0.8em;
	}
`;

class User extends PureComponent {
	render() {
		const { name } = this.props;

		return (
			<Wrapper>
				<Name>{name}</Name>
			</Wrapper>
		);
	}
}

User.propTypes = {
	name: PropTypes.string
};

export default User;
