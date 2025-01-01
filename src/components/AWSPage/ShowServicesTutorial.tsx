import introduction from './AplicationInitial/Introduction';
import { ServicesTutorial } from './ServicesTutorial';
import diagramaInitial from './AplicationInitial/DiagramaInitial.png';

type ApplicationInitial = {
	serviceSelected: string;
};

export default function ShowServicesTutorial({ serviceSelected }: ApplicationInitial) {
	const cssDivMain: React.CSSProperties = {
		backgroundColor: 'white',
		color: 'white',
		fontSize: '1.6em',
		height: '100%',
		padding: '1rem',
		fontFamily: 'pixel, Arial, sans-serif',
	}

	const cssParagraph: React.CSSProperties = {
		fontSize: '2rem',
		fontFamily: 'pixel, Arial, sans-serif',
		color: 'black',
	}

	function handlePhotoOrIntroduction(serviceSelected: string) {
		if (serviceSelected === 'fotoFinal') {
			return (
				<div style={cssDivMain}>
					<p style={cssParagraph}>
						No final de cada estágio, deixarei uma representação visual do que foi abordado. Neste primeiro estágio, vimos como subir uma aplicação na AWS da forma mais básica possível. Nos próximos estágios, iremos adicionar e melhorar a complexidade e a infraestrutura do nosso site.
					</p>
					<br />
					<p>Vemos que todo o serviço esta dentro de uma VPC e uma região</p>
					<div className='d-flex justify-content-center'>
						<img src={diagramaInitial} alt="representação em diagrama dos itens apredidos na primeira fase" />
					</div>
				</div>
			)
		}
		return introduction()
	}

	function getServicesTutorial(serviceSelected: string) {
		const service = ServicesTutorial.flat().find(item => item.tag === serviceSelected);
		if (service) {
			return (
				<div className='text-dark'>
					<h1> {service.tag} - {service.service}</h1>

					<br></br>
					<h3>Explicação oficial</h3>
					<div>{service.explanation}</div>

					<br></br>
					<h3>Explicação Simplificada em ordem</h3>
					<div>{service.simplifiedExplanation}</div>
				</div>
			)
		}
		return handlePhotoOrIntroduction(serviceSelected)
	}

	return (
		<div style={cssDivMain}>
			{getServicesTutorial(serviceSelected)}
		</div>
	);
}
