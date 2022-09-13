import React, {memo, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {SEARCH_FORM_REQUEST} from "../../actions/general";
import {GET_HOT_TOURS_REQUEST, GET_RECOMMENDED_TOURS_REQUEST} from "../../actions/homepage";
import Search from "../../components/Search/Search";
import HotelCard from "../../components/HotelCard/HotelCard";
import Loader from "../../components/Loader/Loader";
import {DEFAULT_SEARCH_ALL_TOURS_VALUE, DEFAULT_SEARCH_VALUE} from "../../helpers/constants";
import {selectFlights, selectLoading} from "../../selectors/general";
import {selectHotTours, selectRecommendedTours} from "../../selectors/homepage";

const Homepage = () => {

  const hotTours = useSelector(selectHotTours);
  const loading = useSelector(selectLoading);
  const recommendedTours = useSelector(selectRecommendedTours);
  const flights = useSelector(selectFlights);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: SEARCH_FORM_REQUEST,
      payload: DEFAULT_SEARCH_VALUE
    })
    dispatch({
      type: GET_HOT_TOURS_REQUEST,
      payload: DEFAULT_SEARCH_ALL_TOURS_VALUE
    })
    dispatch({
      type: GET_RECOMMENDED_TOURS_REQUEST,
      payload: DEFAULT_SEARCH_ALL_TOURS_VALUE
    })
  }, [dispatch]);


  return (
    <div className='Homepage'>
      {!loading
        ? <>
            <Search />
            {!!hotTours.length && (
              <div className="hotTours">
                <h3>Гарячі тури</h3>
                {hotTours?.map(item =>
                  <HotelCard item={item} key={item.hotelId} flights={flights[item.SystemKey]}/>
                )}
              </div>
            )}
            {!!recommendedTours.length && (
              <div className="recommendedTours">
                <h3>Рукомендовані тури</h3>
                {recommendedTours?.map(item =>
                  <HotelCard item={item} key={item.hotelId} flights={flights[item.SystemKey]}/>
                )}
              </div>
            )}
          </>
        : <Loader/>
      }

    </div>
  )
};

export default memo(Homepage);