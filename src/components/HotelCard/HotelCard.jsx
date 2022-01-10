import React from "react";
import './HotelCard.scss';

const HotelCard = ({item}) => {
  return (
    <div className='HotelCard'>
      <div className="HotelCard__img">
        <img src={item.photo} alt=""/>
      </div>
      <div className="HotelCard__info">
        {item.hotel.value}
        ${item.price}

        <ul>
          {item.flyInclude && <li>Включно з перельотом ({item.cityFromName})</li>}
          <li>На {item.nights} ночей</li>
          <li>Ціна за {item.adl} туриста</li>
          <li>{item.room}</li>
          <li>{item.meal.value}</li>
        </ul>
      </div>

    </div>
  )
};

export default HotelCard;