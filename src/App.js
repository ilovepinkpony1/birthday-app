import { Provider } from 'react-redux';
import store from './redux/configureStore';
import AppHeaderLogo from './components/AppHeaderLogo/AppHeaderLogo';
import HeaderGiftPng from './images/gift.png';
import ShowMoreButton from './components/ShowMoreButton/ShowMoreButton';
import TabLinks from './components/TabLinks/TabLinks';
import React from 'react';

const App = () => {
  return (
    <Provider store={store}>

    <div className='container'>
      <AppHeaderLogo src={HeaderGiftPng} alt={'gift-logo'} />
      <TabLinks />
      <ShowMoreButton />
    </div>

    </Provider>
  );
};

export default App;
