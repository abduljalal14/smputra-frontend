//import axios
import axios from 'axios';

const Api = axios.create({
    //set default endpoint API
    baseURL: 'https://sarimulyabackend.000webhostapp.com/'
})

export default Api