/**
 * @jest-environment jsdom
 */
import React from 'react'
import ReactDOM from 'react-dom'
import {render, cleanup} from '@testing-library/react'
import renderer from 'react-test-renderer'
// import "testing-library__jest-dom/extend-expect"

import Button from "../src/component/button/button"

afterEach(cleanup);

// it("render without crashing", ()=>{
//     const div = document.createElement("div")
//     ReactDOM.render(<Button label="click me please"></Button>,div)
//     ReactDOM.unmountComponentAtNode(div)
// })
// it("render button", ()=>{
//     const {getByTestId} = render(<Button label="click me please"></Button>)
//     expect(getByTestId('button')).toHaveTextContent("click me please")
// })

it("matches snapshot",()=>{
    const tree = renderer.create(<Button label="save"></Button>).toJSON()
    expect(tree).toMatchSnapshot()
})