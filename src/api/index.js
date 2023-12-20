//import axios
import axios from 'axios';

const Api = axios.create({
    //set default endpoint API
    baseURL: 'http://localhost:8000/'
    // baseURL: 'https://sarimulyabackend.000webhostapp.com/'
})

export default Api