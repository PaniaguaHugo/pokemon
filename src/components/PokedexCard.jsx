const PokedexCard = () => {

    return(
        <div className="col-6 col-lg-3 d-flex mb-3">
        <div className="card flex-fill">
            <div className="card-header bg-primary text-light rounded">
            </div>
            <div className="card-body">
                {/* <div className="card-img-top img-fluid" key={index} style={{backgroundImage:`url("${pokemon.url}")`, width:"20px", height:"20px"}} ></div> */}
                <img key="" src="" alt="card-alt-img-text" className="card-img-top img-fluid" />
            </div>
            <div className="card-footer">
                {/* <button className="btn btn-outline-primary text-primary d-block w-75 mx-auto">Action</button> */}
            </div>
        </div>
    </div>
    )
}

export default PokedexCard;