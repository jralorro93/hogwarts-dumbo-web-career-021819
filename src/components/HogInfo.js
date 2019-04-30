import React from 'react'

const HogInfo = (props) => {

  return(
    <div className="pigTile">
      <li>Name: {props.name} </li>
      <li>Specialty: {props.specialty}</li>
      <li>Greased: {props.greased} </li>
      <li>Medal: {props['highest medal achieved']}</li>
      <li>Weight: {props['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']}
    </div>
  )


}

export default HogInfo;
