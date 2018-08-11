import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import './utils/minireset.min.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import rootReducer from './features';
import initSocket from './utils/initSocket';
import names from './utils/names';

const store = createStore(rootReducer, applyMiddleware(thunk));
export const name = names[
	Math.floor(Math.random() * names.length)
].toUpperCase();
export const socket = initSocket(store.dispatch, name);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);
registerServiceWorker();
