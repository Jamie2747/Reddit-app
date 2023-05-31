import React from "react";
import store from "../../store/Store";
import { Result } from "./Results";
import './SearchResults.css'
import { selectSearchResults } from "../slices/SearchSlice";
import { useSelector } from "react-redux";
import { ResultsLoading } from "./ResultsLoading";

export function SearchResults() {

    const results = useSelector(selectSearchResults)
    const state = store.getState();
    let resultsList = ''

    if (!results) {
        return (
            <div className="results_list">
                <p>No subreddits found</p>
            </div>
        )
    }

    if (state.search.searchLoading) {
        resultsList = ''
        return (
            <ResultsLoading />
        )
    }

    if (state.search.results) {
        resultsList = results.slice(0, 7).map(result => {
            const name = result.display_name_prefixed;
            const icon = result.icon_img;
            return (
                <Result
                    name={name}
                    icon={icon}
                />
            )
        })

        return (
            <ul className="results_list">
                {resultsList}
            </ul>
        )
    }
}