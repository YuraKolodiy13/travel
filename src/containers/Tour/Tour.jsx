import {
  GET_FLIGHTS_INFO_REQUEST,
  GET_OTHER_TOURS_REQUEST,
  GET_TOUR_REQUEST,
  GET_TOUR_REVIEWS_REQUEST
} from "../../actions/general";
import {useDispatch, useSelector} from "react-redux";
import React, {memo, useEffect} from "react";
import GalleryGrid from "../../components/GalleryGrid/GalleryGrid";
import './Tour.scss'
import {useLocation} from "react-router";
import Loader from "../../components/Loader/Loader";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import ReviewItem from "../../components/ReviewItem/ReviewItem";
import Button from "@mui/material/Button";

const Tour = () => {

  const dispatch = useDispatch();
  const tour = useSelector((state) => state.general.tour);
  const otherTours = useSelector((state) => state.general.otherTours);
  const location = useLocation();
  const id = location.search.replace('?q=', '');
  const flights = useSelector((state) => state.general.flights[id]);
  const loading = useSelector((state) => state.general.loading);
  const path = location.pathname.split('/').slice(1);

  useEffect(() => {
    dispatch({type: GET_TOUR_REQUEST, payload: {pathname: location.pathname + location.search, body: {}}});
    if(id){
      dispatch({type: GET_OTHER_TOURS_REQUEST, payload: {id, body: {}}});
      dispatch({type: GET_FLIGHTS_INFO_REQUEST, payload: {id, body: {}}});
    }
  }, [dispatch, id, location.pathname, location.search]);

  const loadMoreReviews = () => {
    dispatch({
      type: GET_TOUR_REVIEWS_REQUEST,
      payload: {mapKey: tour.hotelId, pageindex: Math.floor(tour.reviews.items.length / 10) + 1}
    })
  }

  return (
    <div className="Tour" data-testid='tour-page'>
      <Breadcrumbs path={path}/>
      {!loading
        ? <>
            <h1>{tour.title}</h1>

            <div className="tour-main">
              <div className="tour-gallery">
                <GalleryGrid images={tour.images}/>
              </div>
              <div className="tour-info">
                виліт
              </div>
            </div>

            {flights && (
              <div className="tour-flights flights">
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

            <div className="tour-description">
              <h2>Опис готелю</h2>
              <div dangerouslySetInnerHTML={{__html: tour.description}}/>
            </div>

            <div className='tour-services' dangerouslySetInnerHTML={{__html: tour.services}}/>

            {!!tour.reviews?.total && (
              <div className='tour__reviews reviews'>
                <h2>Reviews of tourists <span>{tour.reviews.total}</span></h2>
                <ul>
                  {tour.reviews.items.map(item =>
                    <ReviewItem
                      key={item.id}
                      name={item.reviewer_name}
                      date={item.item_date}
                      title={item.title}
                      text={item.full || item.short}
                      score={item.score}
                      type={item.type}
                    />
                  )}
                </ul>
                {tour.reviews.total > tour.reviews.items.length && (
                  <Button onClick={loadMoreReviews}>Load More</Button>
                )}
              </div>
            )}

            <div className="tour-otherTours">
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