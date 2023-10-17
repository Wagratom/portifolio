import './App.css';
import PagSchool from './components/42school/PagSchool';
import PagInitial from './components/PageInitial/PageInitial';
import Perfil from './components/Perfil/Perfil';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
// import NavBar from './components/navBar/NavBar';

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				{/* <NavBar /> */}
				<Perfil />
				<Routes>
					<Route path="/" element={<PagInitial />} />
					<Route path="/42school" element={<PagSchool />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
