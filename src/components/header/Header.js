import './Header.css';
import React, { useEffect } from 'react';
import { selectSearchTerm, setSearchTerm, setSelectedSubreddit } from '../slices/FeedSlice';
import { fetchSearch } from '../slices/SearchSlice';
import { useDispatch, useSelector } from 'react-redux';
import store from '../../store/Store';
import { SearchResults } from '../search/SearchResults';


export function Header(props) {

    const state = store.getState();
    const dispatch = useDispatch();
    const term = useSelector(selectSearchTerm)

    const handleChange = (e) => {
        dispatch(setSearchTerm(e.target.value))
    }

    useEffect(() => {
        dispatch(fetchSearch(state.feed.searchTerm))
    }, [state.feed.searchTerm])

    const handleSubmit = (event) => {
        event.preventDefault()
        dispatch(setSelectedSubreddit('r/' + term))
        dispatch(setSearchTerm(''))
    }

    return (
        <div className="header">
            <div className="logos">
                <img
                    src="/redditlogo.png"
                    alt="Reddit logo"
                    id="logo">
                </img>
            </div>
            <form onSubmit={handleSubmit} >
                <img src='/search-icon.png' id='search-icon' alt=''></img>
                <input
                    className='search-bar'
                    onChange={handleChange}
                    placeholder='Search Subreddits'
                    value={term}
                >
                </input>
                <div className='search-box'>
                    <SearchResults />
                </div>
            </form>
        </div>
    )
}