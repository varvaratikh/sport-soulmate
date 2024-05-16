import React, { useState } from 'react';
import SearchResults from './SearchResults';
import SearchComponent from './SearchComponent';
import './styles.scss';

const SearchPage: React.FC = () => {
    const [searchResults, setSearchResults] = useState<string[]>([]);
    const [showText, setShowText] = useState(true);

    const handleSearch = (query: string) => {
        setSearchResults([`${query} result 1`, `${query} result 2`, `${query} result 3`]);
        setShowText(false);
    };

    return (
        <div className="search-page-container">
            {showText &&
                <div className="centered-container">
                    <p className="centered-text">Введите название спорта, город или возраст, чтобы ускорить поиск своего SportSoulMate </p>
                </div>
            }
            <SearchComponent onSearch={handleSearch} />
            <SearchResults results={searchResults} />
            <div className="semi-circle"></div>
        </div>
    );
};

export default SearchPage;
