import './App.css';
import Perfil from './components/perfil-initial/Perfil';
import ShowProjectsFormatted from './components/projetos/ShowProjectsFormatted';

function App() {
	return (
		<div className="App container">
			<Perfil />
			<div className='row mt-5'>
				<div className='col-4 bg-light rounded'>
					<h2>Projetos</h2>
					<p>Vou comentar sobre alguns projetos que desenvolvi durante meu aprendizado em C/C++.</p>
				</div>
				<div className='ms-5 col-7' id='projetos-information'>
					<ShowProjectsFormatted />
				</div>

			</div>
		</div>
	);
}

export default App;
