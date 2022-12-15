import { TransformControls } from '@react-three/drei';
import React, { Fragment, useEffect, useRef, useState } from 'react'
import { useStore } from '../../store';

const TransformElement = ({children}) => {
	const { model } = useStore();
	const modelRef = useRef();

	const [mode, setMode] = useState('translate');

	useEffect(() => {
		console.log(model?.current.children.children)
	}, [model])

	const handleKeyDown = (e) => {
		if(e.key === 't'){
			setMode('translate')
		} else if (e.key === 'r'){
			setMode('rotate')
		} else if (e.key === 's') {
			setMode('scale')
		}
	}

	useEffect(() => {
		document.addEventListener('keydown', handleKeyDown);

		return () => document.removeEventListener('keydown', handleKeyDown);
	}, [])
  return (
	<Fragment>
		<mesh onClick={() => model ? useStore.setState({ model: null}) : useStore.setState({ model: modelRef})}>
			<group ref={modelRef}>
				{children}
			</group>
		</mesh>
		{ model && <TransformControls object={model.current} mode={mode}/> }
	</Fragment>
  )
}

export default TransformElement