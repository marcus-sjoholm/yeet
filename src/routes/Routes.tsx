import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { HomeView } from '../view/homeView/HomeView'
import { GalleryView } from '../view/galleryView/GalleryView'
import { FactView } from '../view/factView/FactView'
import RoutingPath from './RoutingPath'
import { Footer } from '../components/footer/Footer'


export const Routes = (props: { children?:any }) => {


	return (
		<BrowserRouter>
			{props.children}
			<Switch>
				<Route exact path={RoutingPath.galleryView} component={GalleryView} />
				<Route exact path={RoutingPath.factView} component={FactView} />
				<Route component={HomeView} />
			</Switch>
			<Footer/>
		</BrowserRouter>
	)
}
