import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {GET_HOT_TOURS_REQUEST, GET_RECOMMENDED_TOURS_REQUEST, SEARCH_FORM_REQUEST} from "../../actions/general";
import Search from "../../components/Search/Search";
import HotelCard from "../../components/HotelCard/HotelCard";
import Input from "../../components/Input/Input";
import Loader from "../../components/Loader/Loader";

const Homepage = () => {

  const hotTours = useSelector((state) => state.general.hotTours);
  const loading = useSelector((state) => state.general.loading);
  const recommendedTours = useSelector((state) => state.general.recommendedTours);
  const flights = useSelector((state) => state.general.flights);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: SEARCH_FORM_REQUEST,
      payload: {
        body: {
          "Form": {
            "countryId": -1,
            "townFromId": 5
          },
        }
      }
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
  }, []);


  return (
    <div className='Homepage'>
      {!loading
        ? <>
            {/*<Input value='5' onChange={() => {}}/>*/}
            <Search />
            <h3>Гарячі тури</h3>
            {hotTours?.map(item =>
              <HotelCard item={item} key={item.hotelId} flights={flights[item.SystemKey]}/>
            )}
            <h3>Рукомендовані тури</h3>
            {recommendedTours?.map(item =>
              <HotelCard item={item} key={item.hotelId} flights={flights[item.SystemKey]}/>
            )}
          </>
        : <Loader/>
      }

    </div>
  )
};

export default Homepage;