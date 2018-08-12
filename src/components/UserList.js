import React from 'react';
import styled from 'styled-components';

import User from './User';
import Header from './styled/Header';
import componentPropType from '../utils/componentPropType';

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
	children: componentPropType(User)
};

export default UserList;
