import React, { Component } from 'react';

import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';

import { initStore } from './reduxSource/createStore';
import {rootSata} from './reduxSource/rootSaga';

import Layout from './customModules/Containers/Layout';

import 'bootstrap/dist/css/bootstrap.css';
import './customStyles/App.scss';

const sagaMiddleware = createSagaMiddleware();
const store = initStore(sagaMiddleware);

sagaMiddleware.run(rootSata);

class App extends Component {
  render() {
    return (
     <Provider store={store}>
         <Layout/>
     </Provider>
    );
  }
}

export default App;
