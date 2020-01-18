// Test away!
import React from "react";
import Controls from "./Controls";
import {render, fireEvent} from  "@testing-library/react";


describe("test from controls", ()=> {

    //getByText is a testing library query
    test("is Controls rendering", () => {
        render( <Controls />)
    
    })
    test("if locked is true, gate will unlock", () =>{
        const {getByText} = render(<Controls locked={true} />)
        getByText(/Unlock Gate/i)
    })

    test("when clicked text buttons will event an action", () => {
        const {getByText} = render(<Controls />)
        const buttonIsClosed = getByText(/Close Gate/i);
        const buttonIsLocked = getByText(/Lock Gate/i);
        
        fireEvent.click(buttonIsClosed);
        getByText(/Close Gate/i);
        fireEvent.click(buttonIsLocked);
        getByText(/Lock Gate/i);

    })


})

