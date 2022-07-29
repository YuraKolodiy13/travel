import React, {memo} from "react";
import {Link} from "react-router-dom";
import './TopHotelCard.scss';
import Rating from "@mui/material/Rating";
import Button from "../Button/Button";

const TopHotelCard = ({item}) => {

  if(!item) return null;

  return (
    <div className='TopHotelCard'>
      <Link to={item.link.replace('/hotel', '/countries')} className="topHotelCard__wrapper">
        <div className="topHotelCard__img">
          <img src={`https://img4.farvater.travel/mapkey/${item.hotel.mapKey}/0?size=thumb360`} alt=""/>
        </div>
        <div className="topHotelCard__info">
          <div className="topHotelCard__location">
            <Rating name="half-rating-read" defaultValue={item.hotel.starId} precision={0.5} readOnly />
            <h3>{item.hotel.name}</h3>
            <cite>{item.country.name}, {item.resort.name}</cite>
          </div>
          <div className="topHotelCard__price">
            <div className="topHotelCard__rate">
              {!!item.hotel.reviewsCount && (
                <span>{item.hotel.reviewsCount} review{item.hotel.reviewsCount === 1 ? '' : 's'}</span>
              )}
              <div className='topHotelCard__rating'>{item.hotel.rate}</div>
            </div>
            <Button title='price' color='primary'/>
          </div>

        </div>
      </Link>
    </div>
  )
};

export default memo(TopHotelCard);