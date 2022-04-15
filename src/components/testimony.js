import React from 'react';
import '../styles/testimony.css';

function Testimony(props) {
  return (
    <div className='container-testimony'>
      <img
        className='image-testimony'
        src={require(`../images/testimony-${props.image}.png`)} 
        alt='emmas photography' />
      <div className='container-text-testimony'>
        <p className='name-testimony'>{props.name} in {props.country}</p>
        <p className='position-testimony'>{props.position} at {props.company}</p>
        <p className='text-testimony'>"{props.testimony}"</p>
      </div>
    </div>
  );
}

export default Testimony;