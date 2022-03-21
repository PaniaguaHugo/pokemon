import { useState } from "react";

const PokedexCards = ({pokeData}) => {

    const [pokemonList, setPokemonList] = useState([])

        pokeData.forEach((el) => {
            fetch(el.url)
            .then((res) => res.json())
            .then((data) => {
                setPokemonList(data)
            })
        });

        console.log(pokemonList)

    return(
        //main  container
        <div className="container bg-light">
            {/* //cards */}
            <div id="cards" className="bg-light">
                <h3 className="font-weight-light text-center my-3">Cards</h3>
                {/* <!-- full size Card container --> */}
                <div className="container-fluid mx-auto d-none d-md-block my-3">
                    <div className="row">

                    </div>
                </div>
                {/* /full size Card container */}
    


                {/* <!-- mobile Card container --> */}
                <div className="row d-md-none my-3">
    
                    {/* <!-- Card # --> */}
                    <div className="col-10 container mt-3 mx-auto p-0 bg-white border rounded">
                        <div className="bg-primary text-light py-1 m-0">
                            <h5 className="px-2 my-auto">Card Title</h5>
                        </div>
                        <div className="row">
                            <div className="col-5 my-auto">
                                <img src="https://dgeiu3fz282x5.cloudfront.net/g/l/l-143641.jpg" className="img-fluid" alt="img"/>
                            </div>
                            <div className="col-7 d-flex flex-column ">
                                <p className="p-2 mt-2">Shortest description of the Card.</p>
                                <div className="mt-auto mx-auto py-2 border-top">
                                    <button className="btn btn-outline-primary text-primary d-block">Action</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- /Card # -->
                    <!-- Card # --> */}
                    <div className="col-10 container mt-3 mx-auto p-0 bg-white border-right border-bottom">
                        <div className="bg-primary text-light py-1 m-0 rounded-top">
                            <h5 className="px-2 my-auto">Card Title</h5>
                        </div>
                        <div className="row">
                            <div className="col-5 my-auto">
                                <img src="https://dgeiu3fz282x5.cloudfront.net/g/l/l-143641.jpg" className="img-fluid" alt="img"/>
                            </div>
                            <div className="col-7 d-flex flex-column ">
                                <p className="p-2 mt-2">Shortest description of the Card.</p>
                                <div className="mt-auto mx-auto py-2 border-top">
                                    <button className="btn btn-outline-primary text-primary d-block">Action</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- /Card # -->
                    <!-- Card # --> */}
                    <div className="col-10 container mt-3 mx-auto p-0 bg-white border rounded">
                        <div className="bg-primary text-light py-1 m-0">
                            <h5 className="px-2 my-auto">Card Title</h5>
                        </div>
                        <div className="row">
                            <div className="col-5 my-auto">
                                <img src="https://dgeiu3fz282x5.cloudfront.net/g/l/l-143641.jpg" className="img-fluid" alt="img"/>
                            </div>
                            <div className="col-7 d-flex flex-column ">
                                <p className="p-2 mt-2">Shortest description of the Card.</p>
                                <div className="mt-auto mx-auto py-2 border-top">
                                    <button className="btn btn-outline-primary text-primary d-block">Action</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- /Card # -->
                    <!-- Card # --> */}
                    <div className="col-10 container mt-3 mx-auto p-0 bg-white border-right border-bottom">
                        <div className="bg-primary text-light py-1 m-0 rounded-top">
                            <h5 className="px-2 my-auto">Card Title</h5>
                        </div>
                        <div className="row">
                            <div className="col-5 my-auto">
                                <img src="https://dgeiu3fz282x5.cloudfront.net/g/l/l-143641.jpg" className="img-fluid"/>
                            </div>
                            <div className="col-7 d-flex flex-column ">
                                <p className="p-2 mt-2">Shortest description of the Card.</p>
                                <div className="mt-auto mx-auto py-2 border-top">
                                    <button className="btn btn-outline-primary text-primary d-block">Action</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- /Card # --> */}
    
                </div>
                {/* <!-- /mobile Card container --> */}
            </div>
            {/* /cards */}
        </div> 
        // /main container 
    )
}

export default PokedexCards;

