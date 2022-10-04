import Layout from "./Layout";
import Home from "./home/Home";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

function App() {
  return (
    <Router>
        <Layout>
            <Routes>
                <Route path="/" element={<Home/>}/>
            </Routes>
        </Layout>
    </Router>
  );
}

export default App;
