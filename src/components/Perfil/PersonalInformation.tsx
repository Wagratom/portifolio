import { MdOutlinePlace, MdOutlineCake } from 'react-icons/md';
import { AiFillLinkedin, AiFillGithub, AiFillInstagram } from 'react-icons/ai';

export default function PersonalInformation() {
	return (
		<div className='w-75 text-center m-auto' id='infos-perfil'>
			<div id='personal-summary'>
				<h2>Wagraton Wallas</h2>
				<p>
					Olá! Sou formado pela Escola 42 São Paulo, uma renomada instituição focada em fundamentos de programação.
					Durante minha jornada, adquiri experiência com diversas tecnologias, incluindo C/C++, Shell, Python, React, Node.js, SQL, Docker, Git, entre outras.
				</p>
				<br></br>
				<p>
					Atualmente, estou cursando Análise e Desenvolvimento de Sistemas na Faculdade Descomplica e estagiando no Itaú,
					onde colaboro com o monitoramento de equipamentos e agências. Meu objetivo é encontrar uma oportunidade como desenvolvedor full remote.
				</p>
			</div>
			<div className='row mt-2'>
				<div className='col-md-4'>
					<MdOutlinePlace size={20} color='#000' />
					<p className='fw-bold'>São Paulo - SP</p>
				</div>
				<div className='col-md-4'>
					<MdOutlineCake size={20} color='#000' />
					<p className='fw-bold'>17 / Outubro / 2002 - 21 anos</p>
				</div>
				<div className='col-md-4 d-flex justify-content-center align-items-center'>
					<a href='https://www.linkedin.com/in/wagratom-wallas-ferreira-santos-9657a421a/'>
						<AiFillLinkedin size={20} color='#000' style={{ marginLeft: '5px' }} />
					</a>
					<a href='https://github.com/Wagratom'>
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
