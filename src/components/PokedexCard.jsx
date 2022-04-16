import React from 'react'
import '../styles/pokedex.css'

const PokedexCard = ({pokemon}) => {

    return(
        
            <div className="card flex-fill">
                <div className="card-header bg-yellow text-card rounded">
                    <h4 key={pokemon.name}>{pokemon.name}</h4>
                </div>
                <div className="card-body">
                    <div className="card-img-top img-fluid d-flex">
                        {pokemon.types.map((poketype, index) => 
                            <button key={index} className="btn btn-outline-primary text-primary d-block w-45 mx-2">{poketype.type.name}</button>                       
                        )}
                    </div>
                    <img key={pokemon.name} src={pokemon.sprites.front_default} alt={pokemon.name} className="card-img-top img-fluid" />
                </div>
                <div className="card-footer">
                    <button className="btn btn-outline-primary text-primary d-block w-75 mx-auto">More</button>
                </div>
            </div>

    )
}

export default PokedexCard;