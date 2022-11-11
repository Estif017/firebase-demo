import { signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { auth, provider } from '../config/firebase';

const Login = () => {
	const navigate = useNavigate();
	const signInWithGoogle = async () => {
		try {
			const result = await signInWithPopup(auth, provider);
			navigate('/');
			console.log(result);
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<div>
			<p>Sign in with google to continue</p>
			<button onClick={signInWithGoogle}>sign in with google</button>
		</div>
	);
};

export default Login;
