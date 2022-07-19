export const addDefaultSrc = e => {
  e.target.src = '/no-avatar.jpg';
}

export const getTimeDuration = (hours1, hours2, mins1, mins2, ss) => {
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

