import './DeskopNavigation.css'
import { useHistory } from 'react-router-dom'
import RoutingPath from '../../../routes/RoutingPath'
import HomeButton from '../../../assets/images/home.png'
import GalleryButton from '../../../assets/images/gallery.png'
import InfoButton from '../../../assets/images/info.png'


export const DeskopNavigation = () => {
	const history = useHistory()


	return (
		<div className='desktopNavigationWrapper'>
			<img src={HomeButton} className='home' onClick={() => history.push(RoutingPath.homeView)} />
			<img src={GalleryButton} className='gallery' onClick={() => history.push(RoutingPath.galleryView)} />
			<img src={InfoButton} className='info' onClick={() => history.push(RoutingPath.factView)} />

		</div>
	)
}