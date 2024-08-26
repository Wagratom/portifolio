import { Projeto } from '../typeData/Projetos';

const projetos: Projeto[] = [
	{
		name: 'Libft',
		objective: 'Criação de mini biblioteca em C',
		bonus: 'Criação de funções adicionais para linked list',
		tags: ['C', 'Makefile', 'Ty Primitivos', 'Ponteiros', 'Manipulação de Memoria', 'Linked List', 'Recursão', '...']
	},
	{
		name: 'Get Next Line',
		objective: 'Criação de função que lê linha por linha de um arquivo',
		bonus: 'Ler de múltiplos arquivos e ler de múltiplos file descriptors',
		tags: ['File Descriptors', 'Variáveis estáticas']
	},
	{
		name: 'Printf',
		objective: 'Recriação da função printf da biblioteca padrão do C',
		bonus: 'Gerencie os sinalizadores: "#, ,+,-0." e a largura mínima do campo (Sim, um deles é um espaço)',
		tags: ['funções variádicas', 'Estruturação de dados', 'Structs']
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
		tags: ['Manipulação de Matrizes', 'MiniLibX', 'Sprites']
	},
	{
		name: 'Pipex',
		objective: 'Projeto de manipulação de pipes para executar comandos de shell e redirecionar arquivos.',
		bonus: 'Suporte para múltiplos pipes e operadores "<<" e ">>" quando o primeiro parâmetro é "here_doc".',
		tags: ['Pipes', 'Processos', 'Shell Commands', 'Redirecionamento de I/O']
	},
	{
		name: 'Push Swap',
		objective: 'Projeto de ordenação de pilhas de inteiros. Usar a menor lista de instruções para ordená-los.',
		bonus: 'Criar um programa "checker" para verificar a precisão das instruções geradas pelo push_swap.',
		tags: ['Pilhas', 'Algoritmos de Classificação', 'Complexidade', 'Instruções', 'Validação']
	},

	{
		name: 'Minishell',
		objective: 'Desenvolver um shell que permite a execução de comandos, manipulação de processos e redirecionamento de I/O.',
		bonus: 'Implementar recursos avançados, como operadores lógicos "&&" e "||", expansão de curingas "*", e suporte para prioridades com parênteses.',
		tags: ['Redirecionamento de I/O', 'Variáveis de Ambiente', 'Manipulação de Processos']
	},
	{
		name: 'Philo',
		objective: 'Simular threads representando filósofos em uma mesa redonda, onde eles comem, pensam e dormem, evitando a fome.',
		bonus: 'Implementar uma versão de bônus do programa que utiliza processos e semáforos em vez de threads e mutexes.',
		tags: ['Manipulação de Threads', 'Mutexes', 'Semáforos']
	},
	{
		name: 'Net_Practice',
		objective: 'Realizar exercícios práticos para aprender sobre redes e configuração de redes em uma interface de treinamento.',
		bonus: 'Completar 10 níveis de exercícios de configuração de redes, entendendo o funcionamento do endereçamento TCP/IP.',
		tags: ['Redes', 'TCP/IP', 'Configuração de Redes', 'Masking', 'Subnetting']
	},
	{
		name: 'cub3D',
		objective: 'Criar uma representação 3D "realista" de uma perspectiva de primeira pessoa, usando princípios de Ray-Casting.',
		bonus: 'Adicionais colisões com paredes, minimapa, portas que podem abrir e fechar, sprites animados e rotação do ponto de vista com o mouse.',
		tags: ['Gráficos 3D', 'Ray-Casting', 'Mapeamento', 'Interatividade']
	},
	{
		name: 'CPP',
		objective: '10 modulos de C++ para aprender os conceitos básicos da linguagem. E orientação a objetos.',
		tags: ['C++ 98', 'Classes', 'Orientação a Objetos', 'iteratores', 'referencias', ' ...']
	},
	{
		name: 'Inception',
		objective: 'Subir uma aplicação Docker usando docker-compose para criar contêineres para NGINX, WordPress e MariaDB, seguindo regras específicas. (Não usar DockerHub, entre outras)',
		bonus: 'Cache Redis para WordPress, servidor FTP, site estático, Adminer e serviço de escolha.',
		tags: ['Docker-compose', 'Volumes', 'Networks', 'Dockerfiles', 'Administração de Sistemas']
	},
	{
		name: 'Webserv',
		objective: 'Desenvolver um servidor HTTP em C++ 98, capaz de lidar com multiplos clientes e suportar métodos como HTTP, GET, POST, DELETE. Status de erro...',
		bonus: 'Bônus: Adicionar suporte a cookies e gerenciamento de sessões, lidar com vários programas CGI.',
		tags: ['Protocolo HTTP', 'Comunicação Websocket', 'CGI', 'Sockets', 'Manipulação de I/O', 'NGINX', '...']
	},
	{
		name: 'Transcendence',
		objective: 'Desenvolver um jogo web multiplayer em tempo real de Pong, com funcionalidades como loja, chat, e partidas 1x1.',
		tags: ['Nestjs', 'React', 'Docker compose', 'Infra', 'ORM', 'Design Patterns', 'Modelagem de Dados', '...']
	}
];

export default function Projects42() {
	const cssDivMain: React.CSSProperties = {
		color: 'black',
		fontSize: '1.6rem',
		fontFamily: 'pixel, Arial, sans-serif',
	}

	return (
		<div style={cssDivMain}>
			<div className='mb-3 bg-light p-3 rounded shadow-sm'>
				<p>Os projetos foram organizados em uma progressão de dificuldade, com cada um abordando os principais
					pontos que se tornarão alicerce para os projetos subsequentes. Por exemplo, o conhecimento em linguagem C
					e o uso de Makefile são elementos essenciais que perpassam todos os projetos.
					<br></br><strong>Obs: Os projetos nunca devem
						vazar memoria nem fechar por motivos inesperados (segfault)</strong></p>
			</div>

			{projetos.map((projeto) => (
				<div className='mb-3 bg-light p-3 rounded shadow-sm'>
					<p><strong>Name: </strong>{projeto.name}</p>
					<p className='ms-3'><strong>Objetivo: </strong>{projeto.objective}<br></br>
						<strong>Bonus: </strong>{projeto.bonus}</p>
					<hr className=''></hr>
					<div className='d-flex flex-wrap'>
						{
							projeto.tags.map((tag) => (
								<p
									style={{ backgroundColor: '#8080806e' }}
									className='ms-3 fw-bold border p-2 rounded'
								>
									{tag}
								</p>
							))
						}
					</div>
				</div>
			))}
		</div>
	);
}
