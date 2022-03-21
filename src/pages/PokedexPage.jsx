import { useEffect, useState } from "react";
import PokedexCards from "../components/PokedexCards";

const Pokedex = () => {

    const [pokemonApi, setPokemonApi] = useState({pokeData: []})
    
    const getPokeApi = async () => {
        const data = await fetch("https://pokeapi.co/api/v2/pokemon")
        const {results, next, previous} = await data.json()
        setPokemonApi({
            pokeData: results,
            next,
            previous
        })
    }

    const pagination = async () => {
        let pagination = await fetch(pokemonApi.next)
        let {results, next, previous} = await pagination.json()
        setPokemonApi({
            pokeData:  results,
            next,
            previous
        })        
    }

    return(
        <section className="container">
            <div className="">
                <h2>Pokedex</h2>

                <PokedexCards pokeData={pokemonApi.pokeData}/>

                <nav aria-label="Page navigation example">
                <ul className="pagination">
                    <li className="page-item">
                    <a className="page-link" aria-label="Previous">
                        <span aria-hidden="true">&laquo;</span>
                    </a>
                    </li>
                    {/* <li className="page-item"><a className="page-link" href="/">1</a></li>
                    <li className="page-item"><a className="page-link" href="/">2</a></li>
                    <li className="page-item"><a className="page-link" href="/">3</a></li> */}
                    <li className="page-item">
                    <a className="page-link" aria-label="Next" onClick={() => pagination()} >
                        <span aria-hidden="true">&raquo;</span>
                    </a>
                    </li>
                </ul>
                </nav>
            </div>
        </section>
    )
}

export default Pokedex;