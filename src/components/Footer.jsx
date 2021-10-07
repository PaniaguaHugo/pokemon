const Footer = () => {
    return(
        <>
        <div className="b-example-divider"></div>
        <div className="container">
            <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                <div className="col-md-4 d-flex align-items-center">
                <a href="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
                    <img src="pikachu-logo.png" alt="pika-foot" width="32" height="35"/> 
                </a>
                <span className="text-muted">© 2021 Company, Inc</span>
                </div>

                <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                <li className="ms-3"><i style={{fontSize: "2vw"}} className="bi bi-facebook"></i></li>
                <li className="ms-3"><i style={{fontSize: "2vw"}} className="bi bi-twitter"></i></li>
                <li className="ms-3"><i style={{fontSize: "2vw"}} className="bi bi-instagram"></i></li>
                {/* <li className="ms-3"><a target="_blank" href="www.facebook.com"><i className="bi bi-facebook"></i></a></li> */}
                </ul>
            </footer>
        </div>
        </>
    )
}

export default Footer;