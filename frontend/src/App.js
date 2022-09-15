import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Page2 from './pages/Page2/Page2';
import Layout from './pages/Layout';


function App() {
	const admin=true;
	return (
		<>
			<Router>
				<Routes>
					<Route exact path="/">
						<Route path="" element={admin
						 ? (<Layout children={<Home />} />
					     ) : (<Home />)}/>
						 <Route path="page2" element={admin
						 ? (<Layout children={<Page2 />} />
					     ) : (<Home />)}/>
					</Route>
				</Routes>
			</Router>
		</>
	);
}

export default App;
