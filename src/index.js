import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import App from './App';
import registerServiceWorker from './registerServiceWorker';
import rootReducer from './features';
import initSocket from './utils/initSocket';

const store = createStore(rootReducer, applyMiddleware(thunk));
export const name = `Blocket Ingenjör ${Math.floor(Math.random() * 100)}`;
export const socket = initSocket(store.dispatch, name);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);
registerServiceWorker();
