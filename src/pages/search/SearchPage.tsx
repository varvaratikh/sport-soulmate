import React, {useState} from "react";
import SearchResults from "./SearchResults";
import SearchComponent from "./SearchComponent";

const SearchPage: React.FC = () => {
    const [searchResults, setSearchResults] = useState<string[]>([]);

    const handleSearch = (query: string) => {
        // тут будет отправка введенного на сервер
        setSearchResults([`${query} result 1`, `${query} result 2`, `${query} result 3`]);
    };
    return (
        <div>
            <SearchComponent onSearch={handleSearch} />
            <SearchResults results={searchResults} />
        </div>
    );
};

export default SearchPage;