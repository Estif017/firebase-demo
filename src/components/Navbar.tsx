import React from 'react';
import { Link } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../config/firebase';

const Navbar = () => {
	const [user] = useAuthState(auth);

	const UserSignOut = async () => {
		await signOut(auth);
	};
	return (
		<div className='navbar'>
			<div className='links'>
				<Link to='/'>HomePage</Link>
				&emsp;
				<Link to='/login'>Login</Link>
			</div>
			{user && (
				<div className='user'>
					<p>{user.displayName}</p>
					<img src={`${user.photoURL}`} width='20' height='20' alt='' />
					<button onClick={UserSignOut}>Sign Out</button>
				</div>
			)}
		</div>
	);
};

export default Navbar;
