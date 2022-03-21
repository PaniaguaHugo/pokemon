import React from 'react';
import {searchPokemon} from '../searchPokemon'
const {useState} = React;

const SearchBar = () => {
    let [search, setSearch] = useState("");

    const onChange = (e) => {
        setSearch(e.target.value)
    }

    const onClick = async (e) => {
        const data = await searchPokemon(search)
        console.log(data)
    }

    return(
        <div>
            <div className="d-inline-flex p-1">
                <input className="form-control me-2" 
                type="search" 
                onChange={onChange}
                placeholder="Search Pokémon" 
                aria-label="Search" />
                <button className="btn btn-outline-success" 
                type="submit"
                onClick={onClick}
                >Search</button>
            </div>
        </div>

    )
}

export default SearchBar;