import React from 'react';
import PropTypes from 'prop-types';
import User from './User';

const UserList = ({ children }) => {
	return <div>{children}</div>;
};

UserList.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(User),
		PropTypes.objectOf(User)
	])
};

export default UserList;
