import { configureStore, combineReducers } from "@reduxjs/toolkit";
import subredditsReducer from '../components/slices/SubredditSlice';
import feedReducer from '../components/slices/FeedSlice.js'
import searchReducer from '../components/slices/SearchSlice.js';

const store = configureStore({
    reducer: combineReducers({
        subreddits: subredditsReducer,
        feed: feedReducer,
        search: searchReducer
    })
})

export default store;