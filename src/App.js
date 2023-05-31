import './App.css';
import { Header } from './components/header/Header';
import { SubredditList } from './components/subreddit/SubredditList';
import { Feed } from './components/feed/Feed';
import { Filter } from './components/filter/Filter';
import React from 'react';
import { Provider } from 'react-redux';
import store from './store/Store';

function App() {

  return (
    <Provider store={store}>
      <div className='app'>
        <Header />
        <div className='main'>
          <div className='side-bar'>
            <Filter />
            <SubredditList />
          </div>
          <Feed />
        </div>
      </div>
    </Provider >
  );
}

export default App;