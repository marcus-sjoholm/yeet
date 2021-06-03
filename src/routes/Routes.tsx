import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { HomeView } from '../view/homeView/HomeView'
import { GalleryView } from '../view/galleryView/GalleryView'
import { FactView } from '../view/factView/FactView'
import RoutingPath from './RoutingPath'


export const Routes = (props: { children?: React.ReactChild }) => {


	return (
		<BrowserRouter>
			{props.children}
			<Switch>
				<Route exact path={RoutingPath.galleryView} component={GalleryView} />
				<Route exact path={RoutingPath.factView} component={FactView} />
				<Route component={HomeView} />
			</Switch>
		</BrowserRouter>
	)
}
