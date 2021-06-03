import { DeskopNavigation } from './desktopnavigation/DeskopNavigation'
import { useWindowDimensions } from '../../hooks/useWindowDimensions'

export const Navigation = () => {
	const { width } = useWindowDimensions()

	const displayNavigation = () => {
		return <DeskopNavigation />
	}

	return (
		<div>
			{displayNavigation()}
		</div>
	)
}
