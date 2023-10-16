import { Projeto } from './typeData/Projetos';

const projetos: Projeto[] = [
	{
		name: 'Libft',
		objective: 'Criação de mini biblioteca em C',
		bonus: 'Criação de funções de lista encadeada adicionais para a biblioteca',
		tags: ['C', 'Makefile']
	},
	{
		name: 'Get Next Line',
		objective: 'Criação de função que lê linha por linha de um arquivo',
		bonus: 'Ler de múltiplos arquivos e ler de múltiplos file descriptors',
		tags: ['C', 'Makefile']
	},
	{
		name: "Printf",
		objective: "Recriação da função printf da biblioteca padrão do C",
		bonus: `Gerencie os sinalizadores: '#, ,+,-0.' e a largura mínima do campo (Sim, um deles é um espaço)`,
		tags: ["C", "Makefile"]
	}
];

export default function ShowProjectsFormatted() {
	return (
		<div>
			{projetos.map((projeto) => (
				<div className="bg-light rounded p-3 mb-3">
					<p><strong>Name: </strong>{projeto.name}</p>
					<div className='ps-2'>
						<p><strong>Objetivo: </strong>{projeto.objective}<br></br>
							<strong>Bonus: </strong>{projeto.bonus}</p>
					</div>
					<hr className='mb-1'></hr>
					<div className='d-flex'>
						{projeto.tags.map((tag, index) => (
							<p className={index === 0 ? 'ms-2 fw-bold' : 'ms-4 fw-bold'}>#{tag}</p>)
						)}
					</div>
				</div>
			))}
		</div>
	);
}
