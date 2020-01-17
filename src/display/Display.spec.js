// Test away!
import React from "react";
import Display from "./Display";
import {render} from "@testing-library/react";

describe("display testing passing", () => {
    test("if the closed prop is true display closed", ()=> {
        const {getByText} = render(<Display closed={true}>/></Display>)
        getByText(/closed/i)
    })

    test(`if the open prop is false display open`, ()=> {
        const {getByText} = render(<Display closed={false}/>)
        getByText(/open/i)
    })
    test(`if the locked prop is true display locked"`, ()=> {
        const {getByText} = render(<Display closed={true}/>)
        getByText(/locked/i)
    })
    test(`if the unlocked prop is false display unlocked"`, ()=> {
        const {getByText} = render(<Display closed={false}/>)
        getByText(/unlocked/i)
    })

    test("display the red label if the closed props is true", ()=> {
        const {getByText} = render (<Display closed={true} />)
        const closed = getByText(/closed/i)
        expect(closed.classList).toContain("red-led")
    })
    test("display the green led if the closed props is false", ()=> {
        const {getByText} = render (<Display closed={false} />)
        const closed = getByText(/open/i)
        expect(closed.classList).toContain("green-led")
    })


})
