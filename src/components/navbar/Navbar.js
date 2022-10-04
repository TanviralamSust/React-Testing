import "./navbar.scss"
export default function Navbar() {
    return(
        <div className="nav-container">
            <div className="search-container">
                <input type="text" className="item-container" placeholder="Name or Term" />
                <button className="item-container">Search</button>
            </div>
        </div>
    )
}