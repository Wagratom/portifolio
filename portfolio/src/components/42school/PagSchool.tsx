import SchoolInformation from './Information';
import Projects42 from './Projects42';
import './astronauta.css';
export default function PagSchool() {
	return (
		<div className='row mt-5 g-0'>
			<div className='col-md-4 col-sm-12 rounded astronauta mb-3 p-3'>
				<SchoolInformation />
			</div>
			<div className='col-md-7 col-sm-12 ms-md-3' id='projetos-information'>
				<Projects42 />
			</div>
		</div>
	);
}
