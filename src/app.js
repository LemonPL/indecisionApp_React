import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp';
import 'normalize.css/normalize.css';
import './styles/styles.scss'

// below we are rendering the whole app
ReactDOM.render(<IndecisionApp />, document.getElementById('app'));

// there is normalize.css package running that normalizes .css layout on many browsers so the webpage looks the same