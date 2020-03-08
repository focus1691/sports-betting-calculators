import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import rootReducer from "./reducers/arbReducer";
import { CookiesProvider } from 'react-cookie';

const persistConfig = {
	key: 'root',
	storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(persistedReducer);
const persistor = persistStore(store);

ReactDOM.render(
	<Provider store={store}>
		<CookiesProvider>
			<App />
		</CookiesProvider>
	</Provider>,
	document.getElementById('root'));

serviceWorker.unregister();