import SchoolInformation from './introduction42';
import Projects42 from './Projects42';
import './astronauta.css';

export default function PageSchool42() {
	const cssMainDiv: React.CSSProperties = {
		position: 'absolute',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',

		width: '80%',
		height: '80%',
		display: 'flex',
		flexWrap: 'wrap',
		overflow: 'auto',
	}

	return (
		<div style={cssMainDiv}>
			<div className='col-md-4 col-sm-12 rounded astronauta mb-3 p-3'>
				<SchoolInformation />
			</div>
			<div className='col-md-7 col-sm-12 ms-md-3' id='projetos-information'>
				<Projects42 />
			</div>
		</div>
	);
}
