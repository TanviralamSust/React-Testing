import {render} from "@testing-library/react"
import Home from "../Home";

describe('Render Home', () => {
    test('initial render of home component', ()=>{
        render(<Home/>)
    })
})