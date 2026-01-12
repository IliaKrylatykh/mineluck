import { Component } from 'react'
import { GAME_MODELS } from './GAME'
import { DeepReadonly } from './types'
import GameUI from './ui/GameUI'
import PixiCanvas from './pixi/PixiCanvas'
import './reset.scss'

class App extends Component {
	render() {
		return (
			<>
				<GameUI models={GAME_MODELS as DeepReadonly<typeof GAME_MODELS>} />
				<PixiCanvas />
			</>
		)
	}
}

export default App
