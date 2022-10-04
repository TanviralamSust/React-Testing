import Navbar from "./navbar/Navbar";
import "./layout.scss"

export default function Layout({children}) {
    return(
        <>
            <Navbar></Navbar>
            <main className="main">
                <div className="container">
                    {children}
                </div>
            </main>
        </>
    )
}