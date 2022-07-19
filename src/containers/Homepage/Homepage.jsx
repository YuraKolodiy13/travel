import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {GET_HOT_TOURS_REQUEST, GET_RECOMMENDED_TOURS_REQUEST, SEARCH_FORM_REQUEST} from "../../actions/general";
import Search from "../../components/Search/Search";
import HotelCard from "../../components/HotelCard/HotelCard";
import Input from "../../components/Input/Input";
import Loader from "../../components/Loader/Loader";
import CountryCard from "../../components/CountryCard/CountryCard";
import Collapse from "@mui/material/Collapse";
import Button from "@mui/material/Button";

const Homepage = () => {

  const hotTours = useSelector((state) => state.general.hotTours);
  const loading = useSelector((state) => state.general.loading);
  const recommendedTours = useSelector((state) => state.general.recommendedTours);
  const flights = useSelector((state) => state.general.flights);
  const searchForm = useSelector((state) => state.general.searchForm);
  const [showAllOtherCountries, setShowAllOtherCountries] = useState(false);
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
            <div className="available-countries">
              <div className="popular-countries">
                <h4>Популярні країни</h4>
                <ul>
                  {searchForm?.destination?.options?.countries.popular.map(item =>
                    <CountryCard key={item.id} name={item.name} imgSrc={item.alpha2}/>
                  )}
                </ul>
              </div>
              <div className="others-countries">
                <h4>Інші країни</h4>
                <ul>
                  {searchForm?.destination?.options?.countries.others.slice(0, 6).map(item =>
                    <CountryCard key={item.id} name={item.name} imgSrc={item.alpha2}/>
                  )}
                </ul>
                {searchForm?.destination?.options?.countries.others.length > 6 && (
                  <>
                    <Collapse in={showAllOtherCountries} timeout="auto" unmountOnExit>
                      <ul>
                      {searchForm?.destination?.options?.countries.others.slice(6).map(item =>
                        <CountryCard key={item.id} name={item.name} imgSrc={item.alpha2}/>
                      )}
                      </ul>
                    </Collapse>
                    <Button onClick={() => setShowAllOtherCountries(!showAllOtherCountries)}>
                      show {showAllOtherCountries ? 'less' : 'more'}
                    </Button>
                  </>
                )}

              </div>

            </div>
          </>
        : <Loader/>
      }

    </div>
  )
};

export default Homepage;