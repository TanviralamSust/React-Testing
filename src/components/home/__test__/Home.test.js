import {render, screen, act} from "@testing-library/react"
import React from "react";
import Home from "../Home";
import {FundProvider} from "../../../context/FundContext";

describe('Render Home', () => {
    test('initial render of home component', ()=>{
       act(()=> {
           render(<Home/>, {
               wrapper: FundProvider
           })
       })
    })
    test('check loading container render perfectly before api call', ()=>{
        act(()=> {
        render(<Home/>, {
            wrapper: FundProvider
            })
        })
        const loadingDiv = screen.getByTestId("loading-container");
        expect(loadingDiv).toBeInTheDocument()
    })
    test('check async fund list container render perfectly after api call', async ()=> {
       await act( () => {
            render(<Home/>, {
                wrapper: FundProvider
            })
        })
        const fundList = screen.getByTestId("fund-list-container");
        expect(fundList).toBeInTheDocument()
    })
})