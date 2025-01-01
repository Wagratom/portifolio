import './astronauta.css';
import { useState } from 'react';
import { FaAngleDown } from "react-icons/fa6";
import { FaAnglesDown } from "react-icons/fa6";
import ShowServicesTutorial from './ShowServicesTutorial'
import ServiceList from './AplicationInitial/ServiceList';

export default function AWSPage() {
	const cssMainDiv: React.CSSProperties = {
		position: 'absolute',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',

		width: '80%',
		height: '80%',
		display: 'flex',
		overflow: 'auto',
	}

	const cssDivSelects: React.CSSProperties = {
		cursor: 'pointer',
		fontSize: '1.5rem',
		fontFamily: 'pixel, Arial, sans-serif',
		display: 'flex',
		alignItems: 'center',
		gap: '0.5rem',
	}

	const [nivelSelected, setNivelSelected] = useState<string>('')
	const [serviceSelected, setServiceSelected] = useState<string>('')

	function handleSelectionUser(selection: string) {
		if (selection === nivelSelected) {
			setNivelSelected('')
			setServiceSelected('')
		} else {
			setNivelSelected(selection)
		}
	}

	return (

		<div style={cssMainDiv}>
			<div className='col-md-4 col-sm-12 rounded astronauta mb-3 p-3 text-white'>
				{/* Aplicação inicial logica*/}
				<div style={cssDivSelects} onClick={() => handleSelectionUser('initial')}>
					Aplicação inicial <FaAngleDown size={11} />
				</div>
				{nivelSelected === 'initial' ? <ServiceList setServiceSelected={setServiceSelected} /> : <div></div>}

				{/* Melhorias P1 logica*/}
				<div style={cssDivSelects} onClick={() => handleSelectionUser('p2')}>
					Melhorias P1 <FaAnglesDown size={11}/>
				</div>

				{/* Melhorias P2 logica*/}
				<div style={cssDivSelects} onClick={() => handleSelectionUser('p3')}>
					Melhorias P2  <FaAnglesDown size={11}/>
				</div>
			</div>

			<div className='col-md-7 col-sm-12 ms-md-3' id='projetos-information'>
				{nivelSelected === 'initial' && <ShowServicesTutorial serviceSelected={serviceSelected} />}
			</div>
		</div>
	);
}
