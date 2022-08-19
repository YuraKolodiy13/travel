import React, {memo, useMemo} from "react";
import './HotelCard.scss';
import {GET_FLIGHTS_INFO_REQUEST} from "../../actions/general";
import {useDispatch} from "react-redux";
import {Link} from "react-router-dom";
import {commify, getTimeDuration} from "../../helpers/global";
import Rating from "@mui/material/Rating";
import SimpleImageSlider from "react-simple-image-slider";
import Button from "../Button/Button";


const HotelCard = ({item, flights}) => {

  const dispatch = useDispatch();

  const images = useMemo(() => {
    let res = [...Array(4)].map((el, i) => ({url: `https://img4.farvater.travel/mapkey/${item?.hotelId}/${i}?size=thumb360`}))
    return [...res, {url: `https://staticmaps.farvater.travel/get/${item?.hotelId}`}]
  }, [item])

  if(!item) return null;

  return (
    <div className='HotelCard'>
      <div className="hotelCard__img">
        <SimpleImageSlider
          width='100%'
          height='100%'
          images={images}
          showNavs={true}
        />
      </div>
      <div className="hotelCard__info">
        <div className="hotelCard__header">
          <div className='hotelCard__left'>
            <Rating name="half-rating-read" defaultValue={+item.star.value} precision={0.5} readOnly />
            <h3>{item.hotel?.value}</h3>
            <cite>{item.countryName}, {item.region.ResortName}</cite>
          </div>
          <div className="hotelCard__right">
            {!!item.idsForText.reviewsCount && (
              <span>{item.idsForText.reviewsCount} review{item.idsForText.reviewsCount === '1' ? '' : 's'}</span>
            )}
            <div className='rating-block'>{item.rate}</div>
          </div>
        </div>
        <ul className='hotelCard__main'>
          {item.flyInclude && <li>Включно з перельотом ({item.cityFromName})</li>}
          <li>
            Виліт на відпочинок {''}
            {('0' + new Date(item.checkIn?.value).getDate()).slice(-2)}.{('0' + (new Date(item.checkIn?.value).getMonth() + 1)).slice(-2)}
            {!flights
              ? <span className='hotelCard__time' onClick={() => dispatch({type: GET_FLIGHTS_INFO_REQUEST, payload: {id: item.SystemKey, body: {}}})}>Час</span>
              : <span>
                  {' о '}{flights.from.departure.time},
                {' '}Приліт {flights.from.arrival.time},
                  тривалість польоту {getTimeDuration(parseInt(flights.from.arrival.time), parseInt(flights.from.departure.time), flights.from.arrival.time.slice(-2), flights.from.departure.time.slice(-2))}
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
                тривалість польоту {getTimeDuration(parseInt(flights.to.arrival.time), parseInt(flights.to.departure.time), flights.to.arrival.time.slice(-2), flights.to.departure.time.slice(-2))}
              </span>
            </li>
          )}

          <li>На {item.nights} ночей</li>
          <li>Ціна за {item.adl + item.kids} туриста</li>
          <li>{item.room}</li>
          <li>{item.meal?.value}</li>
        </ul>
        <div className="hotelCard__footer">
          <div className="hotelCard__price">
            <span>${commify(item.price)}</span>/<span>{commify(item.priceUAH)}грн</span>
          </div>
          <div className="hotelCard__btns">
            <Button title='Зберегти' color='primary'/>
          </div>
        </div>

      </div>
      <Link to={`${item.hotelUrl.replace('/hotel', '/countries')}?q=${item.SystemKey}`} className="hotelCard__link"/>
    </div>
  )
};

export default memo(HotelCard);