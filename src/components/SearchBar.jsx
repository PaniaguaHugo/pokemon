import React, {useState} from 'react';
import {searchPokemon} from '../searchPokemon'

const SearchBar = () => {
    let [search, setSearch] = useState("");
    let [pokemon, setPokemon] = useState();

    const onChange = (e) => {
        setSearch(e.target.value)
        console.log(e.target.value)
    }

    const onClick = async (e) => {
        const data = await searchPokemon(search)
        setPokemon(data)
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

            {pokemon &&
            <div>
            <p>Nombre: {pokemon.name.toUpperCase()}</p>
            <p>N.°{pokemon.id} </p>
            <div style={{"display": "inline-flex", "flexDirection": "column"}}>
                <img src={pokemon.sprites.front_default} alt="poke"/> 
                {pokemon.types.map((t, key) =>
                <button key={key}>{t.type.name}</button>
                )}
                </div>
            </div>
            }

        </div>

    )
}

export default SearchBar;