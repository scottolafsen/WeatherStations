import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.synopticdata.com/v2/stations',
});
