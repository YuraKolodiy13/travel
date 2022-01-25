import React, {useEffect} from "react";
import {useDispatch} from "react-redux";
import {GET_HOT_TOURS_REQUEST} from "../../actions/general";
import Search from "../../components/Search/Search";

const Homepage = () => {

  const dispatch = useDispatch();

  useEffect(() => {
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
          "cityFrom":5,
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

      <Search/>

    </div>
  )
};

export default Homepage;