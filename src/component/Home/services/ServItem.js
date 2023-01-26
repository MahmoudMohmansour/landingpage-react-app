import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faDiamond,faPiggyBank,faDisplay,faHouseChimneyCrack,faNewspaper,faPlane } from '@fortawesome/free-solid-svg-icons'

 const ServItem = (props) => {
  return (
    <div className='box'>
        <FontAwesomeIcon icon={props.icon}/>
        <h3>{props.title}</h3>
        <p>{props.text}</p>
    </div>
  )
}
export default ServItem;
