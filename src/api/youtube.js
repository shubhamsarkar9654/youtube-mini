import axios from 'axios';

const KEY = 'AIzaSyB45v8Hxk36VgNGXXxbUamUlx7WwINjY9w'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 25,
        key: KEY
    }
})