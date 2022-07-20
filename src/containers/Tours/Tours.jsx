import HotelCard from "../../components/HotelCard/HotelCard";
import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {GET_TOURS_BY_COUNTRY_REQUEST} from "../../actions/general";
import {useParams} from "react-router";
import {COUNTRIES_IDS} from "../../helpers/constants";

const Tours = () => {

  const toursByCountry = useSelector((state) => state.general.toursByCountry);
  const dispatch = useDispatch();
  const {country} = useParams();
  console.log(useParams(), 'useParams()')

  useEffect(() => {
    dispatch({
      type: GET_TOURS_BY_COUNTRY_REQUEST,
      payload: {
        body: {
          countryId: String(COUNTRIES_IDS[country]),
        }
      }
    })
  }, []);

  return (
    <div className='Tours'>

      {toursByCountry?.map(item =>
        <HotelCard item={item.info} key={item.id}/>
      )}
    </div>
  )
};

export default Tours;