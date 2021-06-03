import './DeskopNavigation.css'
import { useHistory } from 'react-router-dom'
import RoutingPath from '../../../routes/RoutingPath'


export const DeskopNavigation = () => {
	const history = useHistory()


	return (
		<div className='desktopNavigationWrapper'>
			<span className='navigationHome' onClick={() => history.push(RoutingPath.homeView)}>Hem</span>
			<span className='navigationNews' onClick={() => history.push(RoutingPath.galleryView)}>Galleri</span>
			<span className='fact' onClick={() => history.push(RoutingPath.factView)}>Fakta</span>
		</div>
	)
}