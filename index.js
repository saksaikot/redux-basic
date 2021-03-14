const redux = require("redux");

const initState = {
  num: 0,
};

// main function to handle store state update, and return the state with particular action
const rootReducer = (state = initState, action) => {
  if (action.type === "INC_NUM") {
    return {
      ...state,
      num: state.num + 1,
    };
  }
  if (action.type === "ADD_NUM") {
    return {
      ...state,
      num: state.num + action.value,
    };
  }
  return state;
};

// create redux store
// store need to pass a main reducer,
// reducer is a function to access the store,by sending current state
// and the action need to perform in the store

const store = redux.createStore(rootReducer);

// add subscribe after creating store
store.subscribe(() => {
  console.log("[from subscribe]", store.getState());
});

//add dispatch to store,
// dispatch is like passing argument, a object with operation type
// and any additional value
// need to call after subscribe

store.dispatch({
  type: "INC_NUM",
});

// console.log(store.getState());

store.dispatch({
  type: "ADD_NUM",
  value: 34,
});

// console.log(store);

// console.log(store.getState());
