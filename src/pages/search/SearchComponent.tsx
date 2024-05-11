import React, { useState } from 'react';
import '../search/styles.scss'

const SearchComponent: React.FC<{ onSearch: (query: string) => void }> = ({ onSearch }) => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        onSearch(searchQuery);
    };

    return (
        <form className="search-container" onSubmit={handleSubmit}>
            <input
                className="search-input"
                type="text"
                placeholder="Введите текст"
                value={searchQuery}
                onChange={handleChange}
            />
        </form>
    );
};

export default SearchComponent;