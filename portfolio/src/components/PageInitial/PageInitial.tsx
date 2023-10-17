import './PageInitial.css';
import Projects from './Projects';

export default function PagInitial() {
	return (
		<div className="row container justify-content-center m-auto">
			<div className='col-md-4 col-sm-12 rounded bg-light mb-3 p-3'>
				<p className='fs-3 fw-bold mb-2'>Informações Relevantes</p>
				<ul>
					<li>
						<p>Labs</p>
					</li>
					<li>
						<p>Front-end</p>
					</li>
					<li>
						<p>Facul</p>
					</li>
				</ul>
			</div>

			<div className='col-md-7 col-sm-12 ms-md-3' id='projetos-information'>
				<Projects />
			</div>
		</div>
	);
}
