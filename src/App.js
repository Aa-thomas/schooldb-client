import 'styles/App.css';
import { useEffect } from 'react';
import axios from 'axios';
import Courses from 'components/Courses';
import { Route, Routes } from 'react-router-dom';
import CreateCourse from 'components/CreateCourse';
import UpdateCourse from 'components/UpdateCourse';
import CourseDetail from 'components/CourseDetail';
import UserSignIn from 'components/UserSignIn';
import UserSignOut from 'components/UserSignOut';
import UserSignUp from 'components/UserSignUp';
import NotFound from 'components/NotFound';
import Header from 'components/Header';
import { withContext } from 'context/UserContext';
import PrivateRoute from './PrivateRoute';

const UserSignUpWithContext = withContext(UserSignUp);
const UserSignInWithContext = withContext(UserSignIn);
const HeaderWithContext = withContext(Header);
const AuthWithContext = withContext(Authenticated);
const UserSignOutWithContext = withContext(UserSignOut);

function App() {
	useEffect(() => {
		axios('http://localhost:5000/api/users').then((result) =>
			console.log(result)
		);
	});

	return (
		<div className="App">
			<HeaderWithContext />
			<Routes>
				<Route path="/" element={<Courses />} />
				<Route path="/courses/create" element={<CreateCourse />} />
				<Route path="/courses/:id/update" element={<UpdateCourse />} />
				<Route path="/courses/:id" element={<CourseDetail />} />
				<Route path="/signin" element={<UserSignInWithContext />} />
				<Route path="/signup" element={<UserSignUpWithContext />} />
				<Route path="/signout" element={<UserSignOutWithContext />} />
				<Route path="/notfound" element={<NotFound />} />
			</Routes>
		</div>
	);
}

export default App;
