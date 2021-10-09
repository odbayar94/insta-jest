/**
 * @jest-environment jsdom
 */

 import React from "react";
 import { render, unmountComponentAtNode } from "react-dom";
 import { act } from "react-dom/test-utils";
 import renderer from "react-test-renderer";
 import '@testing-library/jest-dom'
 
 import App from "../src/App";
 
 let container: any = null;
 beforeEach(() => {
   // setup a DOM element as a render target
   container = document.createElement("div");
   document.body.appendChild(container);
 });
 
 afterEach(() => {
   // cleanup on exiting
   unmountComponentAtNode(container);
   container.remove();
   container = null;
 });
 
 it("renders with or without a name", () => {
   act(() => {
     render(<App />, container);
   });
   expect(container.textContent).toBe("Edit src/App.tsx and save to reload.Learn React");
  // expect(getByTestId('greeting-text').textContent).toBe('hello there')
   
 });

function getByTestId(arg0: string) {
  throw new Error("Function not implemented.");
}
 