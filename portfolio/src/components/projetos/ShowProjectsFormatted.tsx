import { Projeto } from './typeData/Projetos';

const projetos: Projeto[] = [
	{
		name: 'Libft',
		objective: 'Criação de mini biblioteca em C',
		bonus: 'Criação de funções de lista encadeada adicionais para a biblioteca',
		tags: ['C', 'Makefile', 'Ponteiros']
	},
	{
		name: 'Get Next Line',
		objective: 'Criação de função que lê linha por linha de um arquivo',
		bonus: 'Ler de múltiplos arquivos e ler de múltiplos file descriptors',
		tags: ['C', 'Makefile', 'File Descriptors', 'Variáveis estáticas']
	},
	{
		name: 'Printf',
		objective: 'Recriação da função printf da biblioteca padrão do C',
		bonus: 'Gerencie os sinalizadores: "#, ,+,-0." e a largura mínima do campo (Sim, um deles é um espaço)',
		tags: ['C', 'Makefile', 'funções variádicas' , 'Estruturação de dados']
	},
	{
		name: 'Born2beRoot',
		objective: 'Criar e configurar uma máquina virtual, (SO) seguindo instruções específicas.',
		bonus: 'Configurar serviços adicionais e abrir portas adicionais, desde que as regras do firewall sejam ajustadas de acordo.',
		tags: ['Virtualização', 'Linux', 'Segurança']
	},
	{
		name: 'So_Long',
		objective: 'Criar um jogo 2D simples, seguindo as regras de um mapa específico.',
		bonus: 'fazer o jogador perder ao tocar em um inimigo patrulheiro, adicionar animação / exibir a contagem de movimentos diretamente na ',
		tags: ['Raycast', 'MiniLibX', 'C']
	}

];

export default function ShowProjectsFormatted() {
	return (
		<div>
			{projetos.map((projeto) => (
				<div className='mb-3 bg-light p-3 rounded shadow-sm'>
					<p><strong>Name: </strong>{projeto.name}</p>
					<p className='ms-3'><strong>Objetivo: </strong>{projeto.objective}<br></br>
						<strong>Bonus: </strong>{projeto.bonus}</p>
					<hr className=''></hr>
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
