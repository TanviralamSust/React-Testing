import {createContext, useEffect, useState} from "react";
import axios from "axios";

const FundContext = createContext();

export function FundProvider({children}) {
    const [loading, setLoading] = useState(true);
    const [funds, setFunds] = useState([]);
    const [error, setError] = useState(false);

    useEffect(() => {
        getFunding("")
    }, []);

    async function getFunding(term){
        try {
            const response = await axios.get("http://localhost:3009/api/v1/funds", (term !== "" ? {params: {term:term}}:{}));
            setFunds(response.data);
            setLoading(false);
            setError(false);
        }catch (err) {
            setLoading(false);
            setError(true)
        }
    }

    const value = {
        loading,
        error,
        funds,
        getFunding
    }
    return(
        <FundContext.Provider value={value}>
            {children}
        </FundContext.Provider>
    )
}

export default FundContext;