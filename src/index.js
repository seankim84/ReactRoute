import React from 'react';
import ReactDOM from 'react-dom';
import Root from './client/Root';
import "./base.scss";
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
