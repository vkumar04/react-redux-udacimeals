import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import reducer from './reducers';
import App from './components/App';

ReactDOM.render(<App />, document.getElementById('root'));