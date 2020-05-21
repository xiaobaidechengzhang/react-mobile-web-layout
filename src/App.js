import React from 'react';
import './App.css';
import Girl from './components/girl.js';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { createBrowserHistory } from 'history';


function App() {
	const browserHistory = createBrowserHistory();
	return (
		<div className="App">
      	<Router history={browserHistory}>
			<div>
				<Route path='/'  render={() => {
					return <Girl/>
				}}/>
			</div>
		</Router>         
    </div>
	);
}
export default App;