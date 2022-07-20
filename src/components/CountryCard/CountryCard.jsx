import './CountryCard.scss';
import React, {memo} from "react";
import {addDefaultSrc} from "../../helpers/global";
import {Link} from "react-router-dom";

const CountryCard = ({name, imgSrc}) => {
  if(!name || !imgSrc) return null;
  return (
    <li onError={addDefaultSrc}>
      <Link to={`/tours/${name}`}>
        <img
          src={`https://farvater.travel/img/country_photos/md/${imgSrc}.jpg`}
          alt=""
          onError={addDefaultSrc}
        />
        <p>{name}</p>

      </Link>
    </li>

  )
};

export default memo(CountryCard);