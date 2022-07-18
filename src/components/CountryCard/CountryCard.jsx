import './CountryCard.scss';

const CountryCard = ({name, imgSrc}) => (
  <li>
    <img src={`https://farvater.travel//img/country_photos/md/${imgSrc}.jpg`} alt=""/>
    <p>{name}</p>
  </li>
);

export default CountryCard;