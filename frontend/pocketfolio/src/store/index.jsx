// persist
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// redux, thunk
import {combineReducers, configureStore} from '@reduxjs/toolkit';

// slice
import oauthReducer from './oauthSlice'
import roomReducer from './roomSlice'
import portReducer from './portSlice'
import itemReducer from './itemSlice'
import guestReducer from './guestSlice'
import searchReducer from './searchSlice'


// persist
const rootPersistConfig = {
  key: 'root',
  storage,
};

const rootReducers = combineReducers({
  oauth: oauthReducer,
  room: roomReducer,
  port: portReducer,
  item: itemReducer,
  guest: guestReducer,
  search: searchReducer,
});

const persistedReducer = persistReducer(rootPersistConfig, rootReducers);

// create Store
const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
