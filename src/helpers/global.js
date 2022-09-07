export const addDefaultSrc = e => {
  e.target.src = '/no-avatar.jpg';
}

export const getTimeDuration = (hours1, hours2, mins1, mins2) => {
  let sec_num = (hours1 - hours2) * 3600 + (mins1 - mins2) * 60;
  let hours = Math.floor(sec_num / 3600);
  let minutes = Math.floor((sec_num - (hours * 3600)) / 60);

  if (minutes < 10) minutes = `0${minutes}`
  if (hours < 0) hours = 24 + hours
  return hours + ':' + minutes;
}

export const getFullDate = date => {
  if(!date) return null;
  const month = ('0' + (date.getMonth() + 1)).slice(-2);
  const day = ('0' + date.getDate()).slice(-2);
  const year = date.getFullYear();

  return `${day}.${month}.${year}`;
};

export const commify = (num) => num?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") || '';

export const getNightsValue = (nightsFrom, nightsTo) => {
  let value = '';
  if(nightsFrom === nightsTo){
    value += nightsFrom
  }else {
    value += `${nightsFrom}-${nightsTo}`
  }
  if(nightsTo === 1){
    value += ' ніч'
  }else if(nightsTo < 5){
    value += ' ночі'
  }else {
    value += ' ночей'
  }
  return value
}

export const getTouristsValue = (adults, kids) => {
  let value = adults + kids;
  if(value === 1) value += ' турист'
  else if(value < 5) value += ' туриста'
  else value += ' туристів'
  return value;
}