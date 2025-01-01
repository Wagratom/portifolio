export default function Introduction() {
	const cssParagraph: React.CSSProperties = {
		color: 'black',
		fontSize: '1.5rem',
		fontFamily: 'pixel, Arial, sans-serif',
	}
	return (
		<p style={cssParagraph}>
			Estas são minhas anotações sobre como utilizar os serviços da AWS, registradas conforme fui aprendendo. Elas estão divididas em partes, começando pelos conceitos mais simples possíveis e, à medida que adquiri mais conhecimento, fui adicionando novos serviços e aumentando a complexidade. Essas anotações abordam apenas os recursos funcionais e não incluem aspectos como financeiro, ferramentas de gerenciamento, ou similares (por exemplo: AWS Cost Explorer, AWS Business, Marketplace, etc.).
		</p>
	);
}
