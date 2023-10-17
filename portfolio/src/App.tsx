import './App.css';
import PagSchool from './components/42school/PagSchool';
import PagInitial from './components/initialPage/PagInitial';
import Perfil from './components/perfil-initial/Perfil';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

function App() {
	return (
		<div className="App container">
			<Perfil />
			<BrowserRouter>
				<Routes>
					<Route path="/42school" element={<PagSchool />} />
					<Route path="/" element={<PagInitial />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
