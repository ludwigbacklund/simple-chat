import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import User from './User';
import Header from './styled/Header';

const Wrapper = styled.div`
	flex: 1;
	text-align: center;
`;

const UserList = ({ children }) => {
	return (
		<Wrapper>
			<Header>Participants</Header>
			{children}
		</Wrapper>
	);
};

UserList.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(User),
		PropTypes.objectOf(User)
	])
};

export default UserList;
