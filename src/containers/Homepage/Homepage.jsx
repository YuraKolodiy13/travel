import React, {memo, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {SEARCH_FORM_REQUEST} from "../../actions/general";
import {GET_HOT_TOURS_REQUEST, GET_RECOMMENDED_TOURS_REQUEST} from "../../actions/homepage";
import Search from "../../components/Search/Search";
import HotelCard from "../../components/HotelCard/HotelCard";
// import Input from "../../components/Input/Input";
import Loader from "../../components/Loader/Loader";
import {DEFAULT_SEARCH_VALUE} from "../../helpers/constants";

const Homepage = () => {

  const hotTours = useSelector((state) => state.homepage.hotTours);
  const loading = useSelector((state) => state.general.loading);
  const recommendedTours = useSelector((state) => state.homepage.recommendedTours);
  const flights = useSelector((state) => state.general.flights);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: SEARCH_FORM_REQUEST,
      payload: DEFAULT_SEARCH_VALUE
    })
    dispatch({
      type: GET_HOT_TOURS_REQUEST,
      payload: {
        body: {
          "landingId": null,
          "country": -1,
          "CountryAlpha": "vse-strany",
          "operatorIntId": null,
          "regions": [],
          "resorts": [],
          "hotels": [],
          "townFrom": "LWO",
          "cityFromCode": "LWO",
          "cityFrom": 5,
          "viewType": "horizontal",
          "checkIn": null,
          "dateFrom": null,
          "systemKey": null,
          "partnerType": null,
          "nightFrom": null,
          "nightTo": null
        }
      }
    })
    dispatch({
      type: GET_RECOMMENDED_TOURS_REQUEST,
      payload: {
        body: {
          "landingId": null,
          "country": -1,
          "CountryAlpha": "vse-strany",
          "operatorIntId": null,
          "regions": [],
          "resorts": [],
          "hotels": [],
          "townFrom": "LWO",
          "cityFromCode": "LWO",
          "cityFrom": 5,
          "viewType": "horizontal",
          "checkIn": null,
          "dateFrom": null,
          "systemKey": null,
          "partnerType": null,
          "nightFrom": null,
          "nightTo": null
        }
      }
    })
  }, [dispatch]);


  return (
    <div className='Homepage'>
      {!loading
        ? <>
            {/*<Input value='5' onChange={() => {}}/>*/}
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