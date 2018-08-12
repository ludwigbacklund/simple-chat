import React from 'react';
import styled from 'styled-components';

import User from './User';
import Header from './styled/Header';
import componentPropType from '../utils/componentPropType';

const Wrapper = styled.div`
	text-align: center;
	overflow-y: overlay;

	@media (max-width: 900px) {
		flex: 3;
	}

	@media (min-width: 900px) {
		flex: 2;
	}
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
	children: componentPropType(User)
};

export default UserList;
