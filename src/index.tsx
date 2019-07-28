import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import configureStore, { history } from './store';
import routes from './routes';
import { ConnectedRouter } from 'connected-react-router';
import { runWithAdal } from 'react-adal';
import { authContext } from './adalConfig';

const store = configureStore();

const DO_NOT_LOGIN = false;

runWithAdal(authContext, () => {
    RenderApp();
},DO_NOT_LOGIN);

function RenderApp() {
    ReactDOM.render(
        <Provider store={store}>
            <ConnectedRouter history={history} children={routes} />
        </Provider>, 
        document.getElementById('root'));    
}

serviceWorker.unregister();
