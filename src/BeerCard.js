import React from 'react';
import { useState } from 'react'

import './beerCard.css'
import 'boxicons'

function BeerCard(props) {
  const [like, setLike] = useState(false)
  return(
  <div className='appCard'>
    <div className='beerCard'>
      <img className='beerImg' src={props.image_url}></img>
        <ul className='beerList'>
          <li>{props.name}</li>
          <li>{props.first_brewed}</li>
          <li>{props.tagline}</li>
          <li>{props.description}</li>
        </ul>
    </div>
    <i className='likeButton'>
      Like
      <box-icon
        type="solid"
        style={{paddingLeft: '8px'}}
        color={like ? "#FF00e6" : ""} 
        name="heart"
        onClick={() => like ? setLike(false) : setLike(true)}
      />
    </i>
  </div>
  )
}

export default BeerCard