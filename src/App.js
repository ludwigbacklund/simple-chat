import React, { Component } from 'react';

import Messages from './components/Messages';
import Input from './components/Input';

class App extends Component {
	render() {
		return (
			<div>
				<Messages />
				<Input />
			</div>
		);
	}
}

export default App;
