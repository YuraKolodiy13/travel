import React, {useEffect} from "react";
import './HotelCard.scss';
import {SEARCH_FORM_REQUEST} from "../../actions/general";
import {useDispatch} from "react-redux";

const HotelCard = ({item}) => {
  return (
    <div className='HotelCard'>
      <div className="HotelCard__img">
        <img src={item.photo} alt=""/>
      </div>
      <div className="HotelCard__info">
        <a href={`${item.hotelUrl}/q=${item.SystemKey}`}>{item.hotel.value}</a>
        ${item.price}

        <ul>
          {item.flyInclude && <li>Включно з перельотом ({item.cityFromName})</li>}
          <li>Виліт {('0' + new Date(item.checkIn.value).getDate()).slice(-2)}.{('0' + (new Date(item.checkIn.value).getMonth() + 1)).slice(-2)}</li>
          <li>На {item.nights} ночей</li>
          <li>Ціна за {item.adl + item.countOther} туриста</li>
          <li>{item.room}</li>
          <li>{item.meal.value}</li>
        </ul>
      </div>

    </div>
  )
};

export default HotelCard;