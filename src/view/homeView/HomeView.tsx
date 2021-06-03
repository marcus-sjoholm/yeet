import './HomeView.css'
import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import RoutingPath from '../../routes/RoutingPath'

export const HomeView = () => {
	const history = useHistory()

	return (
		<div className="title">
		  <h1>Sengångaren – Ett gulligt men långsamt djur</h1>
		  <h2>1. Den tretåiga sengångaren simmar snabbare än den klättrar</h2>
		  <img
			src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV363mO-mTjpeXz_iqA2Uz9QwqPbTLGcT9fA&usqp=CAU"
			alt="sengångare"
		  ></img>
		</div>
	  );
}