import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Page2 from './pages/Page2/Page2';
import Layout from './pages/Layout';
import Page3 from './pages/Page3/Page3';
import Page5 from './pages/Page5/Page5';
import Page6 from './pages/Page6/Page6';
import Page7 from './pages/Page7/Page7';
import Page8 from './pages/Page8/Page8';
import Page9 from './pages/Page9/Page9';
import Page10 from './pages/Page10/Page10';



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
						 <Route path="page3" element={admin
						 ? (<Layout children={<Page3 />} />
					     ) : (<Home />)}/>
						 <Route path="page4" element={admin
						 ? (<Layout children={<Page5 />} /> 
					     ) : (<Home />)}/>
						 <Route path="page5" element={admin
						 ? (<Layout children={<Page6 />} /> 
					     ) : (<Home />)}/>
						 <Route path="page6" element={admin
						 ? (<Layout children={<Page7 />} /> 
					     ) : (<Home />)}/>
						 <Route path="page7" element={admin
						 ? (<Layout children={<Page8 />} /> 
					     ) : (<Home />)}/>
						 <Route path="page8" element={admin
						 ? (<Layout children={<Page9 />} /> 
					     ) : (<Home />)}/>
						 <Route path="page9" element={admin
						 ? (<Layout children={<Page10 />} /> 	
					     ) : (<Home />)}/>
						 
					</Route>
				</Routes>
			</Router>
		</>
	);
}

export default App;
