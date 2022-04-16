import { useEffect, useState } from "react";
import PokedexCards from "../components/PokedexCards";
import SearchBar from "../components/SearchBar";
import {getPokemonData, getPokemons} from "../searchPokemon";

const Pokedex = () => {

    const [pokemons, setPokemons] = useState([])
    
    const fetchPokemons = async () => {
        try{
            const data = await getPokemons()
            const promises = data.results.map(async (pokemon) => {
                return await getPokemonData(pokemon.url) //mapeamos para obtener resultados del pokemon
            })
            const results = await Promise.all(promises) //Promise.all espera que regresen todos los resultados para luego seguir el código.
            setPokemons(results)
            console.log(results)
        }catch(err){
            
        }
    }

    useEffect(() => {
        fetchPokemons()
    }, [])

    // const pagination = async () => {
    //     let pagination = await fetch(pokemonApi.next)
    //     let {results, next, previous} = await pagination.json()
    //     setPokemonApi({
    //         pokeData:  results,
    //         next,
    //         previous
    //     })        
    // }

    return(
        <section className="container">
            <div className="">
                <h2>Pokedex</h2>
                <SearchBar />

                <PokedexCards pokemons={pokemons}/>



            {/*                                //Paginación                       */}
                <nav aria-label="Pagination">
                <ul className="pagination">
                    <li className="page-item">
                    <a className="page-link" aria-label="Previous" href="/">
                        <span aria-hidden="true">&laquo;</span>
                    </a>
                    </li>
                    <li className="page-item"><a className="page-link" href="/">1</a></li>
                    <li className="page-item"><a className="page-link" href="/">2</a></li>
                    <li className="page-item"><a className="page-link" href="/">3</a></li>
                    <li className="page-item">
                    <a className="page-link" aria-label="Next">
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