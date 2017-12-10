import axios from 'axios'

const ClinicAxios = axios.create({
  baseURL: 'https://fintac-backend.herokuapp.com/api/v1/'
});

export default ClinicAxios