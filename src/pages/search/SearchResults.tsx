import React, { useState } from 'react';
import '../search/styles.scss'

const SearchResults: React.FC<{ results: string[] }> = ({ results }) => {
    return (
        <div className="search-results">
            {results.map((result, index) => (
                <div key={index} className="search-result-item">{result}</div>
            ))}
        </div>
    );
};

export default SearchResults;