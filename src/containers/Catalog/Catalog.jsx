import HotelCard from "../../components/HotelCard/HotelCard";
import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {CLEAR_DATA, READ_RESULTS_REQUEST, SEARCH_FORM_REQUEST} from "../../actions/general";
import Search from "../../components/Search/Search";
import useSearch from "../../hooks/useSearch";
import Button from "../../components/Button/Button";
import Loader from "../../components/Loader/Loader";

const Catalog = () => {

  const hotels = useSelector((state) => state.general.hotels);
  const flights = useSelector((state) => state.general.flights);
  const loading = useSelector((state) => state.general.loading);
  const dispatch = useDispatch();
  const {searchTours} = useSearch();

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
    searchTours()
    return () => dispatch({type: CLEAR_DATA})
  }, []);


  const loadMoreResults = () => {
    dispatch({
      type: READ_RESULTS_REQUEST,
      payload: {
        body: {
          firstCount: hotels?.sResult?.length + 10,
          hashId: hotels.hash,
          mapKey: 0,
          offset: 1,
          partnerType: "",
          show_type: "",
          sort: "",
          sortType: 1
        }
      }
    })
  };


  //LWO

  return (
    <div className='Catalog' data-testid='catalog-page'>

      <Search/>

      {!loading
        ? <>
            {!!hotels?.sResult.length
              ? <>
                  {hotels?.sResult?.map(item =>
                    <HotelCard item={item} key={item.hotelId} flights={flights[item.SystemKey]}/>
                  )}
                  {hotels && !hotels?.stopHotelSearch && hotels?.sResult.length >= 10 && (
                    <Button doAction={loadMoreResults} title='Показати більше' color='primary'/>
                  )}
                </>
              : <p>Sorry we haven't found any tours, please choose another city</p>
            }
          </>
        : <Loader/>
      }
    </div>
  )
};

export default Catalog;