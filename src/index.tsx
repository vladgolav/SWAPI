import React, { useEffect } from 'react';
import { UIManager, Platform } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'

import RootNavigation from 'src/navigation';
import Loader from './components/Loader';
import store, { persistor } from './redux';

const Root = () => {
  useEffect(() => {
    if (Platform.OS === 'android') {
      if (UIManager.setLayoutAnimationEnabledExperimental) {
        UIManager.setLayoutAnimationEnabledExperimental(true);
      }
    }
  }, []);

  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <RootNavigation />
          <Loader />
        </PersistGate>
      </Provider>
    </>
  );
};

export default Root;
