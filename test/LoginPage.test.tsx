/**
 * @jest-environment jsdom
 */



import React from 'react';
import { render} from '@testing-library/react';
import renderer from 'react-test-renderer';
import { Provider, useDispatch } from 'react-redux'
import configureStore from 'redux-mock-store'

// My own import
import LoginPage from '../src/pages/LoginPage';

describe('LoginPage', () => {
  const initialState = {
          currentUser: null,
          logginIn: false,
          error: false,
          errorMessage: null,
          userId: null,
          token:null,
  }
  const mockStore = configureStore()
  let store: any;

  it('Snap shot"', () => {
    store = mockStore(initialState)
    // const { getByText } = render(<Provider store={store}><LoginPage /></Provider>)
    // expect(getByText('Hello Worldd!')).not.toBeNull()

    const appSnap = renderer.create(<Provider store={store}><LoginPage /></Provider>).toJSON()
    expect(appSnap).toMatchSnapshot()

   
  })
})

// const ReduxProvider = ({ children, reduxStore }) => (
//   <Provider store={reduxStore}>{children}</Provider>
// );

// test("...", () => {
//   const store = configureStore();
//   const wrapper = ({ children }) => (
//     <ReduxProvider reduxStore={store}>{children}</ReduxProvider>
//   );
//   const { result } = renderHook(() => {
//     useSaveAuthenticationDataToStorages(useDispatch());
//   }, { wrapper });
//   // ... Rest of the logic
// });

// jest.mock('react-redux', () => {
//   const ActualReactRedux = require.requireActual('react-redux');
//   return {
//       ...ActualReactRedux,
//       useSelector: jest.fn().mockImplementation(() => {
//           return mockState;
//       }),
//   };
// });




// function useSaveAuthenticationDataToStorages(arg0: any) {
//   throw new Error('Function not implemented.');
// }

// function renderHook(arg0: () => void, arg1: { wrapper: ({ children }: { children: any; }) => JSX.Element; }): { result: any; } {
//   throw new Error('Function not implemented.');
// }

// it("LoginPage maches snapshot", ()=>{
//   const appSnap = renderer.create(<LoginPage/>).toJSON()
//   expect(appSnap).toMatchSnapshot()
// });

// describe('With React Testing Library', () => {
//   const initialState = {output:10}
//   const mockStore = configureStore()
//   let store,wrapper;

//   it('Shows "Hello world!"', () => {
//     store = mockStore(initialState)
//     const { getByText } = render(<Provider store={store}><LoginPage /></Provider>)

//     expect(getByText('Hello Worldd!')).not.toBeNull()
//   })
// })

// jest.mock('react-redux', () => {
//   const ActualReactRedux = jest.requireActual('react-redux');
//   return {
//       ...ActualReactRedux,
//       useSelector: jest.fn().mockImplementation(() => {
//           return mockState;
//       }),
//   };
// });