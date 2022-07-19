import './CountryCard.scss';
import React from "react";
import {addDefaultSrc} from "../../helpers/global";

const CountryCard = ({name, imgSrc}) => {
  if(!name || !imgSrc) return null;
  return (
    <li onError={addDefaultSrc}>
      <img
        src={`https://farvater.travel/img/country_photos/md/${imgSrc}.jpg`}
        alt=""
        onError={addDefaultSrc}
      />
      <p>{name}</p>
    </li>

  )
};

export default CountryCard;