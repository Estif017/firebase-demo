import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { addDoc, collection } from 'firebase/firestore';
import { auth, db } from '../../config/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';

const CreatePostForm = () => {
	const [user] = useAuthState(auth);
	const navigate = useNavigate();
	interface createFormData {
		title: string;
		description: string;
	}

	const schema = yup.object().shape({
		title: yup.string().required('You must enter title...'),
		description: yup.string().required('You must enter description...'),
	});
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<createFormData>({
		resolver: yupResolver(schema),
	});

	const postRef = collection(db, 'posts');
	const createPost = async (data: createFormData) => {
		await addDoc(postRef, {
			...data, //data.title & data.description
			user: user?.displayName,
			userId: user?.uid,
		});
		navigate('/');
	};
	return (
		<form onSubmit={handleSubmit(createPost)}>
			<input placeholder='title....' {...register('title')} />
			<br />
			{errors.title && <p style={{ color: 'red' }}>{errors.title.message}</p>}
			<textarea
				placeholder='description....'
				{...register('description')}></textarea>
			<br />
			{errors.description && (
				<p style={{ color: 'red' }}>{errors.description.message}</p>
			)}
			<input type='submit' value='submit' />
		</form>
	);
};

export default CreatePostForm;
