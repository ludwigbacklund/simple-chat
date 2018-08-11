import styled from 'styled-components';

const Header = styled.span`
	text-align: center;
	font-family: 'Open Sans', Verdana, Helvetica, sans-serif;

	@media (max-width: 1200px) {
		font-size: 1.2em;
	}

	@media (min-width: 1200px) {
		font-size: 2em;
	}
`;

export default Header;
