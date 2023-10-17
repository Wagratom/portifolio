import { MdOutlinePlace, MdOutlineCake } from 'react-icons/md';
import { AiFillLinkedin, AiFillGithub, AiFillInstagram } from 'react-icons/ai';

export default function PersonalInformation() {
	return (
		<div className='w-75 text-center m-auto' id='infos-perfil'>
			<div id='personal-summary'>
				<h2>Wagraton Wallas</h2>
				<p>
					Sou um estudante de Engenharia de Software onde o foco principal do meu aprendizado é a programação em linguagem C/C++.<br></br>
					Além disso, estou cursando a faculdade de Análise e Desenvolvimento de Sistemas (ADS).<br></br>
					Quando não estou estudando, dedico meu tempo ao aprendizado de outras linguagens, como Python, TypeScript HTML entre outras, ampliando meu conhecimento em desenvolvimento de software.
				</p>
			</div>
			<div className='d-flex my-4 justify-content-between'>
				<div className='d-flex' id='location'>
					<MdOutlinePlace size={20} color='#000' />
					<p className='fw-bold'>Montes Claros - MG</p>
				</div>
				<div className='d-flex' id='location'>
					<MdOutlineCake size={20} color='#000' />
					<p className='fw-bold'>17 / Outubro / 2002 - 21 anos</p>
				</div>
				<div className='d-flex' id='location'>
					<a href='https://www.linkedin.com/in/wagratom-wallas-ferreira-santos-9657a421a/'>
						<AiFillLinkedin size={20} color='#000' style={{ marginLeft: '5px' }} />
					</a>
					<a href='https://www.linkedin.com/in/wagratom-wallas-ferreira-santos-9657a421a/'>
						<AiFillGithub size={20} color='#000' style={{ marginLeft: '5px' }} />
					</a>
					<a href='https://www.instagram.com/wagratom/'>
						<AiFillInstagram size={20} color='#000' style={{ marginLeft: '5px' }} />
					</a>
				</div>
			</div>
		</div>
	);
}
