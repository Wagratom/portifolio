import './Home.css';
import Projects from './Projects';

export default function Home() {
	return (
		<div className="row container g-0 m-auto">
			<div className='col-md-4 col-sm-12 mb-3'>
				<div className='rounded bg-light me-md-3 p-3'>
					<p className='fs-4 fw-bold'>Links Relevantes</p>
					<ul className='d-flex flex-column' id='important-links'>
						<a href='/42school'>42 Sâo Paulo</a>
						<a href='/descomplica'>Descomplica</a>
					</ul>
				</div>
			</div>
			<Projects />
		</div>
	);
}
