
export default function PersonalInformation() {
	const cssInfoProfile: React.CSSProperties = {
		color: 'white',
		fontSize: '1.5rem',
		fontFamily: 'pixel, Roboto, sans-serif',
		textAlign: 'justify',
	}
	return (
		<div style={cssInfoProfile}>
			<div id='personal-summary'>
				<h2>Wagraton Wallas</h2>
				<p>
					Olá! Sou formado pela Escola 42 São Paulo, uma renomada instituição focada em fundamentos de programação.
					Durante minha jornada, adquiri experiência com diversas tecnologias, incluindo C/C++, Python, Nestjs, JS, TS, React, SQL, Docker compose, Git, entre outras.
				</p>
				<br></br>
				<p>
					Atualmente, estou cursando Análise e Desenvolvimento de Sistemas na Faculdade Descomplica e trabalhando como ANL no Itaú Unibanco. Atuo mais no backend utilizando Terraform, Lambdas e AWS.
				</p>
			</div>
		</div>
	);
}
