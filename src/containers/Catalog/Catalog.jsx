import HotelCard from "../../components/HotelCard/HotelCard";
import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {READ_RESULTS_REQUEST} from "../../actions/general";
import Search from "../../components/Search/Search";
import useSearch from "../../hooks/useSearch";

const Catalog = () => {

  const hotels = useSelector((state) => state.general.hotels);
  const flights = useSelector((state) => state.general.flights);
  const dispatch = useDispatch();
  const {searchTours} = useSearch();

  useEffect(() => {
    searchTours()
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
    <div className='Catalog'>

      <Search/>

      {hotels?.sResult?.map(item =>
        <HotelCard item={item} key={item.id} flights={flights[item.SystemKey]}/>
      )}
      {hotels && !hotels?.stopHotelSearch && (
        <button onClick={loadMoreResults}>Показати більше</button>
      )}
    </div>
  )
};

export default Catalog;