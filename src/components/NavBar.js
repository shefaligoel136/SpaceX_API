export const NavBar = () => (
    <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">
            <h1>The SpaceX Almanac</h1>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">ABOUT</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">FEATURES</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">ROCKETS</a>
                    </li>
                    
                </ul>
            </div>
        </div>
    </nav>
)