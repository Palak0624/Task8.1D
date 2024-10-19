import React, { useState } from 'react';
import './Menu.css';

const MenuBar = () => {
    const [searchText, setSearchText] = useState('');

    const handleSearchChange = (event) => {
        setSearchText(event.target.value);
    };

    const handleSearchSubmit = (event) => {
        event.preventDefault(); // Corrected method name
        console.log('Searching for: ', searchText);
    };

    return (
        <div className="search-bar">
            <p>New Post</p>
            <form onSubmit={handleSearchSubmit}>
                <input 
                    type="text" 
                    value={searchText} 
                    onChange={handleSearchChange} 
                    placeholder="Search..." 
                />
                <button type="submit">Search</button>
            </form>
        </div>
    );
};

export default MenuBar;
