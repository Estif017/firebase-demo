import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import CreatePost from './pages/create post/CreatePost';
import Homepage from './pages/Homepage';
import Login from './pages/Login';

function App() {
	return (
		<div className='App'>
			<Router>
				<Navbar />
				<Routes>
					<Route path='/' element={<Homepage />} />
					<Route path='/login' element={<Login />} />
					<Route path='/create-post' element={<CreatePost />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
