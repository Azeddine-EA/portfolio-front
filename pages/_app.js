import '../styles/globals.css';
import '../styles/Home.module.scss';
import Head from 'next/head';
import Header from '../components/global/Header';
import Footer from '../components/global/Footer';

// --- Redux ---
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import user from '../reducer/user';

// --- Redux Persist ---
import { persistReducer, persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import storage from 'redux-persist/lib/storage';

const reducers = combineReducers({ user });

const persistConfig = {
  key: 'applicationName',
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

const persistor = persistStore(store);





function App({ Component, pageProps }) {
  return (

    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Head>
          <title>Portfolio</title>
        </Head>
        {/* <h1 className="text-red-500">Hello</h1> */}
        <Header />
        <Component {...pageProps} />
        <Footer />
      </PersistGate>
		</Provider >
    
  );
}

export default App;
