import styled from 'styled-components';

const Header = styled.span`
	text-align: center;
	color: white;
	text-shadow: -1px 1px 0px rgba(0, 0, 0, 0.2);
	font-weight: ${props => (props.bold ? '700' : '400')};

	@media (max-width: 900px) {
		font-size: ${props => (props.small ? '1em' : '1.5em')};
	}

	@media (min-width: 900px) {
		font-size: ${props => (props.small ? '1.5em' : '2em')};
	}
`;

export default Header;
