let defaultState = {
  color: "red"
}

const mainReducer=(state=defaultState,action)=>{
  if(action.type==="GENERATE_COMIC"){
    return{
      ...state,
      comics:action.comics
    }
  } else {
    return {
      ...state
    }
  }
}

export default mainReducer;
