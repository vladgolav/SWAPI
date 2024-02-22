import React, { useEffect } from 'react';
import { UIManager, Platform } from 'react-native';
import { Provider } from 'react-redux';

import RootNavigation from 'src/navigation';
import Loader from './components/Loader';

export default () => {
  useEffect(() => {
    if (Platform.OS === 'android') {
      if (UIManager.setLayoutAnimationEnabledExperimental) {
        UIManager.setLayoutAnimationEnabledExperimental(true);
      }
    }
  }, []);

  return (
    <>
      <RootNavigation />
      <Loader />
    </>
  );
};