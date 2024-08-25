import backgroundPhoto from '../../assets/perfil/ww.png';
import luffyFugindo from '../../assets/perfil/presencial.gif';
import luffyIndo from '../../assets/perfil/presencial.gif';
import ButtonPerfil from './ButtonPerfil';
import { useRef } from 'react';

export default function PhotoPerfil() {
	let gifLuffy = useRef<HTMLImageElement>(null);

	const mainDiv: React.CSSProperties = {
		display: 'flex',
		justifyContent: 'space-between',
		paddingTop: '1rem',
	};

	const cssImagem: React.CSSProperties = {
		height: '10rem',
		width: '20rem',
		padding: '1rem',
		borderRadius: '3rem',
		opacity: '0.5',

	}

	const cssDivImagem: React.CSSProperties = {
		height: '10rem',
		width: '20rem',
		position: 'absolute',

		backgroundImage: `url(${backgroundPhoto})`,
		backgroundSize: 'cover',
		backgroundPosition: 'center',
		backgroundRepeat: 'no-repeat',
		opacity: '0.5',
	}

	const cssButtons: React.CSSProperties = {
		display: 'flex',
		gap: '1rem',
		alignItems: 'center',
	}

	const setLuffyFugindo = () => {
		if (gifLuffy.current) {
			console.log(gifLuffy.current.src);
			gifLuffy.current.src = luffyFugindo;
		}
	}

	const setLuffyIndo = () => {
		if (gifLuffy.current) {
			gifLuffy.current.src = luffyIndo;
		}
	}

	return (
		<div style={mainDiv}>
			<div style={cssButtons}>
				<ButtonPerfil
					content="Remoto"
					type="button"
					function={setLuffyIndo}
				/>
				<ButtonPerfil
					content="Presencial"
					type="button"
					function={setLuffyFugindo}
				/>
			</div>
			<div style={{ display: 'flex' }}>
				<img
					style={cssImagem}
					src={luffyFugindo} alt="logo"
					ref={gifLuffy}
				/>
				<div style={cssDivImagem}> </div>
			</div>
		</div>
	);
}
