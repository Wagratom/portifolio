import luffySorrindo from '../../static/fotoPerfil.jpg';
import './Perfil.css';
import PersonalInformation from './PersonalInformation';
import SchoolStatusInfo from './SchoolStatusInfo';

export default function Perfil() {
	return (
		<div className='bg-light rounded mb-5 container' style={{ marginTop: '100px' }}>
			<div className='borda-foto'>
				<div className='div-inicial'>
					<img src={luffySorrindo} className="App-logo" alt="logo" />
				</div>
			</div>
			<PersonalInformation />
			<hr></hr>
			<SchoolStatusInfo />
		</div>
	);
}
