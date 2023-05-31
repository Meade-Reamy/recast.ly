import { API_KEY, YOUTUBE_API_KEY } from '../config/config.js';

$.ajaxPrefilter(function (settings, _, jqXHR) {
  jqXHR.setRequestHeader('Authorization', API_KEY);
});

var searchYouTube = (query, callback = () => {}) => {
  $.ajax({
    type: 'GET',
    url: 'https://app-hrsei-api.herokuapp.com/api/recastly/videos',
    data: {q: query, youtube_api_key: 'AIzaSyDLXnRVyvxlXt23_FFw3Bji_YD4gT-6guo'},
    success: (data) => {
      console.log(data);
      console.log(data[0].snippet.description);
      callback(data);
    },
    error: (status) => {
      console.log('ERROR ERROR ERROR', status);
    }
  });
  // $.get('https://app-hrsei-api.herokuapp.com/api/recastly/videos', query, function(data) {
  //   callback(data);
  // });
};

// console.log('IN SEARCHYT FILE', searchYouTube('cats', (data) => {
//   console.log('in search', data);
//   setVideos(data);
// }));

export default searchYouTube;
