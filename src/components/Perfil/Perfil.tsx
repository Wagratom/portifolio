import './Perfil.css';
import PersonalInformation from './PersonalInformation';
import SchoolStatusInfo from './SchoolStatusInfo';
import PhotoPerfil from './PhotoPerfil';

export default function Perfil() {
	return (
		<div className='bg-light rounded mb-5 container p-2' style={{ marginTop: '100px' }}>
			<PhotoPerfil />
			<PersonalInformation />
			{/* <hr></hr> */}
			{/* <SchoolStatusInfo /> */}
		</div>
	);
}
