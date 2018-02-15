import axios from 'axios';

export function loadComics (){
  return(dispatch)=> {
    return axios.get("https://xkcd.com/615/info.0.json")
    .then((response)=> {
      dispatch(generateComics(response.data));
    })
  }
}

export function generateComics(comics){
  return {
    type:"GENERATE_COMIC",
    comics: comics
  }
}
