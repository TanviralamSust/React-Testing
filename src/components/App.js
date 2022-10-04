import Layout from "./Layout";
import Home from "./home/Home";
import {FundProvider} from "../context/FundContext";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

function App() {
  return (
    <Router>
        <FundProvider>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                </Routes>
            </Layout>
        </FundProvider>
    </Router>
  );
}

export default App;
