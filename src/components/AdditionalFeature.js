import React from 'react';

const AdditionalFeature = props => {
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button" onClick={() => props.buyItem => addAction(props.features)}>Add</button>
      {props.name} (+{props.price})
    </li>
  );
};

export default AdditionalFeature;
