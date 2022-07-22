import React, {memo} from "react";
import {Link} from "react-router-dom";
import './TopHotelCard.scss';

const TopHotelCard = ({item}) => {

  if(!item) return null;

  return (
    <div className='TopHotelCard'>
      <Link to={item.link.replace('/hotel', '/countries')} className="topHotelCard__wrapper">
        <div className="topHotelCard__img">
          <img src={`https://img4.farvater.travel/mapkey/${item.hotel.mapKey}/0?size=thumb360`} alt=""/>
        </div>
        <div className="topHotelCard__info">
          {item.hotel.name}
        </div>
      </Link>
    </div>
  )
};

export default memo(TopHotelCard);