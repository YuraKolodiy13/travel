import React from 'react';
import {Link} from "react-router-dom";
import './Breadcrumbs.scss'
import {COUNTRIES_IDS} from "../../helpers/constants";

const Breadcrumbs = ({path}) => {
  return(
    <ul className='breadcrumbs'>
      <li>
        <Link to='/'>Home</Link>
      </li>
      {path?.map((item, key) =>
        <li key={key}>
          {key !== path.length - 1
            ? <Link
                to={`/${path.slice(0, -1).join('/')}`}>
                {COUNTRIES_IDS.hasOwnProperty(item) ? COUNTRIES_IDS[item].name : item}
              </Link>
            : <span>{COUNTRIES_IDS.hasOwnProperty(item) ? COUNTRIES_IDS[item].name : item}</span>
          }
        </li>
      )}
    </ul>
  )
};

export default Breadcrumbs;