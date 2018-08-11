import React from 'react';
import PropTypes from 'prop-types';

const User = ({ name }) => {
	return <p>{name}</p>;
};

User.propTypes = {
	name: PropTypes.string
};

export default User;
