import "./home.scss"
import {useContext} from "react";
import FundContext from "../../context/FundContext";
import { DataGrid } from '@mui/x-data-grid';

export default function Home() {
    const {funds, loading} = useContext(FundContext)


    const columns = [
        { field: 'id', headerName: 'ID', width: 150 },
        { field: 'name', headerName: 'Fund Name', width: 350 },
        { field: 'exchange', headerName: 'Exchange', width: 150 },
        { field: 'ticker', headerName: 'Ticker', width: 150 },]

    return loading? (<div data-testid="loading-container">
        ...Loading
        </div>)
        : (
            <div data-testid="fund-list-container" className="home-container">
                <DataGrid
                    rows={funds}
                    getRowId={(funds) => funds.id}
                    columns={columns}
                    pageSize={12}
                    rowsPerPageOptions={[12]}
                    experimentalFeatures={{ newEditingApi: true }}
                />
            </div>
            // (
            //     funds.map((fund, index)=> (
            //         <div key={index}>
            //             <span>{fund.name}</span>
            //         </div>
            //
            //     ))
        // <div className="home-container">
        //     <span>Loading</span>
        //     <span>List</span>
        // </div>
    )
}