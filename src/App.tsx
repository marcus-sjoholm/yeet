import './assets/global/Global.css'
import { Routes } from './routes/Routes'
import { Navigation } from './components/navigation/Navigation'

export const App = () => {
	return (
			<Routes>
				<Navigation />
			</Routes>
	)
}

export default App
