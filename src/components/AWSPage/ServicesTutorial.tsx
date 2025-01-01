export const ServicesTutorial = [
	[
		{
			tag: '(Amazon EC2)',
			service: 'Amazon Elastic Compute Cloud',
			explanation: 'O Amazon EC2 é um serviço que permite executar servidores virtuais na nuvem da AWS. Você pode configurar a capacidade de processamento, memória, escolher o sistema operacional, instalar softwares e definir em qual região da AWS seu servidor vai rodar.',
			simplifiedExplanation: 'Imagine que você precisa de um computador para rodar seu site, software ou aplicativo, mas não quer comprar um novo. Com o Amazon EC2, você "aluga" um computador virtual na nuvem da AWS. A nuvem da AWS é como um supercomputador. Quando você solicita um EC2, a AWS pega uma fatia desse supercomputador com as especificações que você pediu, como processador, memória e sistema operacional, e separa para você. Depois disso, ela te entrega um IP para você acessar esse computador virtual.',
			Link: 'https://aws.amazon.com/pt/ec2/'
		},
		{
			tag: "(Amazon AMI)",
			service: "Amazon Machine Image",
			explanation: "O Amazon AMI é uma imagem que contém todas as informações necessárias para configurar uma instância EC2. Ele inclui o sistema operacional, softwares, configurações e dados de inicialização.",
			simplifiedExplanation: "Agora que temos nossa instância EC2, precisamos configurar o sistema operacional, instalar softwares e fazer outras configurações para rodar nosso site. Você pode fazer isso pegando uma AMI pronta no marketplace ou criando uma AMI personalizada. A AMI é como uma cópia do seu EC2, com tudo que você configurou, como sistema operacional, softwares e dados de inicialização. Você pode criar uma AMI a partir de uma instância EC2 existente, adquirir uma no marketplace ou criar uma do zero.",
			Link: "https://docs.aws.amazon.com/pt_br/AWSEC2/latest/UserGuide/AMIs.html"
		},
		{
			tag: '(Amazon SG)',
			service: 'Amazon Security Groups',
			explanation: 'Os Security Groups são firewalls virtuais que controlam o tráfego de entrada e saída dos recursos da AWS. Eles são essenciais para garantir a segurança das instâncias EC2 e outros recursos, permitindo que você defina quem pode acessar seus recursos e quais portas estão abertas para comunicação.(Toda instancia precisa ter um SG)',

			simplifiedExplanation: 'Agora precisamos configurar o Security Group para proteger nossa instância EC2. O Security Group é como um firewall de segurança virtual que controla quem pode acessar/sair da sua instância EC2. Iremos usa-los para abrir apenas a porta 443 (HTTPS) para o mundo, permitindo que os usuários acessem nosso site de forma segura.',
			Link: 'https://docs.aws.amazon.com/pt_br/vpc/latest/userguide/VPC_SecurityGroups.html'
		},
		{
			tag: "(Amazon EC2 IS)",
			service: "Amazon EC2 Instance Store",
			explanation: "O Amazon EC2 Instance Store é um armazenamento temporário e de alta performance diretamente conectado à instância EC2.",

			simplifiedExplanation: "Precisamos de um local para armazenar os arquivos do site. O Amazon EC2 Instance Store funciona como o HD da própria instância, o que garante uma alta performance. No entanto, ele não é persistente, ou seja, se a instância for desligada, os dados armazenados serão perdidos. Por isso, ele não é recomendado para armazenar dados importantes. Assim, usaremos o Instance Store apenas para armazenar arquivos temporários."
		},
		{
			tag: "(Amazon EBS)",
			service: "Amazon Elastic Block Store",
			explanation: "O Amazon EBS é um serviço de armazenamento de blocos que fornece volumes de armazenamento persistentes e de alta performance para instâncias EC2. Você pode criar, anexar, copiar e fazer backup de volumes EBS para armazenar dados de forma durável.",
			simplifiedExplanation: "Como o Amazon EC2 Instance Store perde os dados ao desligarmos a instância, usaremos o Amazon EBS para armazenar os arquivos de maneira durável. O Amazon EBS funciona como um HD externo que você pode anexar à sua instância EC2. Ele oferece armazenamento de alta performance e permite criar, copiar e fazer backup de volumes, garantindo que seus dados estejam sempre seguros e disponíveis."
		},
		{
			tag: '(Amazon EIP)',
			service: 'Amazon Elastic IP Address',
			explanation: 'O Amazon EIP é um serviço que fornece um endereço IP estático para seus recursos na nuvem da AWS. Você pode associar um EIP a uma instância EC2 para garantir que ela sempre tenha o mesmo endereço IP, mesmo se a instância for parada e reiniciada.',

			simplifiedExplanation: 'Agora que esta quase tudo "pronto" iremos compartilhar o IP/URLS do site com os clientes. Por padrão, toda a vez que vc reinicia a instancia EC2, ela recebe um novo IP, o que não é ideal para um site. O Amazon EIP é como um endereço fixo que você pode associar à sua instância EC2, garantindo que ela sempre tenha o mesmo endereço IP, mesmo se for parada e reiniciada. Dessa forma, você pode compartilhar o endereço IP do seu site com os clientes sem se preocupar com mudanças.',
			Link: 'https://aws.amazon.com/pt/ec2/instance-types/'
		},
		{
			tag: '(Amazon S3)',
			service: 'Amazon Simple Storage Service',
			explanation: 'O Amazon S3 é um serviço de armazenamento de objetos que oferece escalabilidade, alta disponibilidade, segurança e desempenho. Ele é projetado para armazenar e recuperar qualquer quantidade de dados de qualquer lugar na internet.',

			simplifiedExplanation: 'Agora que o site está no ar, precisamos armazenar as imagens, vídeos e outros arquivos que ele usa. O Amazon S3 é como um HD externo virtual onde você pode guardar todos esses arquivos. Ele é altamente escalável, seguro e rápido, permitindo que você armazene e recupere qualquer quantidade de dados de qualquer lugar na internet. Você pode usar o Amazon S3 para armazenar backups, arquivos de mídia, logs, entre outros, e acessá-los facilmente de qualquer lugar.',
			Link: 'https://aws.amazon.com/pt/s3/'
		},
		{
			tag: '(Amazon RDS)',
			service: 'Amazon Relational Database Service',

			explanation: 'Agora estamos quase prontos, so fala um banco de dados para armazenar as informações do site. Como não tenho muita experiencia em gerenciamento de banco de dados e não quero me preocupar com isso por enquanto, vamos usar o Amazon RDS. O Amazon RDS é um serviço de banco de dados relacional que facilita a configuração, operação e escalabilidade de bancos de dados relacionais na nuvem da AWS. Ele oferece suporte a vários motores de banco de dados, como MySQL, PostgreSQL, Oracle, SQL Server e MariaDB, e gerencia tarefas como provisionamento de hardware, aplicação de patches, backup e recuperação de dados.',
		}
	],
	[
		{
			tag: '(Amazon VPC)',
			service: 'Amazon Virtual Private Cloud (Amazon VPC)',
			explanation: 'O Amazon VPC é um serviço que permite criar uma rede virtual isolada na nuvem da AWS. Com o VPC, você pode controlar o intervalo de endereços IP, sub-redes, roteamento e gateways para conectar sua rede local com a nuvem.',
			simplifiedExplanation: 'Precisamos de uma VPC para nosso  EC2 e o RDS. Por padrão, quando você cria uma instância EC2, a AWS cria uma VPC padrão, mas é recomendado criar uma VPC personalizada para ter mais controle sobre a rede. Por enquando não iremos nos preocupar com isso, criaremos o RDS na mesma VPC que a instância EC2. e usaremos o EIP para acessar o site.',
		},
		{
			tag: '(Amazon IAM)',
			service: 'Amazon Identity and Access Management (Amazon IAM)',
			explanation: 'O Amazon IAM é um serviço que permite gerenciar o acesso aos recursos da AWS de forma segura. Com o IAM, você pode criar usuários, grupos e políticas para controlar quem pode acessar quais recursos e o que eles podem fazer com eles.',
			simplifiedExplanation: 'Agora que temos nosso site no ar, precisamos garantir que apenas as pessoas certas tenham acesso aos recursos da AWS. O Amazon IAM é como um porteiro virtual que controla quem pode acessar quais recursos e o que podem fazer com eles. Por exemplo: podemos definir quais usuários terão permissão para acessar determinados serviços, e também conseguimos especificar quais serviços podem acessar outros serviços. Além disso, podemos conceder permissões de administrador, entre outras.',
		},
	],
]

// AWS best practices
// Don't use the root account
// if you need to give access to outher people, create a new user, never give yous accounts
// use groups to manage permissions
// create polices to define strong passwords
// enable MFA
// use roles to give permissions to services


//regioes, zonas, ponto de preseça ou locais de borda
//iam
//usuarios
//grupos
//politicas
//roles / funcoes

//um grupo nao pode ser de um grupo
//um usuario pode ser de varios grupos
//um usuario pode ter varias politicas
//uma politica pode ser de varios usuarios
//uma politica pode ser de varios grupos

//iam securty tools
// credecial report -> baixa um arquivo csv com todas as credenciais e informacoes de seguranca
// acess advisor -> mostra quem acessou o que e quando

//aws sdk
//aws cli
//aws console

//cloud shell

//budgets -> cria um orcamento para os servicos da aws, caso ultrapasse o orcamento, a aws envia um email


//aws quick start

//EC2 types
//instancia balanceada -> general purpose
//instancia com mais memoria -> memory optimized
//instancia com mais processamento -> computer optimized
//instancia com mais armazenamento -> storage optimized

//instancias on demand -> instancias que voce paga por hora
//instancias reservadas -> instancias que voce reserva por um periodo de tempo, e paga um valor menor (1 ano ou 3 anos)
//instancias reservadas convertiveis -> instancias reservadas que voce pode mudar o tipo de instancia
//instancias savings plans -> semelhante as reservadas, mas vc se compromete a gastar um valor por mes (1 ano ou 3 anos)
//instancias spot -> instancias que voce paga o valor que o mercado esta pagando, se o valor subir, a instancia é desligada
//instancias dedicadas host -> instancias que rodam em um servidor fisico inteiro dedicado
//instancias dedicadas -> instancias que rodam em um hardware dedicado (não compartilha o hardware com outras instancias)
//instancias capacity reservations -> instancias que voce reserva a capacidade de processamento

//voce pode vender uma instancia reservada no marketplace
//ec2 instance connect -> conecta na instancia pelo console da aws

// task definition -> define a tarefa que o container vai executar
// pode definir ate 10 containers
// pode definir a quantidade de memoria e processamento e etc
// voce define as roles na task definition e nao no container


//IMG
//voce pode criar uma imagem de uma instancia
//voce pode criar uma instancia a partir de uma imagem
// scopo: regiao


//instance store
//armazenamento temporario
//nao é persistente
//nao é recomendado para producao
//mais barato que o ebs
//mais rapido que o ebs
//scopo: instancia

//SG
// por padrao, todas as portas estao fechadas e todas as saidas estao abertas
// voce pode criar regras de entrada e saida
// voce pode criar regras de entrada e saida para ips especificos
// voce pode criar regras de entrada e saida para grupos especificos
// voce pode criar regras de entrada e saida para protocolos especificos
// voce pode criar regras de entrada e saida para portas especificas
// voce pode criar regras de entrada e saida SG especificos
// scopo: instancia

// recicycle bin
// E como uma lixeira, voce pode recuperar recursos excluidos

//EBS
// voce pode criar volumes de armazenamento
// ele e persistente
// o escopo dele e por zona de disponibilidade
// pra trasferir um volume de uma zona para outra, voce precisa criar uma snapshot e depois criar uma copia do snapshot na outra zona
// ebs multi-attach -> voce pode anexar um volume a varias instancias na mesma zona e ate 16 instancias, usar um sistema de arquivos que suporte multi-attach
// scopo: zona de disponibilidade

//types
//gp3 -> general purpose ssd -> mais barato que o gp2
//16tb -> 3000 iops -> 125mb/s
//io1 -> hightest-perfomace -> maior performance
//st1 -> low cost -> menor custo
//sc1 -> cold -> menor custo


// onde guardar os snapshots
// ebs snapshot archive -> mais barato, mas demora entre 24 e 72 horas para recuperar o volume
// fast snapshot restore -> voce pode recuperar um volume em segundos, mais caro
// recyclen bin for snapshot-> voce pode recuperar um volume excluido entre 1 dia e 1 ano vc que configura

//EFS
//precisa de SG
// pode usar o kms para criptografar os dados
// Tipo o ebs mas para varias zonas de disponibilidade?

// Semelhante ao S3, mas para arquivos e pastas

// armazenamento de arquivos
// pode ser acessado por varias instancias
// pode ser acessado por varias zonas



//vertical scalability
// aumenta a instancia como hardware, mais memoria, mais processamento, mais armazenamento e etc

//horizontal scalability
// aumenta a instancia como software, mais instancias, mais servidores, mais bancos de dados e etc

//high availability
// alta disponibilidade, o sistema esta sempre disponivel, geralmente 2 regioes, em 2 zonas de disponibilidade

//elb

// aplication load balance -> http, https, http2, websocket
// network load balance -> tcp, udp -> performace auta e baixa latencia

// AWSALB, AWSALBAPP, ou AWSALBTG -> dns do load balancer
//cooldown period -> tempo que a instancia fica indisponivel
// health check -> verifica se a instancia esta saudavel
// target tracking -> mantem a metrica em um valor especifico
// step scaling -> aumenta a instancia conforme a demanda

// gateway load balance -> tcp, udp, http, https -> redireciona o trafego para varios servicos
// sticky session -> mantem a sessao do usuario na mesma instancia
// cross zone load balance -> distribui o trafego entre as zonas de disponibilidade
// scope -> regiao
// usa SG
// vc consegue configurar o SG do load balancer com o SG das instancias
// distribui o trafego entre as instancias
// health check
// pode ser interno ou externo
// X-Forwarded-For -> mostra o ip do usuario


//ASG
// dynamic scalability -> aumenta e diminui o numero de instancias conforme a demanda / data / hora
// predictible scalability -> aumenta e diminui seguindo metricas pre definidas


//aurora
// banco de dados relacional
// compativel com mysql e postgresql
//automatic fall over -> se o banco cair, ele muda para outro banco
// automatic backup -> faz backup automatico
// isolation -> isola o banco de dados
// industry standard -> segue os padroes da industria
// performance -> alta performance
// push button scaling -> aumenta e diminui conforme a demanda
// automatic patching -> faz patch automatico
// advanced security -> seguranca avancada
// serverless monitoring -> monitoramento serverless
// routine maintenance -> manutencao de rotina
// backtracking -> volta no tempo
// global database -> banco de dados global
// scope -> regiao
// usa sg

//rds
// banco de dados relacional
// suporta varios tipos de banco de dados
// gerenciado pela aws
// rds proxy -> proxy para o banco de dados
// aceita mysql, postgresql, oracle, sql server, mariadb
//scope -> regiao

//elasticache
// ajuda a gerenciar redis e memcached
// cache de dados
// aumenta a performance
// diminui a latencia
// suporta varios tipos de cache
// scope -> regiao

//memorydb for redis
// banco de dados em memoria
// alta performance
// alta disponibilidade
// compativel com redis
// gerenciado pela aws
// scope -> regiao

//s3 event notification
// notifica quando um arquivo é adicionado, deletado ou modificado
// pode ser usado para sincronizar arquivos
// pode enviar o enveto para sns, sqs, lambda

//s3 baseline performance
// 100 PUT, COPY, POST, LIST requests per second
// 300 GET, SELECT requests per second

//s3 sse -> server side encryption
// sse-s3 -> a aws gerencia a chave de criptografia
// sse-kms -> a aws gerencia a chave de criptografia, mas voce pode gerenciar a chave
// sse-c -> voce gerencia a chave de criptografia
// x-amz-server-side-encryption -> "AE256" header para informar a criptografia
// x-amz-server-side-encryption -> "aws:kms" header para informar a criptografia

//amazon eventbridge
// serve para notificar, automatizar, integrar e etc
// antigo cloudwatch events
// eventos de varios servicos


//placementStrategy -> estrategia de distribuicao de containers
//ramdom, spread, binpack -> estrategias de distribuicao de containers

//placementConstraint -> restricao de distribuicao de containers

//amazon ecr -> elastic container registry
// armazena imagens de containers
// compativel com docker


//elastc benstalk
// gerencia aplicacoes web
// gerencia infraestrutura

// web server environment -> ambiente de servidor web
// load balanced, auto scaling -> balanceamento de carga, escalabilidade automatica

// worker environment -> ambiente de trabalhador
// SQS, auto scaling -> SQS, escalabilidade automatica

//elastic beanstalk roles
//webtier, worker tier, multicontainer docker

//elastic beanstalk all at once
// para tudo e atualiza tudo de uma vez

//elastic beanstalk rolling
// para uma parte e atualiza uma parte

//elastic beanstalk immutable
// cria novas instancias pra atualizar as antigas e depois desliga as antigas

//elastic beanstalk rolling with additional batch
// voce consegue da deploy nas instancias atualizadas e depois atualizar as outras

//SNS
// simple notification service
// envia notificacoes
// envia mensagem apenas uma vez por topic
// 12.000.000 assinantes por topico
// sms, email, http, https, sqs, lambda, aplicacoes
// pode filtrar as mensagens

//SQS
// simple queue service
// fila de mensagens
// pode ser padrao ou fifo
// fifo -> first in first out



//kinesis
// shard -> unidade de throughput
// producer -> envia dados para o kinesis
// consumer -> recebe dados do kinesis -> pode ser lambda, kinesis data analytics, kinesis data firehose

// partition key -> chave para distribuir os dados
// data blob -> dados que voce quer enviar
// 1GB por segundo ou 1000 mensagens

//receive partition key -> chave para receber os dados
// sequence no -> numero da mensagem pra saber onde estava
// data blob -> dados que voce recebeu

// streaming de dados
// kinesis data stream -> stream de dados
// kinesis data firehose -> recebe os dados, pode usar uma lambda pra trasnformalos, depois salva em um recipiente, s3, salvar no s3 e mandar pro amazon redshift, amazon opensearch
// kinesis data analytics -> analise de dados -> sql, data streams, data firehose


//redshift serviço de data warehouse


//cloudwatch
// monitoramento de servicos
// monitoramento de logs
// monitoramento de eventos
// monitoramento de metricas
// monitoramento de alarmes
// monitoramento de dashboards
// monitoramento de insights
// high resolution metrics -> metricas 1 segundo
// detailed monitoring -> metricas 1 minuto
// basic monitoring -> metricas 5 minutos

//cloudwatch synthetics
// monitoramento de aplicacoes
// monitoramento de sites
// monitoramento de endpoints


//eventbridge
// monitoramento de eventos

//x-ray
// monitoramento de aplicacoes, rastraceamento de aplicacoes

//openTelemetry
// monitoramento de aplicacoes, rastraceamento de aplicacoes

//cloudtrail
// monitoramento de eventos de seguranca


//cognito user pools
// autenticacao de usuarios -> login, registro, reset de senha
// autenticacao de usuarios -> social, email, telefone


//cognito identity pools
// autorizacao de usuarios -> acesso a recursos da aws
// autorizacao de usuarios -> acesso a recursos de terceiros


//codepipeline
// pipeline de integracao continua

//aprovação ao pipeline de integracao continua
// pode ser manual ou automatica


//codedeploy
// deploy de aplicacoes
//CodeDeployDefault.ECSAllAtOnce -> tudo de uma vez
//CodeDeployDefault.ECSLinear10PercentEvery5Minutes -> 10% a cada 5 minutos
//CodeDeployDefault.ECSCanary10Percent5Minutes -> 10% a cada 5 minutos



//dynamodb
// banco de dados nosql
// gerenciado pela aws
// alta disponibilidade
// operacao tracsact ->  agrupa varias operacoes em uma transacao, se casp uma falhar, todas sao desfeitas
// dynamodb accelerator -> cache para o dynamodb

//cloudFront
// CDN
// distribui conteudo para varios servicos

//resources
// invalida cache
// cached behavior -> cache de conteudo
// EC2, load balance
// Geo restriction -> restringe o acesso por regiao
// cloudFront singed url ->
// origin groups -> tenta em 1 grupo, se falhar tenta em outro


// trust advisor
// escaneia todo o ambiente da aws e recomenda
// otimização de custo, segurança, performace, tolerancia a falhas, service limites


// amazon inspector
// focadoa em segurança, vulnerabilidades e desfio das melhores praticas

// amazon macie
// faz analise de s3

// amazon garddury
// monitoramento continuo usando marchile learning, gerenciado pela aws,

// amazon shield
// fornece um suporte contra ataque de ddos
//stharnd e advanced -> advanced oferece suporte 24h 7 dias

// AWS Artifact
//O AWS Artifact é um serviço da AWS que permite que os usuários façam download de relatórios de segurança e conformidade sobre a infraestrutura da AWS sob demanda.

//suporte basico
//suporte desenvolvedor
//suporte empresarial
//suporte enterprise

//amazon neptune
// banco de dados para dados muito relacionados
//amazon elastic cache

//amazon comprehend
//amazon trascribe
//amazon textract -> digitaliza formularios
//amazon renokognition
//Amazon Polly -> transoforma texto em falas de IA

//Qual pilar do AWS Well-Architected Framework esse cenário representa?
// excelencia operacial -> A Excelência Operacional envolve a execução e monitoramento contínuosdos sistemas para garantir a entrega de valor ao cliente de forma eficiente. Isso inclui a implementação de práticas como implantação automatizada, testes contínuos, monitoramento de desempenho e disponibilidade, e adoção de uma abordagem de desenvolvimento ágil. documentacao e etc

// amazon athena
// consulta dados no S3 em csv
//https://www.youtube.com/watch?v=npe9RcSTIzI&t=43s&ab_channel=AWSLATAM

//erros
//AWS Snowball
// O AWS Snowball é um dispositivo físico seguro fornecido pela AWS para transferir grandes quantidades de dados para a nuvem de forma rápida e segura. Ele é projetado para casos em que a transferência pela Internet não é prática devido ao tamanho dos dados ou a limitações de largura de banda. Obs: recebe um dispositivo pra ajudar

//AWS IAM Access Analyzer
//O Analisador de Acesso do AWS IAM é um serviço que ajuda a identificar e corrigir políticas de acesso em relação às melhores práticas de segurança.


//AWS Storage Gateway
//O AWS Storage Gateway é um serviço que permite a integração entre o ambiente local e a Nuvem AWS. Ele fornece uma interface virtual para acesso aos serviços de armazenamento da AWS, incluindo o Amazon S3 e o Amazon Glacier.

//aws outposts (postos avançados)
//O AWS Outposts permite que as empresas implantem infraestrutura da AWS em seus próprios data centers ou em ambientes de co-localização. Com o Outposts, os usuários têm acesso aos mesmos serviços, APIs e ferramentas da AWS em seu ambiente local, oferecendo uma experiência consistente de computação em nuvem híbrida.

//VPC peering
//conecta vpcs

// AWS Pricing Calculator
//permite calcular preços futuros

//AWS Transit Gateway
//é um serviço da AWS que permite interconectar milhares de VPCs (Virtual Private Clouds) em várias contas da AWS de forma fácil e escalável. Ele atua como um hub centralizado para a conectividade entre VPCs, simplificando o gerenciamento e reduzindo os custos operacionais.

//Amazon AppStream 2.0
//fornce acesso a aplicativos de desktop

//Amazon Comprehend
//é um serviço de processamento de linguagem natural (NLP) que pode ser usado para extrair informações valiosas de texto,




// AWS DMS.
// Ele permite migrar dados de um banco de dados local para o Amazon RDS de maneira fácil e segura, com pouco ou nenhum tempo de inatividade.
















//aws discovery service

//AWS Storage Gateway
//é um serviço que conecta aplicativos de software locais com armazenamento baseado em nuvem.

//gateway NAT
//é um serviço que permite que instâncias em uma sub-rede privada se conectem à Internet ou a outros serviços da AWS, mas impede a Internet de iniciar uma conexão com essas instâncias. O Internet Gateway é um serviço que permite a comunicação entre instâncias em uma VPC e a Internet.

//Amazon Lightsail
//tipo um EC2 so que mais simples

// aws quicksight
// ferramenta de visualizacao de dados

// aws consult partner
// parceiros da aws

//aws service catalog
// amazon ducumentdb
// amazon billing
//aws maneged services
//

//stander
//glacier
//infraquets acess

//AWS Suporte ao desenvolvedor da AWS
//horario comercial
//API AWS Health

//AWS suporte busines
//orientações
//tempo de resposta critico em 5m

// AWS Enterprise Support
//Tem um TAM, um especialista dedicado
//suporte a integração a software de terceiros
