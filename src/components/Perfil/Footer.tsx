import { IoLogoInstagram } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { AiOutlineLinkedin } from "react-icons/ai";

export default function FolderPerfil(): JSX.Element {
	const cssFooter: React.CSSProperties = {
		position: 'fixed',
		bottom: '0',
		left: '50%',
		transform: 'translateX(-50%)',

		padding: '5rem 5rem 5rem',
		width: '100%',
	}

	const contentFooter: React.CSSProperties = {
		display: 'flex',
		width: '100%',
		justifyContent: 'center',
	}

	const contentRedirectsIcons: React.CSSProperties = {
		display: 'flex',
		gap: '1rem',
		marginTop: '1rem',
	}

	return (
		<footer style={cssFooter}>
			<hr />
			<div style={contentFooter}>
				<div style={contentRedirectsIcons}>
					<a className="text-light" type="button" href="https://github.com/Wagratom">
						<FaGithub size={30} />
					</a>
					<a className="text-light" type="button" href="https://www.instagram.com/wagratom/">
						<IoLogoInstagram size={30} />
					</a>
					<a className="text-light" type="button" href="https://www.linkedin.com/in/wagratom-wallas-9657a421a/">
						<AiOutlineLinkedin size={30} />
					</a>
				</div>
			</div>
		</footer>
	)
}
