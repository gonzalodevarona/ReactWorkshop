import React from 'react'
import axios from 'axios';

// Next we make an 'instance' of it
const instance = axios.create({
// .. where we make our configurations
    baseURL: 'https://api.themoviedb.org/3/'
});

// Where you would set stuff like your 'Authorization' header, etc ...
instance.defaults.headers.common['Authorization'] = '15e383204c1b8a09dbfaaa4c01ed7e17';

// Also add/ configure interceptors && all the other cool stuff


export default instance;