import './App.css';
import PageSchool42 from './components/PageSchool42/PageSchool42';
import PagInitial from './components/home/Home';
import Perfil from './components/Perfil/Perfil';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import PageSchoolDescomplica from './components/descomplica/PageSchoolDescomplica';

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Perfil />
				<Routes>
					<Route path="/" element={<PagInitial />} />
					<Route path="/42school" element={<PageSchool42 />} />
					<Route path="/descomplica" element={<PageSchoolDescomplica />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
