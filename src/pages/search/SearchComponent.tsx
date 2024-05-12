import React, { useState } from 'react';
import Autosuggest from 'react-autosuggest';
import '../search/styles.scss';

const SearchComponent: React.FC<{ onSearch: (query: string) => void }> = ({ onSearch }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [suggestions, setSuggestions] = useState<string[]>([]);

    const handleChange = (event: React.FormEvent<HTMLElement>, { newValue }: Autosuggest.ChangeEvent) => {
        setSearchQuery(newValue);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        onSearch(searchQuery);
    };

    const getSuggestions = (value: string) => {
        return [];
    };

    const inputProps = {
        placeholder: 'Введите текст',
        value: searchQuery,
        onChange: handleChange as (event: React.FormEvent<HTMLElement>, params: Autosuggest.ChangeEvent) => void,
        className: 'search-input'
    };


    return (
        <form className="search-container" onSubmit={handleSubmit}>
            <Autosuggest
                suggestions={suggestions}
                onSuggestionsFetchRequested={({ value }) => setSuggestions(getSuggestions(value))}
                onSuggestionsClearRequested={() => setSuggestions([])}
                getSuggestionValue={(suggestion) => suggestion}
                renderSuggestion={(suggestion) => <div>{suggestion}</div>}
                inputProps={inputProps}
            />
        </form>
    );
};

export default SearchComponent;
