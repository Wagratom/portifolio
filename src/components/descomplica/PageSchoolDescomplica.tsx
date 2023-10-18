import SchoolInformation from './IntroSchoolDescomplica';
import Projects42 from './Projects42';

export default function PageSchoolDescomplica() {
	return (
		<div className='container row g-0 justify-content-center m-auto'>
			<div className='col-md-4 col-sm-12 rounded bg-light mb-3 p-3'>
				<SchoolInformation />
			</div>
			<div className='col-md-7 col-sm-12 ms-md-3' id='projetos-information'>
				<Projects42 />
			</div>
		</div>
	);
}
