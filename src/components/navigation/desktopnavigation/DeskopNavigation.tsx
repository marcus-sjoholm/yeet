import './DeskopNavigation.css'
import { useHistory } from 'react-router-dom'
import RoutingPath from '../../../routes/RoutingPath'
import HomeButton from '../../../assets/images/home.png'
import GalleryButton from '../../../assets/images/gallery.png'


export const DeskopNavigation = () => {
	const history = useHistory()


	return (
		<div className='desktopNavigationWrapper'>
			<img src={HomeButton} className='home' onClick={() => history.push(RoutingPath.homeView)} />
			<img src={GalleryButton} className='gallery' onClick={() => history.push(RoutingPath.galleryView)} />
			<span className='fact' onClick={() => history.push(RoutingPath.factView)}>Fakta</span>
		</div>
	)
}