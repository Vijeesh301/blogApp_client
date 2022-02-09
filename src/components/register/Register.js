import React, { useEffect, useState } from "react";
import "./register.css";
import Validation from "./Validation";
import axios from "axios";

const Register = () => {
	// Storing Form Field Values
	const [formValues, setFormValues] = useState({
		username: "",
		email: "",
		password: "",
	});

	// Manage Form Error Values
	const [formErrorValues, setFormErrorValues] = useState({});

	// Flag for Form Submission Status
	const [isSubmit, setIsSubmit] = useState(false);

	// Manage Field Change
	const handleChange = (event) => {
		// console.log(event.target);
		const { name, value } = event.target; //destructuring
		setFormValues({ ...formValues, [name]: value });
		// console.log(formValues);
	};

	// Manage Form Refresh
	const handleSubmit = (event) => {
		event.preventDefault();
		setFormErrorValues(Validation(formValues));
		setIsSubmit(true);
	};

	//form submission
	const submitValues = () => {
		axios
			.post("http://localhost:5000/api/auth/register", formValues)
			.then((response) => {
				console.log(response);
			});
	};

	useEffect(() => {
		if (Object.keys(formErrorValues).length === 0 && isSubmit) {
			register();
		}
	}, [formErrorValues]);

	function register() {
		axios
			.post("https://localhost:5000/api/register", formValues)
			.then((response) => {
				alert("nnn");
				setFormValues(response.data);
			});
	}

	return (
		<>
			<div className='register'>
				<span className='registerTitle'>Register</span>
				<form className='registerForm' onSubmit={handleSubmit}>
					<label>Email</label>
					<input
						className='registerInput'
						type='text'
						name='email'
						placeholder='Enter your email...'
						required=''
						value={formValues.email}
						onChange={handleChange}
					/>
					<p className='error'>{formErrorValues.email}</p>
					<label>Username</label>
					<input
						className='registerInput'
						type='text'
						name='username'
						placeholder='Enter username...'
						required=''
						value={formValues.username}
						onChange={handleChange}
					/>
					<p className='error'>{formErrorValues.username}</p>
					<label>Password</label>
					<input
						className='registerInput'
						type='password'
						name='password'
						placeholder='Enter password...'
						required=''
						value={formValues.password}
						onChange={handleChange}
					/>
					<p className='error'>{formErrorValues.password}</p>
					<button onClick={submitValues} className='registerButton'>
						SUBMIT
					</button>
				</form>
			</div>
		</>
	);
};

export default Register;
