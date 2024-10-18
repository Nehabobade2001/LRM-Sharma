import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import expireTransform from 'redux-persist-transform-expire'; // Import expire transform
import userReducer from './Reducers/userReducer';

const rootReducer = combineReducers({
  user: userReducer,
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['user'], 
  transforms: [
    expireTransform(
      {
        key: 'user',
        // Set the expiry time in milliseconds (e.g., 1 hour = 3600000 ms)
        expire: 3600000, 
        autoExpire: true, 
      },
    ),
  ],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
      },
    }),
});

export const persistor = persistStore(store);
