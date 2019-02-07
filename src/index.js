import React from 'react';
import ReactDOM from 'react-dom';

import ObservableStore from './store';
import App from './App';


ReactDOM.render(<App store={ObservableStore}/>, document.getElementById('root'));
