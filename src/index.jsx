import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/app';

import '../assets/stylesheets/application.scss';

import toggleButton from './helpers/toggle_button';

const root = document.getElementById('root');
ReactDOM.render(<App />, root);

document.addEventListener('DOMContentLoaded', toggleButton);
