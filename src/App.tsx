import './App.css';
import PagSchool from './components/42school/42school';
import PagInitial from './components/PageInitial/PageInitial';
import Perfil from './components/Perfil/Perfil';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

function App() {
	return (
		<div className="App">
			<BrowserRouter>
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
