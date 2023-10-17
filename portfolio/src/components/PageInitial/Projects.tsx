import { Projeto } from "../typeData/Projetos";

const relevantProjects: Projeto[] = [
	{
		name: '42 Labs',
		objective: 'O 42Labs é um programa de estágio imersivo com atuação em projetos reais de empresas parceiras da escola. Tivemos a oportunidade de estagiar dentro do <a href="https://www.linkedin.com/search/results/all/?fetchDeterministicClustersOnly=true&heroEntityKey=urn%3Ali%3Aorganization%3A333329&keywords=ita%C3%BA%20unibanco&origin=RICH_QUERY_TYPEAHEAD_HISTORY&position=0&searchId=263e1154-e9e0-47b0-9530-fa3c94b14a73&sid=hrd&spellCorrectionEnabled=true">Itaú Unibanco.</a> onde fizemos uma Prova de Conceito de Inteligência Artificial Generativa. Nosso grupo foi responsável por desenvolver uma plataforma com vários serviços de IA, como CHAT, CHATBOT, Templates de códigos, entre outros.',
		tags: ['HTML', 'CSS', 'Bootstrap', 'JavaScript', 'Python', 'Flask', 'LangChain', 'Egh de Prompt'],
	},
	{
		name: 'WebSite',
		objective: 'Descrição: Após a experiência no 42 Labs, fiquei interessado em explorar o mundo do desenvolvimento front-end. Decidi dedicar meu tempo livre para criar um site, usando minha igreja como inspiração. O resultado desse projeto pode ser visualizado em <a href="https://ibacap.netlify.app/" target="_blank">IBACAP</a>. Estou ansioso para continuar explorando e aprimorando minhas habilidades nessa área.',
		tags: ['HTML', 'CSS', 'Bootstrap', 'Python', 'Flask'],
	},
];

export default function Projects() {
	return (
		<div>
			{relevantProjects.map((project) => (
				<div className='row g-0 mb-3 bg-light p-3 rounded shadow-sm'>
					<p className="fw-bold mb-2">{project.name}</p>
					<div className="col-md-8 mb-2" id='labs-itau'>
						<p className="infos-project" dangerouslySetInnerHTML={{ __html: project.objective }}></p>
					</div>
					<div className="col-md-4 d-flex flex-wrap" id='tools-itau'>
						{project.tags.map((tag) => (
							<p>{tag}</p>
						))}
					</div>
				</div>
			))}
		</div>
	);
}
