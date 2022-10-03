import React from 'react'
import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://image.tmdb.org/t/p/w780'
});

export default instance;