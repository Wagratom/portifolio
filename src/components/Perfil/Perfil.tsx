import PersonalInformation from './PersonalInformation';
import PhotoPerfil from './PhotoPerfil';
import background from '../../assets/perfil/bg.png'
import FolderPerfil from './Footer';

export default function Perfil() {
	const cssPerfil: React.CSSProperties = {
		position: 'absolute',
		left: '50%',
		top: '50%',
		transform: 'translate(-50%, -50%)',
		width: '80rem',
		height: '45rem',


		backgroundImage: `url(${background})`,
		backgroundSize: 'cover',
		backgroundPosition: 'center',
		backgroundRepeat: 'no-repeat',
	}

	const cssDivAux: React.CSSProperties = {
		position: 'relative',
		width: '80rem',
		height: '45rem',
		padding: '5rem',
	}
	return (
		<div style={cssPerfil}>
			<div style={cssDivAux}>
				<PhotoPerfil />
				<PersonalInformation />
				<FolderPerfil />
			</div>
		</div>
	);
}
