import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from 'shared/App';

const Root = () => (
    <BrowserRouter>
        <Provider>
            <App />
        </Provider>
    </BrowserRouter>
);

export default Root;