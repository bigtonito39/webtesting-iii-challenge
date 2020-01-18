// Test away
import React from "react";
import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Dashboard from "./Dashboard";
import {render} from "@testing-library/react";


it("are display and controls showing in the dashboard?", () => {
 const wrapper = rtl.render(<Dashboard/>);
 expect(wrapper).toMatchSnapshot();
})