import './App.css';
import PagSchool from './components/42school/PagSchool';
import PagInitial from './components/initialPage/PagInitial';
import Perfil from './components/InitialPerfil/Perfil';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import NavBar from './components/navBar/NavBar';

function App() {
	return (
		<div className="App">

			<BrowserRouter>
				<NavBar />
				<Perfil />
				<Routes>
					<Route path="/42school" element={<PagSchool />} />
					<Route path="/" element={<PagInitial />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
