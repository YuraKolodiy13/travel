import {GET_FLIGHTS_INFO_REQUEST, GET_OTHER_TOURS_REQUEST, GET_TOUR_REQUEST} from "../../actions/general";
import {useDispatch, useSelector} from "react-redux";
import React, {memo, useEffect} from "react";
import GalleryGrid from "../../components/GalleryGrid/GalleryGrid";
import './Tour.scss'
import {useParams} from "react-router";
import Loader from "../../components/Loader/Loader";

const Tour = () => {

  const dispatch = useDispatch();
  const tour = useSelector((state) => state.general.tour);
  const otherTours = useSelector((state) => state.general.otherTours);
  const {id} = useParams();
  const flights = useSelector((state) => state.general.flights[id]);
  const loading = useSelector((state) => state.general.loading);

  useEffect(() => {
    dispatch({type: GET_TOUR_REQUEST, payload: {pathname: window.location.pathname.replace('q=', '?q='), body: {}}});
    if(id){
      dispatch({type: GET_OTHER_TOURS_REQUEST, payload: {id, body: {}}});
      dispatch({type: GET_FLIGHTS_INFO_REQUEST, payload: {id, body: {}}});
    }
  }, [dispatch, id]);

  return (
    <div className="Hotel" data-testid='tour-page'>
      {!loading
        ? <>
            <h1>{tour.title}</h1>

            <div className="hotel-main">
              <div className="hotel-gallery">
                <GalleryGrid images={tour.images}/>
              </div>
              <div className="hotel-info">
                виліт
              </div>
            </div>

            {flights && (
              <div className="hotel-flights flights">
                <h2>Деталі переольоту</h2>
                <div className='flights-wrapper'>
                  <div className='flights-block'>
                    <h3>Виліт на відпочинок {flights.from.company}</h3>
                    <div className='flights-info'>
                      <p>{flights.from.departure.town} ({flights.from.name})</p>
                      <span>{flights.from.date} в {flights.from.departure.time}</span>
                      <span>{flights.from.departure.port}</span>
                    </div>
                    <div className='flights-info'>
                      <p>{flights.from.arrival.town}</p>
                      <span>{flights.from.dateArrival} в {flights.from.arrival.time}</span>
                      <span>{flights.from.arrival.port}</span>
                    </div>
                  </div>
                  <div className='flights-block'>
                    <h3>Повернення додому {flights.to.company}</h3>
                    <div className='flights-info'>
                      <p>{flights.to.departure.town} ({flights.to.name})</p>
                      <span>{flights.to.date} в {flights.to.departure.time}</span>
                      <span>{flights.to.departure.port}</span>
                    </div>
                    <div className='flights-info'>
                      <p>{flights.to.arrival.town}</p>
                      <span>{flights.to.dateArrival} в {flights.to.arrival.time}</span>
                      <span>{flights.to.arrival.port}</span>
                    </div>
                  </div>
                  <ul>
                    {flights.services.map((item, i) =>
                      <li key={i}>{item}</li>
                    )}
                    <li>Ознайомитися з правилами перевезення багажу можна на сайті компанії-перевізника <span>{flights.from.company}</span></li>
                  </ul>
                </div>
              </div>
            )}

            <div className="hotel-description">
              <h2>Опис готелю</h2>
              <div dangerouslySetInnerHTML={{__html: tour.description}}/>
            </div>
            <div className='hotel-services' dangerouslySetInnerHTML={{__html: tour.services}}/>

            <div className="hotel-otherTours">
              {otherTours.map((item, i) =>
                <div key={i}>
                  <span>{item.nights}</span>
                  <span>{item.room}</span>
                  <span>{item.meal.value}</span>
                  <span>{item.priceUAH}грн</span>
                </div>
              )}
            </div>
          </>
        : <Loader/>
      }
    </div>
  )
};

export default memo(Tour);