import axios from 'axios'

export default axios.create({
    baseURL : 'https://api.yelp.com/v3/businesses',
    headers : {
        Authorization : 'Bearer Go7k-6ix-Vk4wREFYjFzmTDoKkL2pEGHvaEwv_DtOmQoRNqTfhP8q0CglNU2C63MQ4cw3NSmiDoNCH_cX7l7mH4cU8S8eUu922K_teAitke23nAWnxTe8ZE4h-cyZHYx'
    }
}); 
