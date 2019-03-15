import React, { Component } from 'react';
import './App.css';
import Button from '@material-ui/core/Button';

import Header from './components/includes/Header';

class App extends Component {
	render() {
		return (
			<div className='App'>
				<Header />
			</div>
		);
	}
}

export default App;
