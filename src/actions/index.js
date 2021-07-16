import axios from 'axios';

export const FETCHING_START = 'FETCHING_START';
export const FETCHING_SUCCESS = 'FETCHING_SUCCESS';
export const FETCHING_FAIL = 'FETCHING_FAIL';
export const ADD_SMURF = 'ADD_SMURF';
export const ERROR = 'ERROR';

export const fetchingStart = (smurfData)=>{
    return({type: FETCHING_START, payload: smurfData})
}

export const fetchingSuccess = (smurfData) => {
    return({type: FETCHING_SUCCESS, payload:smurfData})
}

export const fetchingFail = () => {
    return({type: FETCHING_FAIL})
    //possibly adding payload: err
}

export const addSmurf = (newSmurf) => {
    return({type: ADD_SMURF, payload: newSmurf})
}

export const errorMessage = (error) =>{
    return({type:ERROR, payload:error})
}


export const fetchSmurfs = () => dispatch => {
    dispatch({ type: FETCHING_START });

    axios
        .get(`http://localhost:3333/smurfs`)
        .then((res) => {
            dispatch({ type: FETCHING_SUCCESS, payload: res.data });
        })
        .catch((err) => {
            dispatch({ type: FETCHING_FAIL, payload: `${err.response.message}, code: ${err.response.code}` });
            console.log(err);
        });
};

//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.
//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
//3. Add a standard action that allows us to set the value of the error message slice of state.