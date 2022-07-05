import React from "react";
import './HotelCard.scss';
import {GET_FLIGHTS_INFO_REQUEST} from "../../actions/general";
import {useDispatch} from "react-redux";

const HotelCard = ({item, flights}) => {

  const dispatch = useDispatch();

  const getFlightsTimeDuration = (hours1, hours2, mins1, mins2) => {
    let sec_num = (hours1 - hours2) * 3600 + (mins1 - mins2) * 60;
    let hours = Math.floor(sec_num / 3600);
    let minutes = Math.floor((sec_num - (hours * 3600)) / 60);

    if (minutes < 10) {minutes = "0"+minutes;}
    return hours + ':' + minutes;
  }

  if(!item) return null;

  return (
    <div className='HotelCard'>
      <div className="hotelCard__img">
        <img src={item.photo} alt=""/>
      </div>
      <div className="hotelCard__info">
        <div className="hotelCard__price">
          <a href={`${item.hotelUrl}/q=${item.SystemKey}`}>{item.hotel?.value}</a>
          <span>   ${item.price}</span>/<span>{item.priceUAH}грн</span>
        </div>

        <ul>
          {item.flyInclude && <li>Включно з перельотом ({item.cityFromName})</li>}
          <li>
            Виліт на відпочинок {''}
            {('0' + new Date(item.checkIn?.value).getDate()).slice(-2)}.{('0' + (new Date(item.checkIn?.value).getMonth() + 1)).slice(-2)}
            {!flights
              ? <span className='hotelCard__time' onClick={() => dispatch({type: GET_FLIGHTS_INFO_REQUEST, payload: {id: item.SystemKey, body: {}}})}>Час</span>
              : <span>
                  {' о '}{flights.from.departure.time},
                  {' '}Приліт {flights.from.arrival.time},
                  тривалість польоту {getFlightsTimeDuration(parseInt(flights.from.arrival.time), parseInt(flights.from.departure.time), flights.from.arrival.time.slice(-2), flights.from.departure.time.slice(-2))}
                </span>
            }
          </li>
          {flights && (
            <li>
              Виліт додому {''}
              {flights.to.date.slice(0, 5)}
              <span>
                {' о '}{flights.to.departure.time},
                {' '}Приліт {flights.to.arrival.time},
                тривалість польоту {getFlightsTimeDuration(parseInt(flights.to.arrival.time), parseInt(flights.to.departure.time), flights.to.arrival.time.slice(-2), flights.to.departure.time.slice(-2))}
              </span>
            </li>
          )}

          <li>На {item.nights} ночей</li>
          <li>Ціна за {item.adl + item.kids} туриста</li>
          <li>{item.room}</li>
          <li>{item.meal?.value}</li>
        </ul>
      </div>

    </div>
  )
};

export default HotelCard;