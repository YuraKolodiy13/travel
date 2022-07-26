import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {GET_TOURS_BY_COUNTRY_REQUEST} from "../../actions/general";
import {useLocation, useParams} from "react-router";
import {COUNTRIES_IDS} from "../../helpers/constants";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import TopHotelCard from "../../components/TopHotelCard/TopHotelCard";

const Tours = () => {

  const toursByCountry = useSelector((state) => state.general.toursByCountry);
  const dispatch = useDispatch();
  const {countryCode} = useParams();
  const location = useLocation()
  const path = location.pathname.split('/').slice(1);

  useEffect(() => {
    dispatch({
      type: GET_TOURS_BY_COUNTRY_REQUEST,
      payload: {
        body: {
          countryId: String(COUNTRIES_IDS[countryCode.toLocaleLowerCase()].id),
        }
      }
    })
  }, []);

  return (
    <div className='Tours'>
      <Breadcrumbs path={path}/>
      <div className="tours__items">
        {toursByCountry?.map(item =>
          <TopHotelCard key={item.info.hotel.mapKey} item={item.info}/>
        )}
      </div>
    </div>
  )
};

export default Tours;