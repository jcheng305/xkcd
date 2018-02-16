import axios from 'axios';

export function loadComics (){
  return(dispatch)=> {
    return axios.get(`https://www.xkcd.com/${ getRandomInt() }/info.0.json`)
    .then(function(response) {
      console.log("response is",response)
      dispatch({
        type: "FETCH_COMICS",
        payload: response.data,
        randomComic: response.data.img
      });
      window.location = 'http://localhost:3000/'
    })
    .catch(function(error) {
      console.log(error);
      dispatch ({
        type: "FETCH_COMICS_FAILED",
        payload: error
      });
    });
  }
}
function getRandomInt() {
  return Math.floor(Math.random() * Math.floor(1900));
}
