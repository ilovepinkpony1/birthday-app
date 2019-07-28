import { Provider } from 'react-redux';
import store from './redux/configureStore';
import AppHeaderLogo from './components/AppHeaderLogo/AppHeaderLogo';
import HeaderGiftPng from './images/gift.png';
import TabLinksHandler from './components/TabLinks/TabLinksHandler';
import HaderName from './components/HeaderName/HeaderName';
import React from 'react';

const App = () => {
  return (
    <Provider store={store}>
      <div className='container'>
        <AppHeaderLogo src={HeaderGiftPng} alt={'gift-logo'} />
        <HaderName name='день рождения' />
        <TabLinksHandler />
      </div>
    </Provider>
  );
};

export default App;
