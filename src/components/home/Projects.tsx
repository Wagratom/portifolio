import { Projeto } from "../typeData/Projetos";

const relevantProjects: Projeto[] = [
	{
		name: '42 Labs',
		objective: `O 42Labs é um programa de estágio imersivo com atuação em projetos reais de empresas parceiras da 42SP.
		Tivemos a oportunidade de estagiar dentro do
		<a href="https://www.linkedin.com/search/results/all/?fetchDeterministicClustersOnly=true&heroEntityKey=urn%3Ali%3Aorganization%3A333329&keywords=ita%C3%BA%20unibanco&origin=RICH_QUERY_TYPEAHEAD_HISTORY&position=0&searchId=263e1154-e9e0-47b0-9530-fa3c94b14a73&sid=hrd&spellCorrectionEnabled=true">
		Itaú Unibanco.</a> onde fizemos uma Prova de Conceito de Inteligência Artificial Generativa.
		Nosso grupo foi responsável por desenvolver uma plataforma com vários serviços de IA, como CHAT, CHATBOT, Templates de códigos, entre outros.`,
		tags: ['HTML', 'CSS', 'Bootstrap', 'JavaScript', 'Python', 'Flask', 'LangChain', 'Engenharia de Prompt', "AWS"],
	},
	{
		name: `Estágio itaú`,
		objective: `Após o LABS, fomos contratados como estagiários devido à escassez de vagas para JR.
		Atualmente, faço parte de uma equipe responsável pelo monitoramento de equipamentos e agências. Recebemos,
		transformamos e visualizamos dados em uma plataforma front-end, permitindo a análise por outras equipes.
		Também automatizamos processos para facilitar o envio de informações.`,
		tags: ['Bootstrap', 'Js', 'Django', 'SQL', 'Python', "AWS"],
	},
	{
		name: 'Transcender',
		objective: ' Este projeto está disponível no link da 42 SP. Estou desenvolvendo uma nova versão que será finalizada em breve e hospedada na AWS para que todos possam acessar.',
		tags: ['Django', 'JS', 'SQL', 'Nginx', 'Redis', 'Docker Compose', 'AWS', '...'],
	}
];

export default function Projects() {
	return (
		<div className='col-md-8 col-sm-12' id='projetos-information'>
			{relevantProjects.map((project) => (
				<div className='row g-0 bg-light mb-3 p-3 rounded shadow-sm'>
					<p className="fw-bold">{project.name} - 2023</p>
					<div className="col-md-8 p-1" id='labs-itau'>
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
