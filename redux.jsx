// import
const redux = require('redux');
const createStore = redux.createStore;

const initialStore = {
  value: 0,
  age: 32
}

// 2. reducer (mengubah isi store)
const rootReducer = (state = initialStore, action) => {
  switch (action.type) {
    case 'ADD_AGE':
      return {
        ...state,
        age: state.age + 2
      }
    case 'ADD_VALUE':
      return {
        ...state, //semua state
        value: state.value + action.newVal
      }
    default:
      return state;
  }
}

// 1. store (wadah besar buat state2)
const store = createStore(rootReducer);
console.log(store.getState());

// 4. subcription ( jejak perubahan)
store.subscribe(() => console.log('store change :', store.getState()));

// 3. dispatching action (membuat aksi untuk menjalankan reducer)
store.dispatch({ type: 'ADD_AGE' });
store.dispatch({ type: 'ADD_VALUE', newVal: 32 });
console.log(store.getState());