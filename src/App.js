import Home from "./components/home/Home";
// import ArticleList from "./components/article/ArticleList";
import Article from "./components/article/Article";
import Error from "./components/error/Error";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import "./App.css";
import Login from "./components/login/Login";
import Register from "./components/register/Register";

function App() {
	return (
		<Router>
			<div className='App'>
				<Header />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/login' element={<Login />} />
					<Route path='/register' element={<Register />} />
					<Route path='/article/:name' element={<Article />} />
					<Route path='*' element={<Error />} />
				</Routes>
			</div>
		</Router>
	);
}

export default App;
