import {applyMiddleware, createStore} from 'redux';
import {persistReducer, persistStore} from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import AsyncStorage from '@react-native-async-storage/async-storage';
import logger from 'redux-logger';

import rootReducer, {RootState} from './rootReducer';
import AppSaga from './rootSaga';

const sagaMiddleware = createSagaMiddleware();
const persistConfig = {
  whitelist: ['user'], // some reducers will persist
  blacklist: [],
  key: 'rgb',
  debug: __DEV__,
  stateReconciler: autoMergeLevel2,
  storage: AsyncStorage,
};

const reducer = persistReducer<RootState>(persistConfig, rootReducer);
const store = createStore(reducer, applyMiddleware(sagaMiddleware, logger));

const persistor = persistStore(store);
sagaMiddleware.run(AppSaga);

export {store, persistor};
