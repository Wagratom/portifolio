import React from 'react'
import { ServicesTutorial } from '../ServicesTutorial'

type ServiceListProps = {
	setServiceSelected: React.Dispatch<React.SetStateAction<string>>;
};

export default function ServiceList({ setServiceSelected }: ServiceListProps) {
	const LiCss: React.CSSProperties = {
		cursor: 'pointer',
		fontSize: '1.2rem',
		fontFamily: 'pixel, Arial, sans-serif',
		padding: '0.5rem',
		listStyle: 'none',
	}
	const services = ServicesTutorial[0]
	return (
		<div>
			<ul>
				{services.map((service, index) => {
					return (
						<li style={LiCss} key={index} className='ps-2 d-flex' onClick={() => setServiceSelected(service.tag as string)}>
							<div className='row w-100'>
								<div className='col-2'>
									{service.tag.replace('(Amazon ', '').replace(')', '')}
								</div>
								<div className='col-1'>
									|
								</div>
								<div className='col-8'>
									{service.service}
								</div>
							</div>
						</li>
					)
				})}
				<li style={LiCss} onClick={() => setServiceSelected('fotoFinal')}>
					Aplicação final
				</li>
			</ul>
		</div >
	)
}
