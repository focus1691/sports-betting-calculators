import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'
import { createStore  } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import rootReducer from "./reducers/betsReducer";
import { CookiesProvider } from 'react-cookie';
import ReactGA from 'react-ga';

ReactGA.initialize('UA-80493782-2');
ReactGA.pageview(window.location.pathname + window.location.search);

const persistConfig = {
	key: 'root',
	storage,
	blacklist: ["ui", "router"]
}

const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(persistedReducer);
persistStore(store);

ReactDOM.render(
	<Provider store={store}>
		<CookiesProvider>
			<App />
		</CookiesProvider>
	</Provider>,
	document.getElementById('root'));

serviceWorker.unregister();