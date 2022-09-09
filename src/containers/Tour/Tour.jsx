import {GET_FLIGHTS_INFO_REQUEST} from "../../actions/general";
import {CLEAR_TOUR_DATA, GET_OTHER_TOURS_REQUEST, GET_TOUR_REQUEST, GET_TOUR_REVIEWS_REQUEST} from "../../actions/tour";
import {useDispatch, useSelector} from "react-redux";
import React, {memo, useEffect, useMemo} from "react";
import GalleryGrid from "../../components/GalleryGrid/GalleryGrid";
import './Tour.scss'
import {useLocation} from "react-router";
import Loader from "../../components/Loader/Loader";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import ReviewItem from "../../components/ReviewItem/ReviewItem";
import Button from "../../components/Button/Button";
import {selectLoading, selectOtherTours, selectReviews, selectTourInfo} from "../../selectors/tour";
import {selectFlight} from "../../selectors/general";

const Tour = () => {

  const dispatch = useDispatch();
  const tourInfo = useSelector(selectTourInfo);
  const otherTours = useSelector(selectOtherTours);
  const reviews = useSelector(selectReviews);
  const location = useLocation();
  const id = location.search.replace('?q=', '');
  const flights = useSelector(selectFlight(id));
  const loading = useSelector(selectLoading);
  const path = useMemo(() => location.pathname.split('/').slice(1), [location.pathname]);

  useEffect(() => {
    dispatch({type: GET_TOUR_REQUEST, payload: {pathname: location.pathname + location.search, body: {}}});
    if(id){
      dispatch({type: GET_OTHER_TOURS_REQUEST, payload: {id, body: {}}});
      dispatch({type: GET_FLIGHTS_INFO_REQUEST, payload: {id, body: {}}});
    }
    return () => dispatch({type: CLEAR_TOUR_DATA})
  }, [dispatch, id, location.pathname, location.search]);

  const loadMoreReviews = () => {
    dispatch({
      type: GET_TOUR_REVIEWS_REQUEST,
      payload: {mapKey: tourInfo.hotelId, pageindex: Math.floor(reviews.items.length / 10) + 1}
    })
  }

  return (
    <div className="Tour" data-testid='tour-page'>
      <Breadcrumbs path={path}/>
      {!loading
        ? <>
            <h1>{tourInfo.title}</h1>

            <div className="tour-main">
              <div className="tour-gallery">
                <GalleryGrid images={tourInfo.images}/>
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
              <div dangerouslySetInnerHTML={{__html: tourInfo.description}}/>
            </div>

            <div className='tour-services' dangerouslySetInnerHTML={{__html: tourInfo.services}}/>

            {!!reviews?.total && (
              <div className='tour__reviews reviews'>
                <h2>Reviews of tourists <span>{reviews.total}</span></h2>
                <ul>
                  {reviews.items.map(item =>
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
                {reviews.total > reviews.items.length && (
                  <Button title='Завантажити більше' color='primary' doAction={loadMoreReviews}/>
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