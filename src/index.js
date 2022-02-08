import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import Home from './containers/home/Home';
import './index.css';
import reportWebVitals from './reportWebVitals';

// redux
// import { createStore } from 'redux';
// import { Provider } from 'react-redux';
// import rootReducer from './containers/states/reducer/globalReducer';

// // store
// const storeRedux = createStore(rootReducer)

ReactDOM.render(
  <React.StrictMode>
    {/* redux */}
    {/* <Provider store={storeRedux}>
      <Home />
    </Provider> */}

    {/* context */}
    {/* <App /> */}
    <Home />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
